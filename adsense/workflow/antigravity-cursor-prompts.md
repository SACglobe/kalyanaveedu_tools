# Antigravity Prompts — kalyanaveedu.in
# Stack: Next.js App Router · TypeScript · Vercel
# Purpose: Create missing pages for Google AdSense approval
# Date: February 2026
#
# HOW TO USE
# ──────────────────────────────────────────────────────
# 1. Open kalyanaveedu.in project in Cursor
# 2. Open Composer (Cmd+I on Mac / Ctrl+I on Windows)
# 3. Copy ONE prompt block at a time — paste — run
# 4. Review Antigravity's output before running the next prompt
# 5. Never run two prompts simultaneously
# 6. After all 5 prompts: git push → Vercel auto-deploys
#
# ORDER: Prompt 1 → 2 → 3 → 4 → 5 → verify → push
# ──────────────────────────────────────────────────────

═══════════════════════════════════════════════════════
PROMPT 1 — Read the project structure (run this first)
═══════════════════════════════════════════════════════

Paste into Cursor Composer:

──────────────────────────────────────────────────────
I am working on a Next.js App Router TypeScript project
hosted on Vercel. Before making any changes, I need you
to read and understand the project structure.

Please do the following and show me the results:

1. List the contents of the /app directory — show all 
   folders and files inside it

2. Find and read the layout.tsx file in /app — show me 
   its full content

3. Find the navigation component — it might be in:
   /components/Nav.tsx
   /components/Header.tsx  
   /components/Navbar.tsx
   /app/components/
   or inside layout.tsx itself
   Show me wherever the nav links are defined

4. Find the footer component — same approach
   Show me wherever the footer links are defined

5. Look at one existing page.tsx file (any article or 
   page that is working) and show me its structure —
   I need to see how a typical page is written in this
   project

Do not make any changes yet. Just read and report.
──────────────────────────────────────────────────────

WAIT: Review what Antigravity found before continuing.
Note the nav file path and footer file path — you will
need to confirm them in Prompt 5.


═══════════════════════════════════════════════════════
PROMPT 2 — Create the About Us page
═══════════════════════════════════════════════════════

Paste into Cursor Composer:

──────────────────────────────────────────────────────
Create the About Us page for this Next.js App Router 
TypeScript project.

FILE TO CREATE:
/app/about-us/page.tsx

RULES:
- Use the same TypeScript patterns as the existing 
  page.tsx files in this project
- Do NOT create a new layout — the existing 
  /app/layout.tsx already wraps all pages
- Use 'use client' directive only if the existing 
  pages use it — match the existing pattern
- The page must render server-side (good for SEO)

METADATA (add using Next.js generateMetadata or 
static metadata export — match what existing pages do):
- title: "நாங்கள் யார் | கல்யாண வீடு"
- description: "கல்யாண வீடு - தமிழ் திருமண மரபுகள் மற்றும் சடங்குகள் பற்றிய தகவல் இணையதளம்"

PAGE CONTENT (render this Tamil text in the page body.
Use semantic HTML: h1 for the main heading, h2 for 
subheadings, p for paragraphs. Apply whatever CSS 
classes or Tailwind classes the existing pages use 
for content styling):

H1: நாங்கள் யார்

PARAGRAPH:
கல்யாண வீடு என்பது தமிழ் திருமண மரபுகளையும் 
சடங்குகளையும் ஆவணப்படுத்துவதற்காக உருவாக்கப்பட்ட 
ஒரு தமிழ் இதழியல் இணையதளம்.

நம் முன்னோர்களிடமிருந்து வந்த திருமண சடங்குகள் — 
நாந்தி முதல் நாளும், முகூர்த்தம் முதல் மணவிழா வரை — 
ஒவ்வொன்றிலும் ஆழமான கலாச்சார அர்த்தம் உள்ளது. 
ஆனால் இந்த அர்த்தங்களை தமிழிலேயே விளக்கும் 
நம்பகமான ஆதாரங்கள் மிகவும் குறைவாக உள்ளன. 
கல்யாண வீடு இந்த இடைவெளியை நிரப்புவதற்காகவே 
தொடங்கப்பட்டது.

H2: நாங்கள் என்ன செய்கிறோம்

PARAGRAPH:
தமிழ்நாட்டு திருமண சடங்குகளை — அவற்றின் வரலாறு, 
அர்த்தம், மற்றும் பிராந்திய வேறுபாடுகளுடன் — தமிழில் 
ஆவணப்படுத்துகிறோம். ஒவ்வொரு சடங்கும் ஏன் 
நடைபெறுகிறது என்பதை நாங்கள் விளக்குகிறோம் — 
வெறும் எப்படி என்பதை மட்டும் அல்ல.

நாந்தி ஏன் நடத்தப்படுகிறது? கன்யாதானத்தின் கலாச்சார 
முக்கியத்துவம் என்ன? சப்தபதியில் எடுக்கப்படும் ஏழு 
அடிகளின் அர்த்தம் என்ன? இது போன்ற கேள்விகளுக்கு 
ஆழமான, நம்பகமான விடைகளை வழங்குவது எங்கள் நோக்கம்.

தமிழ்நாட்டின் பல்வேறு சமூகங்கள் — இயர், ஐயங்கார், 
முதலியார், நாடார், செட்டியார், தேவர் — ஒவ்வொரு 
சமூகத்திலும் திருமண மரபுகள் எவ்வாறு வேறுபடுகின்றன 
என்பதையும் நாங்கள் விவரிக்கிறோம்.

H2: நாங்கள் எப்படி ஆராய்கிறோம்

PARAGRAPH:
எங்கள் உள்ளடக்கம் அரசு கலாசார அமைப்புகள், 
கல்வியாளர் ஆய்வுகள், மற்றும் சான்றாதார கலாச்சார 
ஆவணங்களின் அடிப்படையில் தயாரிக்கப்படுகிறது. 
வலைப்பதிவுகள் அல்லது சமூக ஊடகங்களில் உள்ள 
தகவல்களை நாங்கள் ஆதாரமாக பயன்படுத்துவதில்லை. 
ஒவ்வொரு கட்டுரையும் குறிப்பிட்ட பிராந்தியம் மற்றும் 
சமூகத்தின் மரபுகளை மட்டுமே விவரிக்கிறது — பொதுவான 
"தென்னிந்திய திருமணம்" என்று ஒட்டுமொத்தமாக 
எழுதுவதில்லை.

H2: தமிழில் ஏன்

PARAGRAPH:
திருமண மரபுகள் தமிழ் குடும்பங்களுக்கு சொந்தமானவை. 
அவை தமிழிலேயே ஆவணப்படுத்தப்பட வேண்டும். 
கல்யாண வீட்டில் உள்ள அனைத்து உள்ளடக்கமும் 
தமிழிலேயே எழுதப்படுகிறது — ஏனென்றால் இந்த 
மரபுகளைப் பற்றி தெரிந்துகொள்ள விரும்புபவர்கள் 
தமிழ் குடும்பங்களில் உள்ளவர்களே.

H2: தொடர்பு கொள்ளுங்கள்

PARAGRAPH:
உங்கள் கருத்துகளை மற்றும் கலாச்சார திருத்தங்களை 
எங்களுடன் பகிர்ந்து கொள்ள அழைக்கிறோம். 

Add a Next.js Link component here pointing to /contact
with link text: தொடர்பு பக்கம்

AFTER CREATING THE FILE:
- Show me the complete file content
- Confirm the file was created at /app/about-us/page.tsx
- Tell me what the page URL will be when deployed
──────────────────────────────────────────────────────


═══════════════════════════════════════════════════════
PROMPT 3 — Create the Contact page
═══════════════════════════════════════════════════════

⚠️  BEFORE RUNNING THIS PROMPT:
Decide your contact email address.
It can be a Gmail address created specifically for 
this site — it does not need to be professional.
You will type it when Antigravity asks.

Paste into Cursor Composer:

──────────────────────────────────────────────────────
Create the Contact page for this Next.js App Router 
TypeScript project.

FILE TO CREATE:
/app/contact/page.tsx

Follow the same TypeScript patterns as the existing 
pages. Use same metadata export pattern as other pages.

METADATA:
- title: "தொடர்பு கொள்ளுங்கள் | கல்யாண வீடு"
- description: "கல்யாண வீட்டை தொடர்பு கொள்ளுங்கள்"

CRITICAL REQUIREMENT — EMAIL ADDRESS:
Before writing the file, ask me: 
"What email address should appear on the contact page?"
Wait for my answer. Then use that email address in the 
page as visible plain text — not hidden, not in a form 
only. The email must be readable on the page without 
any user interaction.

PAGE CONTENT:

H1: தொடர்பு கொள்ளுங்கள்

PARAGRAPH:
கல்யாண வீட்டை படிக்கும் வாசகர்களின் கருத்துகள் 
எங்களுக்கு மிகவும் முக்கியம்.

நீங்கள் படித்த சடங்கு விளக்கங்களில் ஏதேனும் 
திருத்தங்கள் இருந்தால், உங்கள் குடும்பத்தில் அல்லது 
உங்கள் சமூகத்தில் வேறுவிதமாக நடைபெறும் மரபுகளை 
நாங்கள் தெரிந்துகொள்ள விரும்புகிறோம்.

H2: எங்களை எப்படி தொடர்பு கொள்வது

Render the email address the user provides as:
- A visible <p> or <div> element with label 
  "மின்னஞ்சல்:" followed by the email address
- Also render it as a mailto: anchor link so 
  users can click it
- Style it to match existing content on the site

PARAGRAPH (after email):
நாங்கள் பொதுவாக 3 முதல் 5 வேலை நாட்களுக்குள் 
பதில் அனுப்புவோம்.

H2: எதற்காக எழுதலாம்

Render as an unordered list:
- கட்டுரைகளில் உள்ள கலாச்சார திருத்தங்கள்
- உங்கள் சமூகத்தின் திருமண மரபுகள் பற்றிய தகவல்கள்
- குறிப்பிட்ட சடங்கை பற்றி கட்டுரை எழுத வேண்டும் 
  என்ற கோரிக்கைகள்
- பொதுவான கேள்விகள் மற்றும் கருத்துகள்

PARAGRAPH (disclaimer at bottom):
குறிப்பு: கல்யாண வீடு ஒரு தகவல் இணையதளம் மட்டுமே. 
திருமண ஏற்பாடுகள், விற்பனையாளர் பரிந்துரைகள், 
அல்லது தனிப்பட்ட ஆலோசனைகள் ஆகியவற்றை 
நாங்கள் வழங்குவதில்லை.

AFTER CREATING:
- Show the complete file
- Confirm the email address is visible as plain text
  in the rendered output (not only inside a form)
- Confirm URL will be /contact when deployed
──────────────────────────────────────────────────────


═══════════════════════════════════════════════════════
PROMPT 4 — Create Cookie Policy + update Privacy Policy
═══════════════════════════════════════════════════════

Paste into Cursor Composer:

──────────────────────────────────────────────────────
I need two things done in this step.

── TASK A: Create Cookie Policy page ──

FILE TO CREATE: /app/cookie-policy/page.tsx
Same TypeScript patterns as existing pages.

METADATA:
- title: "குக்கீ கொள்கை | கல்யாண வீடு"
- description: "kalyanaveedu.in குக்கீ கொள்கை"

PAGE CONTENT:

H1: குக்கீ கொள்கை

PARAGRAPH: நடைமுறைக்கு வந்த தேதி: பிப்ரவரி 2026

H2: குக்கீகள் என்றால் என்ன

PARAGRAPH:
குக்கீகள் (Cookies) என்பது நீங்கள் ஒரு இணையதளத்தை 
பார்வையிடும்போது உங்கள் கணினி அல்லது மொபைலில் 
சேமிக்கப்படும் சிறிய தகவல் கோப்புகள். இந்த கோப்புகள் 
இணையதளம் உங்கள் விருப்பங்களை நினைவில் 
வைத்துக்கொள்ள மற்றும் பயன்பாட்டு அனுபவத்தை 
மேம்படுத்த உதவுகின்றன.

H2: kalyanaveedu.in பயன்படுத்தும் குக்கீகள்

H3: 1. அமர்வு குக்கீகள் (Session Cookies)
PARAGRAPH:
நீங்கள் இணையதளத்தை பார்வையிடும் அமர்வின்போது 
மட்டும் செயல்படும் தற்காலிக குக்கீகள். உலாவியை 
மூடும்போது இவை தானாக நீக்கப்படும்.

H3: 2. Google Analytics குக்கீகள்
PARAGRAPH:
kalyanaveedu.in, Google Analytics சேவையைப் 
பயன்படுத்துகிறது. இந்த சேவை எத்தனை பேர் 
இணையதளத்தை பார்வையிடுகிறார்கள் என்ற பொதுவான 
தகவல்களை சேகரிக்கிறது. தனிப்பட்ட அடையாளங்களை 
வெளிப்படுத்துவதில்லை.
Render as external link: மேலும் அறிய → 
https://policies.google.com/privacy

H3: 3. Google AdSense குக்கீகள்
PARAGRAPH:
kalyanaveedu.in, Google AdSense விளம்பர சேவையைப் 
பயன்படுத்துகிறது. Google AdSense, வாசகர்களின் 
ஆர்வங்களுக்கு தகுந்த விளம்பரங்களை காட்டுவதற்காக 
குக்கீகளைப் பயன்படுத்துகிறது.
Render two external links:
- மேலும் அறிய → https://policies.google.com/technologies/ads
- விளம்பர குக்கீகளை நிறுத்த → https://adssettings.google.com

H2: குக்கீகளை எப்படி கட்டுப்படுத்துவது

PARAGRAPH:
உங்கள் உலாவி அமைப்புகள் மூலம் குக்கீகளை 
நிராகரிக்கலாம்:

Render as list:
- Chrome: Settings → Privacy and Security → Cookies
- Firefox: Settings → Privacy & Security → Cookies and Site Data
- Safari: Preferences → Privacy → Cookies

PARAGRAPH:
குறிப்பு: குக்கீகளை முழுவதும் நிறுத்தினால், சில 
இணையதள செயல்பாடுகள் சரியாக வேலை செய்யாமல் 
போகலாம்.

H2: இந்தக் கொள்கை மாறலாம்

PARAGRAPH:
இந்த குக்கீ கொள்கை அவ்வப்போது புதுப்பிக்கப்படலாம். 
மாற்றங்கள் இருந்தால் இந்த பக்கத்தில் 
புதுப்பிக்கப்பட்ட தேதியுடன் வெளியிடப்படும்.

Add Next.js Link to /contact with text: தொடர்பு பக்கம்

── TASK B: Update existing Privacy Policy page ──

After creating the cookie policy page:

1. Find the existing Privacy Policy page file in 
   this project (likely at /app/privacy-policy/page.tsx
   or similar — check and find the correct path)

2. Show me its current content

3. Add this Tamil paragraph to it — place it in the 
   section about third-party services. If no such 
   section exists, add it before the closing/date 
   section:

--- Tamil text to add ---
இந்த இணையதளம் Google AdSense விளம்பர சேவையைப் 
பயன்படுத்துகிறது. Google AdSense, விளம்பரங்களை 
வழங்குவதற்காக குக்கீகளைப் பயன்படுத்துகிறது. 
Google AdSense-இன் தனியுரிமைக் கொள்கையை இங்கே 
படிக்கலாம்: https://policies.google.com/privacy

விளம்பர விருப்பங்களை மாற்ற: 
https://adssettings.google.com

குக்கீகள் பற்றிய கூடுதல் தகவல்களுக்கு எங்கள் 
குக்கீ கொள்கையை படிக்கவும்.
--- end Tamil text ---

Also add a Next.js Link to /cookie-policy after 
that paragraph with text: குக்கீ கொள்கை

4. Show me only the section you changed — before 
   and after. Do not rewrite the whole file.
──────────────────────────────────────────────────────


═══════════════════════════════════════════════════════
PROMPT 5 — Update navigation and footer
═══════════════════════════════════════════════════════

Paste into Cursor Composer:

──────────────────────────────────────────────────────
I have created three new pages in this Next.js project:
- /about-us  (நாங்கள் யார்)
- /contact   (தொடர்பு கொள்ளுங்கள்)
- /cookie-policy (குக்கீ கொள்கை)

I need to add links to these pages in the navigation
and footer. 

STEP 1 — Find the files
Locate:
a) The navigation/header component file
b) The footer component file
Show me the current content of both files before 
making any changes.

STEP 2 — Update Navigation (header)
Add two new Next.js Link components to the nav:
- href="/about-us" text="நாங்கள் யார்"
- href="/contact" text="தொடர்பு"

Place them at the end of the existing nav link list.
Match the exact same className and element structure 
as the existing nav links — do not change the styling.

STEP 3 — Update Footer
Add to the footer link list:
- href="/about-us" text="நாங்கள் யார்"
- href="/contact" text="தொடர்பு"
- href="/cookie-policy" text="குக்கீ கொள்கை"

Also verify these are already in the footer and add
them if missing:
- Privacy Policy link
- Terms of Use link
- Disclaimer link

Match existing footer link className and structure.

STEP 4 — Show me the diff
Show me the before and after for both the nav file 
and footer file. Show only the changed sections.

Do not change any styling, layout, or logic. 
Only add the new Link elements.
──────────────────────────────────────────────────────


═══════════════════════════════════════════════════════
AFTER ALL 5 PROMPTS — Final steps
═══════════════════════════════════════════════════════

── Step A: Run local verification ──

In your terminal, run:
  npm run dev
  or
  yarn dev

Then open in browser and check each URL:
  http://localhost:3000/about-us
  http://localhost:3000/contact
  http://localhost:3000/cookie-policy

Verify:
  [ ] Tamil text renders correctly — no □ characters
  [ ] Contact page shows email as visible plain text
  [ ] Cookie Policy shows Google AdSense section
  [ ] Nav shows நாங்கள் யார் and தொடர்பு links
  [ ] Footer shows all 6 policy/info links
  [ ] No TypeScript errors in terminal

── Step B: Push to Vercel ──

  git add .
  git commit -m "feat: add About Us, Contact, Cookie Policy for AdSense approval"
  git push

Vercel deploys automatically. Takes ~60 seconds.

── Step C: Verify on live site ──

  [ ] kalyanaveedu.in/about-us → loads, Tamil text correct
  [ ] kalyanaveedu.in/contact → loads, email visible
  [ ] kalyanaveedu.in/cookie-policy → loads, AdSense section present
  [ ] kalyanaveedu.in/privacy-policy → AdSense paragraph present
  [ ] Header nav shows new links
  [ ] Footer shows all links, none broken

── Step D: Add Google Search Console verification ──

Run this additional Cursor prompt after the above 
pages are live:

──────────────────────────────────────────────────────
I need to add a Google Search Console verification 
meta tag to my Next.js App Router site.

The verification meta tag from Google looks like:
<meta name="google-site-verification" content="XXXXX" />

In Next.js App Router, this goes in the metadata 
export in /app/layout.tsx using the verification 
property.

Here is how to add it:

1. Open /app/layout.tsx
2. Find the existing metadata export
3. Add the verification property to it:

export const metadata: Metadata = {
  // ... existing metadata ...
  verification: {
    google: 'PASTE_YOUR_CODE_HERE',
  },
}

I will give you the verification code from 
Google Search Console. Please show me the exact 
change to make in layout.tsx — do not change 
anything else.
──────────────────────────────────────────────────────

To get your Google verification code:
1. Go to search.google.com/search-console
2. Add property → kalyanaveedu.in
3. Choose "HTML tag" verification method
4. Copy ONLY the content="..." value (not the full tag)
5. Paste that value into the Cursor prompt above
6. Push → Vercel deploys → verify in Search Console

── Step E: Submit sitemap in Search Console ──

After verification:
1. Search Console → Sitemaps (left sidebar)
2. Enter: sitemap.xml
3. Click Submit
4. Check Coverage tab for crawl errors

── TIMING — DO NOT SUBMIT TO ADSENSE BEFORE: ──

  All pages live on Vercel          ✓ done today
  Search Console verified           ✓ do today
  
  Wait 4 weeks from today
  Publish 5+ more articles in that time
  Reach 15 total articles minimum
  
  Then run submission-readiness.md audit
  Then submit to AdSense — once — and wait patiently
