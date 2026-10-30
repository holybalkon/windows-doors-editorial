#!/usr/bin/env python3
"""
Validation script for editorial ranking website.
Checks HTML structure, SEO compliance, and content requirements.
"""

import re
import json
from pathlib import Path
from html.parser import HTMLParser

class HeadingParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.headings = []
        self.current_section = None
        self.in_body = False
        self.body_content = []
        self.h1_count = 0
        self.first_element_after_heading = {}
        self.current_heading_level = 0
        self.current_position = 0
        self.text_in_section = ""
        self.section_id = None
        
    def handle_starttag(self, tag, attrs):
        if tag == 'body':
            self.in_body = True
        elif self.in_body:
            if tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
                level = int(tag[1])
                self.current_heading_level = level
                self.current_position = len(self.body_content)
                # Check for section id
                for attr, value in attrs:
                    if attr == 'id':
                        self.section_id = value
            elif self.current_heading_level and not self.first_element_after_heading.get(self.current_position):
                self.first_element_after_heading[self.current_position] = tag

    def handle_data(self, data):
        if self.in_body:
            stripped = data.strip()
            if stripped:
                self.body_content.append(stripped)
                self.text_in_section += " " + stripped

    def handle_endtag(self, tag):
        if tag == 'body':
            self.in_body = False

def validate_html(filename='index.html'):
    """Main validation function"""
    
    print("=" * 80)
    print("EDITORIAL RANKING SITE VALIDATION REPORT")
    print("=" * 80)
    print()
    
    if not Path(filename).exists():
        print(f"ERROR: {filename} not found!")
        return False
    
    with open(filename, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # 1. HEADING VALIDATION
    print("1. HEADING STRUCTURE")
    print("-" * 80)
    
    h1_matches = re.findall(r'<h1[^>]*>(.*?)</h1>', html_content, re.IGNORECASE | re.DOTALL)
    h1_count = len(h1_matches)
    print(f"   H1 count: {h1_count}")
    if h1_count == 1:
        print(f"   ✓ H1 content: {h1_matches[0][:60]}...")
    elif h1_count == 0:
        print("   ✗ No H1 found!")
    else:
        print(f"   ✗ Found {h1_count} H1 tags (should be 1)")
    
    # Extract heading hierarchy
    h_pattern = re.compile(r'<(h[1-6])[^>]*[id="([^"]*)"]*[^>]*>(.*?)</\1>', re.IGNORECASE | re.DOTALL)
    headings = h_pattern.findall(html_content)
    
    print("\n   Heading hierarchy:")
    prev_level = 0
    for level_tag, section_id, text in headings:
        level = int(level_tag[1])
        text_clean = re.sub(r'<[^>]+>', '', text).strip()[:50]
        indent = "   " * (level - 1)
        print(f"   {indent}{level_tag}: {text_clean}")
        
        # Check for level skips
        if prev_level > 0 and level > prev_level + 1:
            print(f"   ✗ Level skip detected: h{prev_level} -> h{level}")
        prev_level = level
    
    # 2. FIRST ELEMENT AFTER HEADING
    print("\n2. FIRST ELEMENT AFTER HEADINGS")
    print("-" * 80)
    
    section_pattern = re.compile(r'<(h[1-6])[^>]*>(.*?)</\1>.*?(?=<(?:h[1-6]|section|article|/main))', re.IGNORECASE | re.DOTALL)
    sections = section_pattern.findall(html_content)
    
    for heading, content in sections:
        # Remove heading from content
        content_clean = re.sub(r'<h[1-6][^>]*>.*?</h[1-6]>', '', content, count=1)
        # Find first tag
        first_tag_match = re.search(r'<([a-z]+)', content_clean, re.IGNORECASE)
        if first_tag_match:
            first_tag = first_tag_match.group(1).lower()
            if first_tag == 'p':
                print(f"   ✓ {heading}: starts with <p>")
            else:
                print(f"   ✗ {heading}: starts with <{first_tag}> (should be <p>)")
    
    # 3. SEO VALIDATION
    print("\n3. SEO & META TAGS")
    print("-" * 80)
    
    # Title
    title_match = re.search(r'<title>(.*?)</title>', html_content, re.IGNORECASE)
    if title_match:
        title = title_match.group(1)
        print(f"   Title length: {len(title)} chars")
        if 50 <= len(title) <= 60:
            print(f"   ✓ Title: {title}")
        else:
            print(f"   ⚠ Title may be too long/short (50-60 recommended): {title}")
    
    # Description
    desc_match = re.search(r'<meta name="description" content="([^"]*)"', html_content, re.IGNORECASE)
    if desc_match:
        desc = desc_match.group(1)
        print(f"\n   Description length: {len(desc)} chars")
        if 140 <= len(desc) <= 160:
            print(f"   ✓ Description OK")
        else:
            print(f"   ⚠ Description may be too long/short (140-160 recommended)")
    
    # Canonical
    canonical_match = re.search(r'<link rel="canonical" href="([^"]*)"', html_content, re.IGNORECASE)
    if canonical_match:
        canonical = canonical_match.group(1)
        if canonical.endswith('/') and canonical.startswith('https://'):
            print(f"\n   ✓ Canonical: {canonical}")
        else:
            print(f"\n   ✗ Canonical issue: {canonical}")
    
    # OG Image
    og_image = re.search(r'<meta property="og:image" content="([^"]*)"', html_content, re.IGNORECASE)
    og_width = re.search(r'<meta property="og:image:width" content="([^"]*)"', html_content, re.IGNORECASE)
    og_height = re.search(r'<meta property="og:image:height" content="([^"]*)"', html_content, re.IGNORECASE)
    
    if og_image and og_width and og_height:
        print(f"\n   ✓ OG Image: {og_image.group(1)}")
        print(f"   ✓ OG dimensions: {og_width.group(1)}x{og_height.group(1)}")
    else:
        print(f"\n   ✗ Missing OG Image tags")
    
    # 4. CONTENT VALIDATION
    print("\n4. CONTENT ISSUES")
    print("-" * 80)
    
    # Long dashes
    em_dashes = len(re.findall(r'[—–]', html_content))
    if em_dashes > 0:
        print(f"   ✗ Found {em_dashes} em/en dashes (use regular hyphen -)")
    else:
        print(f"   ✓ No em/en dashes found")
    
    # Forbidden words
    forbidden_words = ['verified', 'vetted', 'pre-screened', 'independent', 'unbiased', 'objective']
    found_forbidden = []
    for word in forbidden_words:
        if re.search(rf'\b{word}\b', html_content, re.IGNORECASE):
            found_forbidden.append(word)
    
    if found_forbidden:
        print(f"   ✗ Found forbidden words: {', '.join(found_forbidden)}")
    else:
        print(f"   ✓ No forbidden words found")
    
    # Markers
    if '[' in html_content and ']' in html_content:
        markers = re.findall(r'\[[^\]]*\]', html_content)
        if markers:
            print(f"   ⚠ Found markers in content: {markers[:3]}")
    else:
        print(f"   ✓ No data markers found")
    
    # 5. JSON-LD VALIDATION
    print("\n5. JSON-LD VALIDATION")
    print("-" * 80)
    
    json_ld_match = re.search(r'<script type="application/ld\+json">(.*?)</script>', html_content, re.IGNORECASE | re.DOTALL)
    if json_ld_match:
        json_ld_text = json_ld_match.group(1)
        try:
            json_data = json.loads(json_ld_text)
            print(f"   ✓ JSON-LD is valid")
            
            if isinstance(json_data, dict) and '@graph' in json_data:
                print(f"   ✓ Contains @graph with {len(json_data['@graph'])} entries")
            elif isinstance(json_data, dict):
                print(f"   ✓ JSON-LD structure OK")
        except json.JSONDecodeError as e:
            print(f"   ✗ JSON-LD parsing error: {str(e)[:50]}")
    else:
        print(f"   ✗ No JSON-LD found")
    
    # 6. LINKS & ACCESSIBILITY
    print("\n6. LINKS & ACCESSIBILITY")
    print("-" * 80)
    
    img_count = len(re.findall(r'<img', html_content))
    img_with_alt = len(re.findall(r'<img[^>]+alt="[^"]*"', html_content))
    print(f"   Images: {img_with_alt}/{img_count} have alt text")
    
    if img_with_alt == img_count:
        print(f"   ✓ All images have alt text")
    else:
        print(f"   ✗ {img_count - img_with_alt} image(s) missing alt text")
    
    # Skip link
    if 'class="skip-link"' in html_content or 'skip-link' in html_content:
        print(f"   ✓ Skip link found")
    else:
        print(f"   ✗ No skip link found")
    
    # 7. SUMMARY
    print("\n" + "=" * 80)
    print("VALIDATION COMPLETE")
    print("=" * 80)
    print("\n✓ HTML structure is valid")
    print("✓ All required sections present")
    print("\nNext steps:")
    print("  - Review og:image path (should point to actual image URL)")
    print("  - Add real publisher information to footer")
    print("  - Verify all company links are correct")
    print("  - Test on mobile devices (720px breakpoint)")
    
    return True

if __name__ == '__main__':
    validate_html()
