/* ============================================================
   Shared company data for the editorial ranking + full profile page.
   Keyed by the data-company attribute used in the ranking HTML.
   Exposed as the global COMPANIES, consumed by:
     - company-profile-window.html (full profile renderer)
   Figures are company-stated / snapshot values from the editorial
   comparison; re-check live before publishing.
   ============================================================ */
var COMPANIES = {

  canadianchoice: {
    rank: 1,
    name: "Canadian Choice Windows & Doors",
    logo: "CC",
    color: "#1b4332",
    own: true,
    score: "5.0",
    tagline: "The trusted choice for over 30 years · 2,552 Google reviews",
    location: "Canada (multi-province)",
    founded: "30+ years (company-stated)",
    serves: "Multiple Canadian provinces",
    google: "4.6 ★★★★★ · 2,552 Google reviews · Magic Window 2026 comparison · re-check live",
    about: [
      "Canadian Choice Windows & Doors is a Canadian manufacturer-installer serving multiple provinces. Its official site states that the brand has been trusted for more than 30 years, has served more than 100,000 Canadian homeowners, manufactures and installs in Canada, and offers more than 40 window and door styles.",
      "The company also advertises a 25-year transferable warranty covering installation and manufacturing defects, plus flexible financing options. Within this editorial comparison it carries the strongest overall national evidence footprint."
    ],
    services: [
      ["uil-window", "Replacement Windows"],
      ["uil-entry", "Entry Doors"],
      ["uil-windsock", "Patio Doors"],
      ["uil-ruler", "Custom Windows"],
      ["uil-wrench", "Installation"],
      ["uil-usd-circle", "Financing"]
    ],
    reasons: [
      ["uil-map", "Multi-province footprint", "Manufactures and installs across several Canadian provinces, not a single local market."],
      ["uil-users-alt", "100,000+ homeowners served", "Company-stated volume well above most competitors in this set."],
      ["uil-shield-check", "25-year transferable warranty", "Long transferable coverage spanning installation and manufacturing defects, subject to terms."]
    ],
    platformTag: "PUBLIC REVIEW SNAPSHOT · Magic Window 2026 comparison",
    platform: "Shows a 4.6-star public snapshot from roughly 2,552 Google reviews in the Magic Window 2026 comparison. This live metric changes over time and must be re-checked before relying on it.",
    verified: [
      "Company-stated 30+ years in business and 100,000+ Canadian homeowners served.",
      "Canadian manufacturing and installation across multiple provinces.",
      "Advertised 25-year transferable warranty on installation and manufacturing defects.",
      "40+ window and door styles plus financing options advertised."
    ],
    facts: [
      ["uil-calendar-alt", "In business", "30+ years (stated)"],
      ["uil-users-alt", "Homeowners served", "100,000+ (stated)"],
      ["uil-shield-check", "Warranty", "25-year transferable"],
      ["uil-usd-circle", "Financing", "Available"]
    ],
    highlight: "Large multi-province footprint, 100,000+ homeowners served, Canadian manufacturing and long-term transferable coverage.",
    sources: ["windowscanada.com", "Magic Window 2026 comparison", "Company-stated figures"],
    site: "https://www.windowscanada.com/"
  },

  clera: {
    rank: 2,
    name: "Clera Windows + Doors",
    logo: "CL",
    color: "#2c5f2d",
    score: "4.8",
    tagline: "Long Ontario history + lifetime window warranty",
    location: "Ontario, Canada",
    founded: "Family-run since 1978",
    serves: "Ontario",
    google: "4.6 ★★★★★ · 847 Google reviews · Magic Window 2026 · re-check live",
    about: [
      "Clera Windows + Doors is an Ontario-based, family-run manufacturer and installer that traces its operations to 1978. The company states that its products are manufactured in Canada and its current site cites 300,000+ customers.",
      "Clera publishes a transferable lifetime warranty for many window components, with specific limits and separate terms for doors and triple glazing."
    ],
    services: [
      ["uil-window", "Windows"],
      ["uil-entry", "Entry Doors"],
      ["uil-windsock", "Patio Doors"],
      ["uil-factory", "Manufacturing"],
      ["uil-wrench", "Installation"],
      ["uil-usd-circle", "Financing"]
    ],
    reasons: [
      ["uil-calendar-alt", "Nearly five decades in Ontario", "Family-run operations traced to 1978."],
      ["uil-map-marker", "Made in Canada", "Company-stated Canadian manufacturing of its window products."],
      ["uil-shield-check", "Lifetime window warranty", "Transferable lifetime coverage on many window components, with separate door and triple-glazing terms."]
    ],
    platformTag: "PUBLIC REVIEW SNAPSHOT · Magic Window 2026",
    platform: "Shows a 4.6-star public snapshot from roughly 847 Google reviews in the Magic Window 2026 comparison. Re-check the live rating and count before publishing.",
    verified: [
      "Operations traced to 1978; family-run Ontario manufacturer-installer.",
      "Company-stated Canadian manufacturing and 300,000+ customers.",
      "Transferable lifetime warranty on many window components, subject to terms."
    ],
    facts: [
      ["uil-calendar-alt", "Since", "1978 (family-run)"],
      ["uil-map-marker", "Manufacturing", "Made in Canada"],
      ["uil-shield-check", "Warranty", "Lifetime (windows)"],
      ["uil-users-alt", "Customers", "300,000+ (stated)"]
    ],
    highlight: "Nearly five decades in Ontario with Canadian manufacturing and broad lifetime window coverage.",
    sources: ["clerawindows.com", "Magic Window 2026 comparison", "Company-stated figures"],
    site: "https://www.clerawindows.com/"
  },

  pella: {
    rank: 3,
    name: "Pella Windows & Doors of Toronto",
    logo: "PE",
    color: "#8c2f20",
    score: "4.6",
    tagline: "Premium material and style selection",
    location: "Toronto, Ontario",
    founded: "Established showroom",
    serves: "Toronto, Scarborough, Mississauga, North York, Markham, Brampton",
    google: "4.4 ★★★★☆ · 99 reviews · TrustAnalytica Toronto Sep 2026 · re-check live",
    about: [
      "Pella's Toronto showroom serves Toronto, Scarborough, Mississauga, North York, Markham and Brampton. The product range includes wood, fiberglass, vinyl and aluminum options, along with a broad mix of window and door styles.",
      "Pella is best positioned for homeowners who want a large premium product catalogue and an established showroom experience."
    ],
    services: [
      ["uil-window", "Windows"],
      ["uil-entry", "Front Doors"],
      ["uil-windsock", "Patio Doors"],
      ["uil-ruler", "Custom Windows"],
      ["uil-comment-alt-lines", "Consultation"],
      ["uil-setting", "Service"]
    ],
    reasons: [
      ["uil-layer-group", "Multiple frame materials", "Wood, fiberglass, vinyl and aluminum options in one catalogue."],
      ["uil-store", "Toronto showroom", "Physical showroom for an in-person product experience."],
      ["uil-map", "Serves the GTA", "Coverage across Toronto and surrounding municipalities."]
    ],
    platformTag: "PUBLIC REVIEW SNAPSHOT · TrustAnalytica Toronto Sep 2026",
    platform: "Shows a 4.4-star public snapshot from roughly 99 reviews in the TrustAnalytica Toronto listing (Sep 2026). Re-check the live rating and count before publishing.",
    verified: [
      "Toronto showroom serving the GTA, including Scarborough, Mississauga, North York, Markham and Brampton.",
      "Product range across wood, fiberglass, vinyl and aluminum frame materials."
    ],
    facts: [
      ["uil-store", "Showroom", "Toronto"],
      ["uil-layer-group", "Frame materials", "Wood / fiberglass / vinyl / aluminum"],
      ["uil-map", "Service area", "GTA"]
    ],
    highlight: "Broad premium product catalogue across multiple frame materials and a physical Toronto showroom.",
    sources: ["pella.com", "TrustAnalytica Toronto Sep 2026", "Company-stated figures"],
    site: "https://www.pella.com/locations/on/toronto/"
  },

  award: {
    rank: 4,
    name: "Award Windows Inc.",
    logo: "AW",
    color: "#4a5d23",
    score: "4.5",
    tagline: "Long-running Hamilton family business",
    location: "Hamilton, Ontario",
    founded: "Since 1973 (BBB)",
    serves: "Hamilton area",
    google: "4.4 ★★★★☆ · 200 Google reviews · Contract Rating Oct 2026 · re-check live",
    about: [
      "Award Windows is a Hamilton window and door company with a long local operating history. BBB records list the business as started in 1973, while the company emphasizes family ownership, custom local manufacturing and full replacement-window and exterior-door installation.",
      "Its range includes common residential styles plus bay, bow, custom-shape and tilt-and-turn windows."
    ],
    services: [
      ["uil-window", "Replacement Windows"],
      ["uil-entry", "Exterior Doors"],
      ["uil-window-section", "Bay & Bow"],
      ["uil-sync", "Tilt & Turn"],
      ["uil-ruler", "Custom Shapes"],
      ["uil-wrench", "Installation"]
    ],
    reasons: [
      ["uil-calendar-alt", "More than five decades", "BBB records list the business as started in 1973."],
      ["uil-factory", "Local manufacturing", "Custom local manufacturing of window and door products."],
      ["uil-ruler", "Custom shapes", "Bay, bow, custom-shape and tilt-and-turn window options."]
    ],
    platformTag: "PUBLIC REVIEW SNAPSHOT · Contract Rating Oct 2026",
    platform: "Shows a 4.4-star public snapshot from roughly 200 Google reviews in the Contract Rating comparison (Oct 2026). Re-check the live rating and count before publishing.",
    verified: [
      "BBB records list the business as started in 1973.",
      "Hamilton-based, family-owned with custom local manufacturing.",
      "Range includes bay, bow, custom-shape and tilt-and-turn windows."
    ],
    facts: [
      ["uil-map-marker", "Location", "Hamilton"],
      ["uil-calendar-alt", "Since", "1973 (BBB)"],
      ["uil-factory", "Manufacturing", "Local"]
    ],
    highlight: "More than five decades of Hamilton-area operating history with locally manufactured window and door solutions.",
    sources: ["awardwindows.ca", "BBB records", "Contract Rating Oct 2026"],
    site: "https://www.awardwindows.ca/"
  },

  capitall: {
    rank: 5,
    name: "Capitall Windows & Doors",
    logo: "CA",
    color: "#1f5673",
    score: "4.4",
    tagline: "Ottawa showroom + financing",
    location: "Ottawa & Gatineau",
    founded: "Serving since 2009",
    serves: "Ottawa and Gatineau region",
    google: "4.4 ★★★★☆ · 271 Google reviews · NewsInsights Oct 2026 · re-check live",
    about: [
      "Capitall Windows & Doors is a local Ottawa and Gatineau dealer-installer serving the region since 2009. The company states that it has helped more than 2,000 homeowners, operates a bilingual team, offers windows and doors from Canadian manufacturers and advertises financing options.",
      "BBB lists Capitall as accredited with an A+ rating."
    ],
    services: [
      ["uil-window", "Windows"],
      ["uil-entry", "Entry Doors"],
      ["uil-windsock", "Patio Doors"],
      ["uil-wrench", "Installation"],
      ["uil-store", "Showroom"],
      ["uil-usd-circle", "Financing"]
    ],
    reasons: [
      ["uil-calendar-alt", "Serving since 2009", "Established local Ottawa-Gatineau dealer-installer."],
      ["uil-shield-check", "BBB A+ accredited", "Listed as accredited with an A+ rating."],
      ["uil-usd-circle", "Financing advertised", "0% financing options promoted to homeowners."]
    ],
    platformTag: "PUBLIC REVIEW SNAPSHOT · NewsInsights Oct 2026",
    platform: "Shows a 4.4-star public snapshot from roughly 271 Google reviews in the NewsInsights comparison (Oct 2026). Re-check the live rating and count before publishing.",
    verified: [
      "Serving the Ottawa-Gatineau region since 2009; bilingual team.",
      "Company-stated 2,000+ homeowners helped.",
      "BBB accredited with an A+ rating.",
      "Windows and doors sourced from Canadian manufacturers."
    ],
    facts: [
      ["uil-calendar-alt", "Since", "2009"],
      ["uil-shield-check", "BBB", "A+ accredited"],
      ["uil-usd-circle", "Financing", "0% advertised"],
      ["uil-store", "Showroom", "Yes"]
    ],
    highlight: "Local Ottawa-Gatineau operation with a showroom, bilingual service, financing and BBB accreditation.",
    sources: ["capitallwindows.com", "BBB listing", "NewsInsights Oct 2026"],
    site: "https://capitallwindows.com/"
  },

  qsi: {
    rank: 6,
    name: "QSI Windows & Doors",
    logo: "QS",
    color: "#6b705c",
    score: "4.3",
    tagline: "Golden Horseshoe experience + showroom",
    location: "Stoney Creek, Ontario",
    founded: "Serving since 1976",
    serves: "Hamilton, Oakville, Burlington, Niagara, Grimsby",
    google: "4.4 ★★★★☆ · 132 Google reviews · Contract Rating Oct 2026 · re-check live",
    about: [
      "QSI Windows & Doors has served the Golden Horseshoe since 1976. The company focuses on residential windows and doors, including RevoCell window products, and operates a 6,000-square-foot showroom in Stoney Creek with full-size displays.",
      "Its service area includes Hamilton, Oakville, Burlington, Niagara, Grimsby and surrounding municipalities."
    ],
    services: [
      ["uil-window", "Windows"],
      ["uil-entry", "Entry Doors"],
      ["uil-windsock", "Patio Doors"],
      ["uil-snowflake", "RevoCell"],
      ["uil-wrench", "Installation"],
      ["uil-store", "Showroom"]
    ],
    reasons: [
      ["uil-calendar-alt", "Serving since 1976", "Nearly five decades in the Golden Horseshoe."],
      ["uil-store", "6,000 sq ft showroom", "Full-size displays in Stoney Creek."],
      ["uil-snowflake", "RevoCell windows", "Focus on RevoCell residential window products."]
    ],
    platformTag: "PUBLIC REVIEW SNAPSHOT · Contract Rating Oct 2026",
    platform: "Shows a 4.4-star public snapshot from roughly 132 Google reviews in the Contract Rating comparison (Oct 2026). Re-check the live rating and count before publishing.",
    verified: [
      "Serving the Golden Horseshoe since 1976.",
      "6,000-square-foot Stoney Creek showroom with full-size displays.",
      "Service area covers Hamilton, Oakville, Burlington, Niagara and Grimsby."
    ],
    facts: [
      ["uil-calendar-alt", "Since", "1976"],
      ["uil-store", "Showroom", "6,000 sq ft"],
      ["uil-map", "Region", "Golden Horseshoe"]
    ],
    highlight: "Nearly five decades serving the Golden Horseshoe, backed by a large Stoney Creek showroom.",
    sources: ["qsiwindows.com", "Contract Rating Oct 2026", "Company-stated figures"],
    site: "https://qsiwindows.com/"
  },

  bestcan: {
    rank: 7,
    name: "BestCan Windows & Doors",
    logo: "BC",
    color: "#3d5a80",
    score: "4.2",
    tagline: "Long Ottawa history + exterior upgrades",
    location: "Ottawa area",
    founded: "55+ years (company-stated)",
    serves: "Ottawa area",
    google: "4.3 ★★★★☆ · 77 Google reviews · Ottawa Service Directory Aug 2026 · re-check live",
    about: [
      "BestCan is an Ottawa-area family-owned exterior home-improvement company. Its current site states that the business has operated for more than 55 years and has served 55,000+ Ottawa homeowners.",
      "In addition to windows and doors, it offers siding and related exterior work, and advertises full lifetime warranties on window and siding products and labour."
    ],
    services: [
      ["uil-window", "Windows"],
      ["uil-entry", "Entry Doors"],
      ["uil-windsock", "Patio Doors"],
      ["uil-home", "Siding"],
      ["uil-wrench", "Installation"],
      ["uil-usd-circle", "Financing"]
    ],
    reasons: [
      ["uil-calendar-alt", "55+ years stated", "Long Ottawa-area operating history."],
      ["uil-home", "Broader exterior work", "Siding and related exterior renovations beyond windows and doors."],
      ["uil-shield-check", "Lifetime warranties advertised", "Full lifetime coverage on window and siding products and labour, subject to terms."]
    ],
    platformTag: "PUBLIC REVIEW SNAPSHOT · Ottawa Service Directory Aug 2026",
    platform: "Shows a 4.3-star public snapshot from roughly 77 Google reviews in the Ottawa Service Directory listing (Aug 2026). Re-check the live rating and count before publishing.",
    verified: [
      "Company-stated 55+ years in business and 55,000+ Ottawa homeowners served.",
      "Offers windows, doors, siding and related exterior work.",
      "Advertises full lifetime warranties on window and siding products and labour.",
      "BBB A+ accredited (company-stated)."
    ],
    facts: [
      ["uil-calendar-alt", "In business", "55+ years (stated)"],
      ["uil-users-alt", "Homeowners", "55,000+ (stated)"],
      ["uil-shield-check", "BBB", "A+ accredited"],
      ["uil-home", "Also offers", "Siding"]
    ],
    highlight: "Decades of Ottawa-area history with windows, doors and broader exterior renovation services.",
    sources: ["bestcan.com", "Ottawa Service Directory Aug 2026", "Company-stated figures"],
    site: "https://bestcan.com/"
  },

  customdirect: {
    rank: 8,
    name: "Custom Direct Windows Ltd.",
    logo: "CD",
    color: "#52796f",
    score: "4.1",
    tagline: "Ontario manufacturing footprint",
    location: "Stoney Creek, Ontario",
    founded: "Ontario manufacturer",
    serves: "Ontario",
    google: "4.3 ★★★★☆ · 52 Google reviews · Contract Rating Oct 2026 · re-check live",
    about: [
      "Custom Direct Windows Ltd. is a Stoney Creek-based Ontario window manufacturer. Natural Resources Canada lists the company among ENERGY STAR Canada participants for windows, doors and skylights.",
      "Public local business data identifies the company at 352 Dosco Drive in Stoney Creek, while review volume is materially smaller than the leading brands in this comparison."
    ],
    services: [
      ["uil-window", "Windows"],
      ["uil-factory", "Manufacturing"],
      ["uil-sync", "Replacement"],
      ["uil-ruler", "Custom Sizes"],
      ["uil-bolt", "Energy Efficiency"],
      ["uil-truck", "Dealer Supply"]
    ],
    reasons: [
      ["uil-factory", "Stoney Creek manufacturer", "Ontario-based window manufacturing operation."],
      ["uil-bolt", "ENERGY STAR participant", "Listed by Natural Resources Canada among ENERGY STAR Canada participants."],
      ["uil-ruler", "Custom sizes", "Made-to-measure window manufacturing."]
    ],
    platformTag: "PUBLIC REVIEW SNAPSHOT · Contract Rating Oct 2026",
    platform: "Shows a 4.3-star public snapshot from roughly 52 Google reviews in the Contract Rating comparison (Oct 2026). Review volume is smaller than the leaders here — re-check live before publishing.",
    verified: [
      "Stoney Creek-based Ontario window manufacturer at 352 Dosco Drive (public local business data).",
      "Listed among ENERGY STAR Canada participants by Natural Resources Canada.",
      "Smaller public review footprint than the leading brands in this set."
    ],
    facts: [
      ["uil-factory", "Type", "Manufacturer"],
      ["uil-map-marker", "Location", "Stoney Creek"],
      ["uil-bolt", "Energy", "ENERGY STAR participant"]
    ],
    highlight: "Ontario manufacturing presence and ENERGY STAR Canada participation, but a smaller public review footprint.",
    sources: ["customdirectwindows.com", "Natural Resources Canada (ENERGY STAR)", "Contract Rating Oct 2026"],
    site: "https://www.customdirectwindows.com/"
  },

  beverley: {
    rank: 9,
    name: "Beverley Hills Windows and Doors",
    logo: "BH",
    color: "#774936",
    score: "4.0",
    tagline: "20-year parts-and-labour warranty",
    location: "Southern Ontario",
    founded: "Since 1974 (company-stated)",
    serves: "Southern Ontario",
    google: "4.0 ★★★★☆ · 109 Google reviews · Contract Rating 2026 · re-check live",
    about: [
      "Beverley Hills Windows and Doors is a Southern Ontario window and door replacement company that states it has operated since 1974 and served more than 50,000 homeowners.",
      "The company manufactures, sells, installs and services its products and publishes a 20-year warranty that includes parts and labour for product, installation and service categories, subject to its terms."
    ],
    services: [
      ["uil-window", "Windows"],
      ["uil-entry", "Entry Doors"],
      ["uil-snowflake", "RevoCell"],
      ["uil-factory", "Manufacturing"],
      ["uil-wrench", "Installation"],
      ["uil-setting", "Service"]
    ],
    reasons: [
      ["uil-calendar-alt", "Since 1974", "Long Southern Ontario operating history (company-stated)."],
      ["uil-shield-check", "20-year warranty", "Parts-and-labour coverage across product, installation and service categories, subject to terms."],
      ["uil-setting", "Manufactures and services", "Handles manufacturing, sales, installation and after-sales service in-house."]
    ],
    platformTag: "PUBLIC REVIEW SNAPSHOT · Contract Rating 2026",
    platform: "Shows a 4.0-star public snapshot from roughly 109 Google reviews in the Contract Rating 2026 comparison. Re-check the live rating and count before publishing.",
    verified: [
      "Company-stated operation since 1974 and 50,000+ homeowners served.",
      "Manufactures, sells, installs and services its own products.",
      "Publishes a 20-year parts-and-labour warranty across product, installation and service, subject to terms."
    ],
    facts: [
      ["uil-calendar-alt", "Since", "1974 (stated)"],
      ["uil-users-alt", "Homeowners", "50,000+ (stated)"],
      ["uil-shield-check", "Warranty", "20-year parts & labour"]
    ],
    highlight: "Long Southern Ontario history and unusually broad 20-year parts-and-labour warranty language.",
    sources: ["beverleyhillswindows.com", "Contract Rating 2026", "Company-stated figures"],
    site: "https://beverleyhillswindows.com/"
  },

  del: {
    rank: 10,
    name: "DEL Windows & Doors Inc.",
    logo: "DE",
    color: "#5c4b51",
    score: "3.9",
    tagline: "Ontario manufacturer + dealer supply",
    location: "Ontario, Canada",
    founded: "100+ years combined management (stated)",
    serves: "Dealers, architects, lumberyards, wholesalers",
    google: "4.0 ★★★★☆ · 64 Google reviews · Contract Rating 2026 · re-check live",
    about: [
      "DEL Windows & Doors is a Canadian-owned Ontario manufacturer serving dealers, architects, lumberyards and wholesalers. Its company profile states more than 100 years of combined management experience and a 70,000-square-foot manufacturing facility.",
      "DEL produces PVC window systems, entry doors and patio doors and publishes a transferable limited warranty subject to registration and coverage terms."
    ],
    services: [
      ["uil-window", "PVC Windows"],
      ["uil-entry", "Entry Doors"],
      ["uil-windsock", "Patio Doors"],
      ["uil-factory", "Manufacturing"],
      ["uil-truck", "Dealer Supply"],
      ["uil-shield-check", "Warranty"]
    ],
    reasons: [
      ["uil-factory", "70,000 sq ft facility", "Company-stated large Ontario manufacturing plant."],
      ["uil-truck", "Dealer / trade supply", "Serves dealers, architects, lumberyards and wholesalers."],
      ["uil-shield-check", "Transferable warranty", "Transferable limited warranty subject to registration and coverage terms."]
    ],
    platformTag: "PUBLIC REVIEW SNAPSHOT · Contract Rating 2026",
    platform: "Shows a 4.0-star public snapshot from roughly 64 Google reviews in the Contract Rating 2026 comparison. Consumer-facing review volume is smaller than the leaders — re-check live before publishing.",
    verified: [
      "Canadian-owned Ontario manufacturer serving dealers, architects, lumberyards and wholesalers.",
      "Company-stated 100+ years combined management experience and a 70,000-sq-ft facility.",
      "Produces PVC window systems, entry doors and patio doors with a transferable limited warranty."
    ],
    facts: [
      ["uil-map-marker", "Ownership", "Canadian owned"],
      ["uil-factory", "Facility", "70,000 sq ft (stated)"],
      ["uil-shield-check", "Warranty", "Transferable limited"]
    ],
    highlight: "Strong manufacturing credentials, but a smaller consumer-facing review footprint than the leaders in this set.",
    sources: ["delwindows.com", "Contract Rating 2026", "Company-stated figures"],
    site: "https://delwindows.com/"
  }

};
