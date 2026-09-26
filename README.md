# The Healthy Habit — Landing Page

A lightweight, mobile-first static landing page for **The Healthy Habit**, designed for low-cost hosting and WhatsApp-first ordering.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive styling and animations
- `script.js` — WhatsApp ordering, reveal animations and current year
- `assets/menu-banner.jpg` — supplied menu banner
- `assets/subscription-banner.jpg` — supplied subscription banner

## Run locally

Open `index.html` in a browser. No build step or Node.js is required.

For a local server, from this folder run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish for free

### GitHub Pages
1. Create a GitHub repository.
2. Upload all files and the `assets` folder.
3. In **Settings → Pages**, choose **Deploy from a branch**.
4. Select the `main` branch and `/root` folder.
5. GitHub will give you the live site URL.

You can later connect a custom domain.

## Before launch

1. Confirm the two phone numbers.
2. Confirm menu and subscription prices.
3. Replace the Google Maps search link with the shop's exact Google Maps place link if you have it.
4. Add the shop's Instagram URL if desired.
5. Replace the two banner images with real food photographs when available for a more premium look.

## WhatsApp

The site uses `8598824098` as the WhatsApp ordering number. Edit `WA_NUMBER` in `script.js` if the shop changes its ordering number.
