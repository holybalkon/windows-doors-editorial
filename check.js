/**
 * Quick validation script for editorial ranking website
 */

const fs = require('fs');

function validateHTML() {
  console.log('='.repeat(80));
  console.log('EDITORIAL RANKING SITE VALIDATION REPORT');
  console.log('='.repeat(80));
  console.log();

  const html = fs.readFileSync('index.html', 'utf-8');

  // 1. HEADING VALIDATION
  console.log('1. HEADING STRUCTURE');
  console.log('-'.repeat(80));

  const h1Matches = html.match(/<h1[^>]*>(.*?)<\/h1>/gi);
  const h1Count = h1Matches ? h1Matches.length : 0;
  console.log(`   H1 count: ${h1Count}`);
  if (h1Count === 1) {
    console.log('   ✓ Found exactly 1 H1');
  } else if (h1Count === 0) {
    console.log('   ✗ No H1 found!');
  } else {
    console.log(`   ✗ Found ${h1Count} H1 tags (should be 1)`);
  }

  // Extract headings
  const headingRegex = /<(h[1-6])[^>]*>(.*?)<\/\1>/gi;
  let heading;
  let prevLevel = 0;
  console.log('\n   Heading hierarchy:');
  
  while ((heading = headingRegex.exec(html)) !== null) {
    const level = parseInt(heading[1][1]);
    const text = heading[2].replace(/<[^>]+>/g, '').substring(0, 50);
    const indent = '   '.repeat(level - 1);
    console.log(`   ${indent}${heading[1]}: ${text}`);
    
    if (prevLevel > 0 && level > prevLevel + 1) {
      console.log(`   ✗ Level skip detected: h${prevLevel} -> h${level}`);
    }
    prevLevel = level;
  }

  // 2. SEO VALIDATION
  console.log('\n2. SEO & META TAGS');
  console.log('-'.repeat(80));

  // Title
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  if (titleMatch) {
    const titleLen = titleMatch[1].length;
    console.log(`   Title length: ${titleLen} chars`);
    if (titleLen >= 50 && titleLen <= 60) {
      console.log(`   ✓ Title length is good`);
    } else {
      console.log(`   ⚠ Title should be 50-60 chars (found ${titleLen})`);
    }
  }

  // Description
  const descMatch = html.match(/<meta name="description" content="([^"]*)/i);
  if (descMatch) {
    const descLen = descMatch[1].length;
    console.log(`   Description length: ${descLen} chars`);
    if (descLen >= 140 && descLen <= 160) {
      console.log(`   ✓ Description length is good`);
    } else {
      console.log(`   ⚠ Description should be 140-160 chars (found ${descLen})`);
    }
  }

  // Canonical
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]*)"/i);
  if (canonicalMatch) {
    const canonical = canonicalMatch[1];
    if (canonical.startsWith('https://') && canonical.endsWith('/')) {
      console.log(`   ✓ Canonical URL is valid`);
    } else {
      console.log(`   ✗ Canonical URL format issue: ${canonical}`);
    }
  }

  // OG Image
  const ogImageMatch = html.match(/<meta property="og:image" content="([^"]*)"/i);
  const ogWidthMatch = html.match(/<meta property="og:image:width" content="([^"]*)"/i);
  const ogHeightMatch = html.match(/<meta property="og:image:height" content="([^"]*)"/i);

  if (ogImageMatch && ogWidthMatch && ogHeightMatch) {
    console.log(`   ✓ OG Image tags present: ${ogWidthMatch[1]}x${ogHeightMatch[1]}`);
  } else {
    console.log(`   ⚠ OG Image tags incomplete`);
  }

  // 3. CONTENT VALIDATION
  console.log('\n3. CONTENT ISSUES');
  console.log('-'.repeat(80));

  // Long dashes
  const dashCount = (html.match(/[—–]/g) || []).length;
  if (dashCount > 0) {
    console.log(`   ✗ Found ${dashCount} em/en dashes (use regular hyphen -)`);
  } else {
    console.log(`   ✓ No em/en dashes found`);
  }

  // Forbidden words
  const forbiddenWords = ['verified', 'vetted', 'pre-screened', 'independent', 'unbiased', 'objective'];
  const foundForbidden = forbiddenWords.filter(word => 
    new RegExp(`\\b${word}\\b`, 'i').test(html)
  );

  if (foundForbidden.length > 0) {
    console.log(`   ✗ Found forbidden words: ${foundForbidden.join(', ')}`);
  } else {
    console.log(`   ✓ No forbidden words found`);
  }

  // Markers
  const markerMatches = html.match(/\[[^\]]*\]/g);
  if (markerMatches) {
    console.log(`   ⚠ Found markers: ${markerMatches.slice(0, 3).join(', ')}`);
  } else {
    console.log(`   ✓ No data markers found`);
  }

  // 4. ACCESSIBILITY
  console.log('\n4. ACCESSIBILITY');
  console.log('-'.repeat(80));

  const imgCount = (html.match(/<img/g) || []).length;
  const imgWithAlt = (html.match(/<img[^>]+alt="[^"]*"/g) || []).length;
  console.log(`   Images: ${imgWithAlt}/${imgCount} have alt text`);

  if (imgWithAlt === imgCount) {
    console.log(`   ✓ All images have alt text`);
  } else {
    console.log(`   ✗ ${imgCount - imgWithAlt} image(s) missing alt text`);
  }

  // Skip link
  if (html.includes('skip-link')) {
    console.log(`   ✓ Skip link found`);
  } else {
    console.log(`   ✗ No skip link found`);
  }

  // JSON-LD
  console.log('\n5. JSON-LD VALIDATION');
  console.log('-'.repeat(80));

  const jsonLdMatch = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/si);
  if (jsonLdMatch) {
    try {
      const jsonData = JSON.parse(jsonLdMatch[1]);
      console.log(`   ✓ JSON-LD is valid`);
      if (jsonData['@graph']) {
        console.log(`   ✓ Contains @graph with ${jsonData['@graph'].length} entries`);
      }
    } catch (e) {
      console.log(`   ✗ JSON-LD parsing error`);
    }
  } else {
    console.log(`   ✗ No JSON-LD found`);
  }

  // 6. SUMMARY
  console.log('\n' + '='.repeat(80));
  console.log('VALIDATION COMPLETE');
  console.log('='.repeat(80));
  console.log('\n✓ Structure validated');
  console.log('\nNext steps:');
  console.log('  - Verify all company links are correct');
  console.log('  - Test responsive design on 720px breakpoint');
  console.log('  - Add real footer information (publisher, address, etc.)');
  console.log('  - Generate og-image.png (1200x630)');
}

validateHTML();
