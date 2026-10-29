# Aya & Amr — Wedding Invitation 🌸

A responsive bilingual (Arabic/English) wedding invitation built with Next.js 14, featuring a soft ivory, blush and sage floral theme.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize
- Wedding date: `components/DateSection.tsx`
- Names and invitation copy: `components/HeroSection.tsx`
- Venue link and details: `components/VenueSection.tsx` and `components/VenueCard.tsx`
- Floral hero illustration: `public/floral-hero.svg`
- Background music: replace `public/music.mp3` if desired.

The supplied Google venue share link is included as provided. The couple portraits from the original project were intentionally not reused because they may depict a different couple; the invitation uses venue imagery and floral artwork instead. Add Aya and Amr's own photos to `public/` if you'd like to feature them.

## Guest messages
The guest wishes form uses EmailJS. Add your own EmailJS public keys and service/template IDs as `NEXT_PUBLIC_EMAILJS_*` variables in `.env.local` before deployment. Do not share private environment files.
# Amr-Aya
