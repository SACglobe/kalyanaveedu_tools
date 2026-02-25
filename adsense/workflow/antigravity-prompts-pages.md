# Antigravity Vibe Coding Prompts — kalyanaveedu.in
# AdSense Approval Fix — Missing Pages
# Run each prompt in Cursor, in order, one at a time
# Platform: Cursor + Netlify + Template-based site
# Date: February 2026
---

## HOW TO USE THESE PROMPTS

1. Open your kalyanaveedu.in project in Cursor
2. Open the Cursor chat / Composer panel
3. Copy ONE prompt at a time
4. Paste it into Cursor and run it
5. Review what Antigravity creates
6. Confirm it looks correct before moving to the next prompt
7. After all prompts are done — push to GitHub → Netlify deploys automatically

DO NOT run all prompts at once.
DO NOT skip a prompt.
Run them in order: Prompt 1 → Prompt 2 → Prompt 3 → Prompt 4 → Prompt 5

---
---

## PROMPT 1 — Create the About Us Page

Paste this entire block into Cursor Composer:

```
Look at my existing site template files to understand how pages are structured 
on this site. Find the template or layout file that wraps page content — 
the one that includes the navigation, header, and footer.

Then create a new About Us page that:

1. Uses the EXACT same template/layout structure as my other pages
2. Has the URL path: /about-us
3. Has this Tamil page title: நாங்கள் யார்
4. Contains the following Tamil content in the page body:

---
கல்யாண வீடு என்பது தமிழ் திருமண மரபுகளையும் சடங்குகளையும் 
ஆவணப்படுத்துவதற்காக உருவாக்கப்பட்ட ஒரு தமிழ் இதழியல் இணையதளம்.

நம் முன்னோர்களிடமிருந்து வந்த திருமண சடங்குகள் — நாந்தி முதல் நாளும், 
முகூர்த்தம் முதல் மணவிழா வரை — ஒவ்வொன்றிலும் ஆழமான கலாச்சார அர்த்தம் 
உள்ளது. ஆனால் இந்த அர்த்தங்களை தமிழிலேயே விளக்கும் நம்பகமான ஆதாரங்கள் 
மிகவும் குறைவாக உள்ளன. கல்யாண வீடு இந்த இடைவெளியை நிரப்புவதற்காகவே 
தொடங்கப்பட்டது.

நாங்கள் என்ன செய்கிறோம்

தமிழ்நாட்டு திருமண சடங்குகளை — அவற்றின் வரலாறு, அர்த்தம், மற்றும் 
பிராந்திய வேறுபாடுகளுடன் — தமிழில் ஆவணப்படுத்துகிறோம். ஒவ்வொரு சடங்கும் 
ஏன் நடைபெறுகிறது என்பதை நாங்கள் விளக்குகிறோம் — வெறும் எப்படி என்பதை 
மட்டும் அல்ல. நாந்தி ஏன் நடத்தப்படுகிறது? கன்யாதானத்தின் கலாச்சார 
முக்கியத்துவம் என்ன? சப்தபதியில் எடுக்கப்படும் ஏழு அடிகளின் அர்த்தம் என்ன? 
இது போன்ற கேள்விகளுக்கு ஆழமான, நம்பகமான விடைகளை வழங்குவது எங்கள் நோக்கம்.

தமிழ்நாட்டின் பல்வேறு சமூகங்கள் — இயர், ஐயங்கார், முதலியார், நாடார், 
செட்டியார், தேவர் — ஒவ்வொரு சமூகத்திலும் திருமண மரபுகள் எவ்வாறு 
வேறுபடுகின்றன என்பதையும் நாங்கள் விவரிக்கிறோம்.

நாங்கள் எப்படி ஆராய்கிறோம்

எங்கள் உள்ளடக்கம் அரசு கலாசார அமைப்புகள், கல்வியாளர் ஆய்வுகள், மற்றும் 
சான்றாதார கலாச்சார ஆவணங்களின் அடிப்படையில் தயாரிக்கப்படுகிறது. வலைப்பதிவுகள் 
அல்லது சமூக ஊடகங்களில் உள்ள தகவல்களை நாங்கள் ஆதாரமாக பயன்படுத்துவதில்லை. 
ஒவ்வொரு கட்டுரையும் குறிப்பிட்ட பிராந்தியம் மற்றும் சமூகத்தின் மரபுகளை மட்டுமே 
விவரிக்கிறது.

தமிழில் ஏன்

திருமண மரபுகள் தமிழ் குடும்பங்களுக்கு சொந்தமானவை. அவை தமிழிலேயே 
ஆவணப்படுத்தப்பட வேண்டும். கல்யாண வீட்டில் உள்ள அனைத்து உள்ளடக்கமும் 
தமிழிலேயே எழுதப்படுகிறது — ஏனென்றால் இந்த மரபுகளைப் பற்றி தெரிந்துகொள்ள 
விரும்புபவர்கள் தமிழ் குடும்பங்களில் உள்ளவர்களே.

தொடர்பு கொள்ளுங்கள்

உங்கள் கருத்துகளை மற்றும் கலாச்சார திருத்தங்களை எங்களுடன் பகிர்ந்து கொள்ள 
அழைக்கிறோம். தொடர்பு பக்கம் வழியாக எங்களை அடையலாம்.
---

5. Make sure the HTML head includes:
   - <meta charset="UTF-8">
   - <meta name="description" content="கல்யாண வீடு - தமிழ் திருமண மரபுகள் மற்றும் சடங்குகள் பற்றிய தகவல் இணையதளம்">
   - A page title tag: நாங்கள் யார் | கல்யாண வீடு

6. Do NOT add any navigation links yet — I will do that in a separate step.

7. Show me the file you created and confirm the file path.
```

---
---

## PROMPT 2 — Create the Contact Page

Paste this entire block into Cursor Composer:

```
Using the same template/layout structure you identified in the previous step,
create a new Contact page for kalyanaveedu.in.

IMPORTANT: Before writing the page, ask me for the email address to use.
I need to provide a real email — do not use a placeholder.

The page should have:
1. URL path: /contact
2. Tamil page title: தொடர்பு கொள்ளுங்கள்
3. The following Tamil content in the page body — with the email address 
   I provide inserted where indicated:

---
கல்யாண வீட்டை படிக்கும் வாசகர்களின் கருத்துகள் எங்களுக்கு மிகவும் முக்கியம்.

நீங்கள் படித்த சடங்கு விளக்கங்களில் ஏதேனும் திருத்தங்கள் இருந்தால், உங்கள் 
குடும்பத்தில் அல்லது உங்கள் சமூகத்தில் வேறுவிதமாக நடைபெறும் மரபுகளை நாங்கள் 
தெரிந்துகொள்ள விரும்புகிறோம். இத்தகைய பிராந்திய வேறுபாடுகளை ஆவணப்படுத்துவது 
கல்யாண வீட்டின் முக்கியமான நோக்கங்களில் ஒன்று.

எங்களை எப்படி தொடர்பு கொள்வது

மின்னஞ்சல்: [INSERT EMAIL ADDRESS HERE — display it as plain visible text]

நாங்கள் பொதுவாக 3 முதல் 5 வேலை நாட்களுக்குள் பதில் அனுப்புவோம்.

எதற்காக எழுதலாம்

கட்டுரைகளில் உள்ள கலாச்சார திருத்தங்களுக்கு, உங்கள் சமூகத்தின் திருமண 
மரபுகள் பற்றிய தகவல்களை பகிர்வதற்கு, குறிப்பிட்ட சடங்கை பற்றி கட்டுரை 
எழுத வேண்டும் என்ற கோரிக்கைகளுக்கு, மற்றும் பொதுவான கேள்விகளுக்கு 
தயவுசெய்து எழுதுங்கள்.

குறிப்பு: கல்யாண வீடு ஒரு தகவல் இணையதளம் மட்டுமே. திருமண ஏற்பாடுகள், 
விற்பனையாளர் பரிந்துரைகள், அல்லது தனிப்பட்ட ஆலோசனைகள் ஆகியவற்றை 
நாங்கள் வழங்குவதில்லை.
---

4. The email address MUST appear as visible plain text on the page — 
   not hidden inside a form. A contact form can also exist, but the 
   email address must be readable without any interaction.

5. HTML head must include:
   - <meta charset="UTF-8">
   - <meta name="description" content="கல்யாண வீட்டை தொடர்பு கொள்ளுங்கள்">
   - Title tag: தொடர்பு கொள்ளுங்கள் | கல்யாண வீடு

6. Show me the file path and confirm the email is visible in the rendered output.
```

---
---

## PROMPT 3 — Create the Cookie Policy Page

Paste this entire block into Cursor Composer:

```
Using the same template/layout structure, create a Cookie Policy page
for kalyanaveedu.in.

Page details:
1. URL path: /cookie-policy
2. Tamil page title: குக்கீ கொள்கை
3. Full page content:

---
நடைமுறைக்கு வந்த தேதி: பிப்ரவரி 2026

குக்கீகள் என்றால் என்ன

குக்கீகள் (Cookies) என்பது நீங்கள் ஒரு இணையதளத்தை பார்வையிடும்போது உங்கள் 
கணினி அல்லது மொபைலில் சேமிக்கப்படும் சிறிய தகவல் கோப்புகள். இந்த கோப்புகள் 
இணையதளம் உங்கள் விருப்பங்களை நினைவில் வைத்துக்கொள்ள மற்றும் பயன்பாட்டு 
அனுபவத்தை மேம்படுத்த உதவுகின்றன.

kalyanaveedu.in பயன்படுத்தும் குக்கீகள்

1. அமர்வு குக்கீகள் (Session Cookies)
நீங்கள் இணையதளத்தை பார்வையிடும் அமர்வின்போது மட்டும் செயல்படும் 
தற்காலிக குக்கீகள். உலாவியை மூடும்போது இவை தானாக நீக்கப்படும்.

2. Google Analytics குக்கீகள்
kalyanaveedu.in, Google Analytics சேவையைப் பயன்படுத்துகிறது. இந்த சேவை 
எத்தனை பேர் இணையதளத்தை பார்வையிடுகிறார்கள், எந்த பக்கங்களை அதிகம் 
படிக்கிறார்கள் என்ற பொதுவான தகவல்களை சேகரிக்கிறது. இந்த தகவல்கள் 
தனிப்பட்ட அடையாளங்களை வெளிப்படுத்துவதில்லை.
மேலும் அறிய: https://policies.google.com/privacy

3. Google AdSense குக்கீகள்
kalyanaveedu.in, Google AdSense விளம்பர சேவையைப் பயன்படுத்துகிறது. 
Google AdSense, வாசகர்களின் ஆர்வங்களுக்கு தகுந்த விளம்பரங்களை காட்டுவதற்காக 
குக்கீகளைப் பயன்படுத்துகிறது.
மேலும் அறிய: https://policies.google.com/technologies/ads
விளம்பர குக்கீகளை நிறுத்த: https://adssettings.google.com

குக்கீகளை எப்படி கட்டுப்படுத்துவது

உங்கள் உலாவி அமைப்புகள் மூலம் குக்கீகளை நிராகரிக்கலாம் அல்லது நீக்கலாம்:
Chrome: Settings → Privacy and Security → Cookies
Firefox: Settings → Privacy and Security → Cookies and Site Data
Safari: Preferences → Privacy → Cookies

குறிப்பு: குக்கீகளை முழுவதும் நிறுத்தினால், சில இணையதள செயல்பாடுகள் 
சரியாக வேலை செய்யாமல் போகலாம்.

இந்தக் கொள்கை மாறலாம்

இந்த குக்கீ கொள்கை அவ்வப்போது புதுப்பிக்கப்படலாம். மாற்றங்கள் இருந்தால் 
இந்த பக்கத்தில் புதுப்பிக்கப்பட்ட தேதியுடன் வெளியிடப்படும்.

தொடர்பு: [link text: தொடர்பு பக்கம்] [href: /contact]
---

4. HTML head:
   - <meta charset="UTF-8">
   - <meta name="description" content="kalyanaveedu.in குக்கீ கொள்கை">
   - Title: குக்கீ கொள்கை | கல்யாண வீடு

5. Show me the file path when done.
```

---
---

## PROMPT 4 — Update Privacy Policy to Add Google AdSense

Paste this entire block into Cursor Composer:

```
Find my existing Privacy Policy page file in this project.
Show me the current content of that file first.

Then add the following Tamil paragraph to it. 
Add it in the section that discusses third-party services or advertising.
If no such section exists, add it before the final date/contact section.

Tamil paragraph to add:

---
இந்த இணையதளம் Google AdSense விளம்பர சேவையைப் பயன்படுத்துகிறது. 
Google AdSense, விளம்பரங்களை வழங்குவதற்காக குக்கீகளைப் பயன்படுத்துகிறது. 
Google AdSense-இன் தனியுரிமைக் கொள்கையை இங்கே படிக்கலாம்: 
https://policies.google.com/privacy

விளம்பர விருப்பங்களை மாற்ற: https://adssettings.google.com

குக்கீகள் பற்றிய கூடுதல் தகவல்களுக்கு எங்கள் குக்கீ கொள்கையை படிக்கவும்: 
[link text: குக்கீ கொள்கை] [href: /cookie-policy]
---

Also add a link to /cookie-policy in the Privacy Policy page if it 
does not already have one.

Show me what you changed — show the before and after of the section you edited.
Do not change anything else in the Privacy Policy.
```

---
---

## PROMPT 5 — Add All Pages to Navigation and Footer

Paste this entire block into Cursor Composer:

```
I need to add links to three new pages in my site navigation and footer.
The new pages are:
- நாங்கள் யார் → /about-us
- தொடர்பு கொள்ளுங்கள் → /contact  
- குக்கீ கொள்கை → /cookie-policy

First: find the file(s) that control the site navigation header and footer.
Show me those files before making any changes.

Then make these specific changes:

HEADER NAVIGATION — add these two links:
- நாங்கள் யார் linking to /about-us
- தொடர்பு கொள்ளுங்கள் linking to /contact
Place them at the end of the existing navigation items.

FOOTER — add these three links:
- நாங்கள் யார் linking to /about-us
- தொடர்பு கொள்ளுங்கள் linking to /contact
- குக்கீ கொள்கை linking to /cookie-policy
Place them alongside the existing footer links (Privacy Policy, Terms, Disclaimer).

Also verify that these existing pages are already in the footer:
- Privacy Policy
- Terms of Use  
- Disclaimer
If any are missing from the footer, add them too.

Show me the before and after of both the navigation and footer files.
Do not change the visual styling — match the existing link style exactly.
```

---
---

## AFTER ALL 5 PROMPTS ARE DONE

### Final check before pushing to Netlify:

Open each new page locally and verify:
- [ ] /about-us loads and shows Tamil text correctly (no □ characters)
- [ ] /contact loads and shows your email address as visible plain text
- [ ] /cookie-policy loads and shows the Google AdSense section
- [ ] Privacy Policy now contains the Google AdSense paragraph
- [ ] நாங்கள் யார் appears in the site header navigation
- [ ] தொடர்பு appears in the site header navigation
- [ ] All three new pages appear in the footer
- [ ] All existing footer links still work

### Then push to Netlify:
```
git add .
git commit -m "Add About Us, Contact, Cookie Policy pages for AdSense approval"
git push
```

### After Netlify deploys, verify live:
- [ ] kalyanaveedu.in/about-us returns 200
- [ ] kalyanaveedu.in/contact returns 200 and shows email
- [ ] kalyanaveedu.in/cookie-policy returns 200
- [ ] Header navigation shows new links
- [ ] Footer shows all links

### Then — set up Google Search Console:
1. Go to search.google.com/search-console
2. Add property: kalyanaveedu.in
3. Verify ownership using HTML tag method
   (Antigravity can add the verification meta tag to your site head — 
   run a separate prompt for this if needed)
4. Submit sitemap: sitemap.xml
5. Check Coverage tab for crawl errors

### DO NOT submit to AdSense until:
- All pages above are live ✓
- Search Console is verified ✓  
- 4 weeks have passed since today ✓
- You have at least 15 published articles ✓
