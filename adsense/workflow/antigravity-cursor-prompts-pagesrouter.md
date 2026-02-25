# Antigravity Prompts — kalyanaveedu.com
# Stack: Next.js Pages Router · TypeScript · Vercel · Shared Layout
# Purpose: Create missing pages for Google AdSense approval
# Date: February 2026
#
# HOW TO USE
# ─────────────────────────────────────────────────────
# 1. Open kalyanaveedu.com project in Cursor
# 2. Open Composer (Cmd+I Mac / Ctrl+I Windows)
# 3. Copy ONE prompt at a time → paste → run
# 4. Read what Antigravity produces before next prompt
# 5. Never run two prompts at once
# 6. After all 5 prompts: git push → Vercel deploys
#
# ORDER: 1 → 2 → 3 → 4 → 5 → verify → push
# ─────────────────────────────────────────────────────


═══════════════════════════════════════════════════════
PROMPT 1 — Read the project first (always start here)
═══════════════════════════════════════════════════════

Paste into Cursor Composer:

─────────────────────────────────────────────────────
This is a Next.js Pages Router TypeScript project.
Before making any changes, read and understand the
structure. Do not create or edit any files yet.

Please do all of the following and show me the results:

1. List everything inside the /pages directory —
   all files and subfolders

2. Find the Layout component. It could be at:
   /components/Layout.tsx
   /components/layout.tsx
   /components/Layout/index.tsx
   /layouts/Layout.tsx
   or somewhere else — search for it and show me
   the full file content when found

3. Inside the Layout component, find:
   a) Where the navigation links are defined —
      show me that section exactly
   b) Where the footer links are defined —
      show me that section exactly

4. Find one existing page in /pages/ that is a
   static content page (not the index/home page,
   not an API route) — show me its full content
   so I can see the TypeScript pattern used,
   how next/head is used for metadata, and
   whether it uses getStaticProps or is a
   simple functional component

5. Check whether pages use next/head directly
   or whether the Layout component handles the
   <head> — show me which pattern this project uses

Do not make any changes. Just read and report.
─────────────────────────────────────────────────────

STOP. Read what Antigravity found.
Confirm: the /pages folder, the Layout file path,
and how existing pages handle metadata (next/head).
Then continue to Prompt 2.


═══════════════════════════════════════════════════════
PROMPT 2 — Create the About Us page
═══════════════════════════════════════════════════════

Paste into Cursor Composer:

─────────────────────────────────────────────────────
Create the About Us page for this Next.js Pages Router
TypeScript project.

FILE TO CREATE: /pages/about-us.tsx

RULES:
- Follow the exact same TypeScript component pattern
  as the existing static content pages in /pages/
- Import and use the Layout component the same way
  existing pages do — wrap the page content in it
- Use next/head for metadata the same way existing
  pages do — match the pattern exactly
- Do NOT create a new layout or wrapper
- The component must be a default export

METADATA (inside next/head):
<title>நாங்கள் யார் | கல்யாண வீடு</title>
<meta name="description" content="கல்யாண வீடு - தமிழ் திருமண மரபுகள் மற்றும் சடங்குகள் பற்றிய தகவல் இணையதளம்" />
<meta charSet="utf-8" />

PAGE CONTENT (render inside the Layout wrapper using
semantic HTML. Use the same className conventions and
Tailwind classes that existing content pages use for
headings and paragraphs):

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
சமூகத்தின் மரபுகளை மட்டுமே விவரிக்கிறது.

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

Add a next/link Link here: href="/contact"
link text: தொடர்பு பக்கம்

AFTER CREATING:
- Show me the complete /pages/about-us.tsx file
- Confirm it compiles with no TypeScript errors
  (run: npx tsc --noEmit and show output)
- Confirm the route will be /about-us on Vercel
─────────────────────────────────────────────────────


═══════════════════════════════════════════════════════
PROMPT 3 — Create the Contact page
═══════════════════════════════════════════════════════

⚠️  DECIDE YOUR EMAIL ADDRESS BEFORE RUNNING THIS.
    Use a real address you actually check.
    A dedicated Gmail works fine — e.g. kalyanaveedu@gmail.com
    You will type it when Antigravity asks.

Paste into Cursor Composer:

─────────────────────────────────────────────────────
Create the Contact page for this Next.js Pages Router
TypeScript project.

FILE TO CREATE: /pages/contact.tsx

Follow the same TypeScript + Layout + next/head pattern
as the existing pages and as /pages/about-us.tsx
that was just created.

METADATA:
<title>தொடர்பு கொள்ளுங்கள் | கல்யாண வீடு</title>
<meta name="description" content="கல்யாண வீட்டை தொடர்பு கொள்ளுங்கள்" />

CRITICAL — EMAIL ADDRESS:
Before writing any code, ask me:
"What email address should appear on the contact page?"
Wait for my answer. Do not proceed until I reply.
Use the email I provide in two ways:
1. As visible plain text on the page (a <p> or <span>
   with label "மின்னஞ்சல்:" next to it)
2. As an <a href="mailto:EMAIL"> link on the same line
Both must be visible without any user interaction.
A contact form may also be added but is optional.

PAGE CONTENT:

H1: தொடர்பு கொள்ளுங்கள்

PARAGRAPH:
கல்யாண வீட்டை படிக்கும் வாசகர்களின் கருத்துகள்
எங்களுக்கு மிகவும் முக்கியம்.

நீங்கள் படித்த சடங்கு விளக்கங்களில் ஏதேனும்
திருத்தங்கள் இருந்தால், உங்கள் சமூகத்தில்
வேறுவிதமாக நடைபெறும் மரபுகளை நாங்கள்
தெரிந்துகொள்ள விரும்புகிறோம்.

H2: எங்களை எப்படி தொடர்பு கொள்வது

[Render email label + address + mailto link here]

PARAGRAPH:
நாங்கள் பொதுவாக 3 முதல் 5 வேலை நாட்களுக்குள்
பதில் அனுப்புவோம்.

H2: எதற்காக எழுதலாம்

Render as <ul> list:
- கட்டுரைகளில் உள்ள கலாச்சார திருத்தங்கள்
- உங்கள் சமூகத்தின் திருமண மரபுகள் பற்றிய தகவல்கள்
- குறிப்பிட்ட சடங்கை பற்றி கட்டுரை எழுத வேண்டும்
  என்ற கோரிக்கைகள்
- பொதுவான கேள்விகள் மற்றும் கருத்துகள்

PARAGRAPH (disclaimer):
குறிப்பு: கல்யாண வீடு ஒரு தகவல் இணையதளம்
மட்டுமே. திருமண ஏற்பாடுகள், விற்பனையாளர்
பரிந்துரைகள், அல்லது தனிப்பட்ட ஆலோசனைகள்
ஆகியவற்றை நாங்கள் வழங்குவதில்லை.

AFTER CREATING:
- Show the complete /pages/contact.tsx
- Confirm the email address appears as visible
  plain text in the JSX — not only inside a
  conditional render or form state
- Run: npx tsc --noEmit — show output
─────────────────────────────────────────────────────


═══════════════════════════════════════════════════════
PROMPT 4 — Cookie Policy + Privacy Policy update
═══════════════════════════════════════════════════════

Paste into Cursor Composer:

─────────────────────────────────────────────────────
Two tasks in this step. Do Task A first, then Task B.

━━ TASK A: Create Cookie Policy page ━━

FILE TO CREATE: /pages/cookie-policy.tsx

Same TypeScript + Layout + next/head pattern as the
other pages in /pages/.

METADATA:
<title>குக்கீ கொள்கை | கல்யாண வீடு</title>
<meta name="description" content="kalyanaveedu.com குக்கீ கொள்கை" />

PAGE CONTENT:

H1: குக்கீ கொள்கை
P: நடைமுறைக்கு வந்த தேதி: பிப்ரவரி 2026

H2: குக்கீகள் என்றால் என்ன
P: குக்கீகள் (Cookies) என்பது நீங்கள் ஒரு
இணையதளத்தை பார்வையிடும்போது உங்கள் கணினி
அல்லது மொபைலில் சேமிக்கப்படும் சிறிய தகவல்
கோப்புகள்.

H2: kalyanaveedu.com பயன்படுத்தும் குக்கீகள்

H3: 1. அமர்வு குக்கீகள் (Session Cookies)
P: நீங்கள் இணையதளத்தை பார்வையிடும் அமர்வின்போது
மட்டும் செயல்படும் தற்காலிக குக்கீகள். உலாவியை
மூடும்போது இவை தானாக நீக்கப்படும்.

H3: 2. Google Analytics குக்கீகள்
P: kalyanaveedu.com, Google Analytics சேவையைப்
பயன்படுத்துகிறது. எத்தனை பேர் இணையதளத்தை
பார்வையிடுகிறார்கள் என்ற பொதுவான தகவல்களை
சேகரிக்கிறது. தனிப்பட்ட அடையாளங்களை
வெளிப்படுத்துவதில்லை.
External link: மேலும் அறிய →
href="https://policies.google.com/privacy"

H3: 3. Google AdSense குக்கீகள்
P: kalyanaveedu.com, Google AdSense விளம்பர
சேவையைப் பயன்படுத்துகிறது. Google AdSense,
வாசகர்களின் ஆர்வங்களுக்கு தகுந்த விளம்பரங்களை
காட்டுவதற்காக குக்கீகளைப் பயன்படுத்துகிறது.
Two external links:
- மேலும் அறிய → https://policies.google.com/technologies/ads
- விளம்பர குக்கீகளை நிறுத்த → https://adssettings.google.com

H2: குக்கீகளை எப்படி கட்டுப்படுத்துவது
P: உங்கள் உலாவி அமைப்புகள் மூலம் குக்கீகளை
நிராகரிக்கலாம் அல்லது நீக்கலாம்:
UL list:
- Chrome: Settings → Privacy and Security → Cookies
- Firefox: Settings → Privacy & Security → Cookies and Site Data
- Safari: Preferences → Privacy → Cookies
P: குறிப்பு: குக்கீகளை முழுவதும் நிறுத்தினால்,
சில இணையதள செயல்பாடுகள் சரியாக வேலை
செய்யாமல் போகலாம்.

H2: இந்தக் கொள்கை மாறலாம்
P: இந்த குக்கீ கொள்கை அவ்வப்போது
புதுப்பிக்கப்படலாம்.
next/link → href="/contact" text: தொடர்பு பக்கம்

━━ TASK B: Update Privacy Policy ━━

After Task A is complete:

1. Find the Privacy Policy page. Check these paths:
   /pages/privacy-policy.tsx
   /pages/privacy.tsx
   /pages/thaṉiyurimai.tsx
   or any other Tamil-named file — find it and
   show me its current full content

2. Find the section in it that discusses third-party
   services, advertising, or cookies. If no such
   section exists, find the section just before the
   closing date/contact information.

3. Insert this Tamil block in that location:

   இந்த இணையதளம் Google AdSense விளம்பர சேவையைப்
   பயன்படுத்துகிறது. Google AdSense, விளம்பரங்களை
   வழங்குவதற்காக குக்கீகளைப் பயன்படுத்துகிறது.
   Google AdSense-இன் தனியுரிமைக் கொள்கையை இங்கே
   படிக்கலாம்: https://policies.google.com/privacy

   விளம்பர விருப்பங்களை மாற்ற:
   https://adssettings.google.com

   குக்கீகள் பற்றிய கூடுதல் தகவல்களுக்கு எங்கள்
   [next/link href="/cookie-policy" text="குக்கீ கொள்கை"]
   படிக்கவும்.

4. Show me ONLY the changed section —
   before and after. Do not rewrite the whole file.
   Do not change anything else.

After both tasks:
Run: npx tsc --noEmit
Show the output — fix any errors before moving on.
─────────────────────────────────────────────────────


═══════════════════════════════════════════════════════
PROMPT 5 — Update Layout navigation and footer
═══════════════════════════════════════════════════════

Paste into Cursor Composer:

─────────────────────────────────────────────────────
I need to add links to three new pages in the shared
Layout component used by this Next.js Pages Router site.

The new pages and their routes are:
  நாங்கள் யார்       →  /about-us
  தொடர்பு            →  /contact
  குக்கீ கொள்கை      →  /cookie-policy

STEP 1 — Show me the Layout file
Open the Layout component file (found in Prompt 1).
Show me its full current content before any changes.

STEP 2 — Update the navigation
In the navigation section of the Layout, add:

  <Link href="/about-us">நாங்கள் யார்</Link>
  <Link href="/contact">தொடர்பு</Link>

Rules:
- Use next/link (import Link from 'next/link')
- Match the exact same element type, className,
  and structure as every other nav link
- Place them at the end of the existing nav links
- Do not add any new wrapper elements
- Do not change any existing links

STEP 3 — Update the footer
In the footer section of the Layout, add:

  <Link href="/about-us">நாங்கள் யார்</Link>
  <Link href="/contact">தொடர்பு</Link>
  <Link href="/cookie-policy">குக்கீ கொள்கை</Link>

Rules:
- Match className and element structure of existing
  footer links exactly
- Also check — are these already in the footer?
  If missing, add them too:
    Privacy Policy link
    Terms of Use link
    Disclaimer link
- Do not change any existing footer links

STEP 4 — Show me the diff
Show me the Layout file with ONLY the changed lines
highlighted — before and after for both nav and footer.
Do not show unchanged sections.

STEP 5 — TypeScript check
Run: npx tsc --noEmit
Show the full output. Fix any errors before finishing.
─────────────────────────────────────────────────────


═══════════════════════════════════════════════════════
AFTER ALL 5 PROMPTS — verify then deploy
═══════════════════════════════════════════════════════

── Local check (run npm run dev first) ──

Open browser at localhost:3000 and verify:

  [ ] /about-us loads — Tamil text renders, no □ chars
  [ ] /contact loads — email visible as plain text
  [ ] /cookie-policy loads — Google AdSense section present
  [ ] /privacy-policy — AdSense paragraph now present
  [ ] Nav bar shows: நாங்கள் யார் and தொடர்பு
  [ ] Footer shows all 6 links — no broken links
  [ ] No red TypeScript errors in terminal

── Deploy to Vercel ──

  git add .
  git commit -m "feat: add About Us, Contact, Cookie Policy for AdSense"
  git push

Vercel deploys in ~60 seconds.

── Verify on live site ──

  [ ] kalyanaveedu.com/about-us → 200, Tamil renders
  [ ] kalyanaveedu.com/contact → 200, email visible
  [ ] kalyanaveedu.com/cookie-policy → 200, AdSense present
  [ ] kalyanaveedu.com/privacy-policy → AdSense paragraph present
  [ ] Navigation links work on mobile and desktop
  [ ] Footer links all return 200

── Google Search Console (do this same day) ──

Run this prompt in Cursor after deploy:

─────────────────────────────────────────────────────
I need to add a Google Search Console HTML verification
meta tag to my Next.js Pages Router site.

In Pages Router, this goes inside the <Head> component
in /pages/_document.tsx or inside the Layout component's
next/head block — whichever this project uses.

First: check if /pages/_document.tsx exists.
If yes, show me its content.
If no, show me how the Layout component uses next/head.

Then tell me exactly where to add:
<meta name="google-site-verification" content="XXXXX" />

I will paste my Google verification code.
Do not make any changes yet — just show me the
correct location and I will give you the code.
─────────────────────────────────────────────────────

To get your code:
  1. search.google.com/search-console
  2. Add property → kalyanaveedu.com
  3. Verification method → HTML tag
  4. Copy the content="..." value only
  5. Give it to Antigravity → push → verify

Then in Search Console:
  Sitemaps → enter sitemap.xml → Submit
  Coverage tab → check for crawl errors → fix any 404s

── DO NOT submit to AdSense until ──

  [ ] All 3 pages live on Vercel
  [ ] Search Console verified + sitemap submitted
  [ ] 4 weeks have passed since today
  [ ] 15+ articles published total
  [ ] submission-readiness.md audit returns SUBMIT
