# Folio-style Portfolio (React + Node + Supabase)

This repository is a starter scaffold to build a Folio-like portfolio site (the dark, full-page layout shown in the screenshots you provided). It includes:

- `client` — React + Vite front-end with full-page scroll-snap and framer-motion animations.
- `server` — Small Express server that can proxy content from Supabase or serve local sample data.

What you get:

- A monorepo skeleton you can run locally.
- Instructions to set up a Supabase project and a `sections` table to store images/content.
- Editable images and content via Supabase (instructions included).

Quick start (Windows PowerShell):

1. Create a Supabase project (see `server/.env.example` and docs below).
2. In two terminals, run:

```powershell
cd h:\HICHEM\Portfolio\folio-portfolio\server; npm install; npm run dev
cd h:\HICHEM\Portfolio\folio-portfolio\client; npm install; npm run dev
```

3. Open the client dev URL (shown by Vite) and it will fetch section data from `http://localhost:4000/api/sections`.

Next steps:
- Replace placeholder images in the Supabase storage bucket (or `client/public`) and update the `sections` records.
- Customize styles in `client/src/styles.css` and `client/src/components/Section.jsx`.

See `server/README_SUPABASE.md` for Supabase setup instructions and SQL for the `sections` table.
