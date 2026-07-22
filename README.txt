SHOT CADDIE — WEBSITE (updated July 22, 2026)
================================================

WHAT'S IN THIS FOLDER
  index.html            Home — lineup, "Why Shot Caddie?" brand story, signup
  original.html         Shot Caddie Original (manual) product page
  shot-caddie-2.html    Shot Caddie 2.0 + Mini product page
  trivia.html           Shot Caddie Trivia product page
  barware.html          Shot glass + rocks glass page
  how-it-works.html     All three products (keeps the old filename/URL)
  faq.html              Rewritten FAQ (keeps the old filename/URL)
  css/styles.css        One shared stylesheet
  js/site.js            Makes the signup forms open the visitor's email app
  images/               The five product renders, compressed for web

HOW THE SIGNUP FORMS WORK (no email provider needed)
  Every page has a "launch list" form. When a visitor enters their email
  and clicks "Notify me," their own email app (Outlook, Gmail, Apple Mail,
  etc.) opens with a ready-to-send message addressed to you, already
  containing their email and which page they came from. They just hit send.
  Nothing to wire up, no backend, no third-party service.

  TO CHANGE WHERE THESE EMAILS GO:
  Open js/site.js and edit the ONE line near the top:
      var CONTACT_EMAIL = "orders@flyingbindustries.com";
  That address is the only thing to change. It applies to all pages.

DEPLOY (2 steps)
  1. UPLOAD EVERYTHING to your web host, replacing the current files.
     Keep the folder structure — css/, js/, and images/ must sit next to
     the HTML files. how-it-works.html and faq.html reuse the old
     filenames, so old links keep working. index.html replaces the old
     homepage.
  2. TEST on phone and desktop: nav menu, all pages, images, and click
     "Notify me" to confirm your email app opens with the message.

NOTES
  - No email provider, form service, or backend is required.
  - If a visitor has JavaScript disabled, a fallback "Email us to join
    the launch list" link appears that still opens their email app.
  - All "Q2 2026" dates are gone; every product reads
    "In development / Coming soon — launching first on Kickstarter."
  - The pump volume reads "¼ oz per pump press."
  - Bottles on the Original are described as 500 mL GLASS, dishwasher safe.
  - The ™ symbol is used with the Shot Caddie name throughout.
  - Fonts load from Google Fonts (Young Serif, Archivo, Great Vibes);
    no other external dependencies, no frameworks.
