# ⚡ The Power Coffee — Investor Simulator

Interactive investment simulator that lets potential investors model their investment in The Power Coffee and explore projected returns across a 7-year horizon.

**Live data** — pulls numbers directly from the [business plan spreadsheet](https://docs.google.com/spreadsheets/d/1cECO9T_Pet00U3O1jERMCAjXRobWWu-FQV_rfGMbeoA) on every page load. Update the spreadsheet → investors see updated projections.

## Features

- **Investment slider** ($50K–$500K) with real-time projections
- **Overview** — equity %, return multiple, EBITDA & valuation charts
- **Use of Proceeds** — where every dollar goes (marketing, COGS, logistics, salaries)
- **7-Year Projections** — revenue, costs, EBITDA %, valuation table
- **Cap Table** — donut chart with post-investment ownership breakdown
- **18-Month Detail** — monthly unit sales and revenue trajectory

## Quick Start (local dev)

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173/powercoffee-investor/`

## Deploy to GitHub Pages

### 1. Create a GitHub repo

Create a new repo named `powercoffee-investor` on GitHub.

### 2. Push this code

```bash
git init
git add .
git commit -m "Initial commit — investor simulator"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/powercoffee-investor.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. The deploy workflow runs automatically on push

### 4. Share the link

Your simulator will be live at:

```
https://YOUR_USERNAME.github.io/powercoffee-investor/
```

## Customization

### Change the repo name

If you use a different repo name, update the `base` path in `vite.config.js`:

```js
base: '/your-repo-name/',
```

### Update business plan data

Just edit the Google Sheet — the simulator fetches live CSV data on every page load. No rebuild needed.

### Colors

The palette in `src/App.jsx` matches [thepowercoffee.com](https://www.thepowercoffee.com):

| Token | Value | Usage |
|-------|-------|-------|
| `bg` | `#121212` | Primary dark background |
| `bgSection` | `#242833` | Dark blue sections |
| `accent` | `#334fb4` | Blue accent (buttons, highlights) |
| `white` | `#ffffff` | Primary text |
| Heading font | Nobile | Matches site heading font |
| Body font | Inter | Matches site body font |

## Video Production — Higgsfield Cinema Studio

Create engaging promotional videos for The Power Coffee using **Higgsfield's AI-powered Cinema Studio**. This repository includes complete video production resources.

### 📹 Create Videos with Cinema Studio

**Higgsfield Profile:** [https://higgsfield.ai/@thepowercoffee](https://higgsfield.ai/@thepowercoffee)

Higgsfield is an AI video and image generation platform. Use Cinema Studio to create professional marketing videos featuring real people.

### 📋 Video Production Files

This repository includes complete video production documentation:

- **[CINEMA_STUDIO_PROMPTS.md](./CINEMA_STUDIO_PROMPTS.md)** — Copy-paste ready prompts for all 23 video scenes (60-second complete video)
- **[POWER_COFFEE_VIDEO_SCRIPT.md](./POWER_COFFEE_VIDEO_SCRIPT.md)** — Full video script, storyboard, and production guide

### 🎬 Quick Start — Create Your Video

1. Go to [Higgsfield.ai/@thepowercoffee](https://higgsfield.ai/@thepowercoffee)
2. Click **Cinema Studio**
3. Open [CINEMA_STUDIO_PROMPTS.md](./CINEMA_STUDIO_PROMPTS.md)
4. Copy the first prompt (Scene 1a)
5. Paste into Cinema Studio generator
6. Generate video
7. Repeat for all 23 scenes (1a–5c)
8. Assemble scenes in timeline editor
9. Add voiceover + background music
10. Export and share on Amazon, Instagram, TikTok

### 📊 Video Purpose & Strategy

**Goal:** Boost sales through authentic video testimonials and lifestyle content

**Video Highlights:**
- ⏱️ **60 seconds** total duration
- 👥 **Diverse cast** — 10+ real people in authentic settings
- 📍 **5 Scenes:** Morning energy → Brewing ritual → Impact → Testimonials → CTA
- 🎯 **Clear call-to-action** — Links to Amazon purchase page
- 🎨 **Premium aesthetic** — Cinematic, golden hour lighting

**Key Scenes:**
1. **The Morning Begins** (4 shots) — Different people starting their day
2. **The Ritual** (6 shots) — Close-ups of people brewing Power Coffee with different methods
3. **The Impact** (7 shots) — People thriving at work, gym, creative pursuits
4. **Customer Validation** (4 shots) — Real testimonials from satisfied customers
5. **Call-to-Action** (3 shots) — Product showcase + Amazon link

### 🚀 Expected Results

- **CTR Goal:** 3-5% click-through to Amazon
- **Completion Rate:** 60%+ watch full video
- **Conversion:** 5-8% of clicks convert to purchases
- **Best Platforms:** YouTube, Instagram Reels, TikTok, Facebook

---

## Tech Stack

- **React 18** + **Vite 6**
- **Google Sheets CSV export** (no API key needed)
- **GitHub Actions** for CI/CD
- **Higgsfield Cinema Studio** for AI video generation
- Zero external UI libraries — pure React components

---

**The Power Coffee** — *Fuel the people who show up fully every day.*

[thepowercoffee.com](https://www.thepowercoffee.com) · [Amazon](https://a.co/d/09Gmr1Sq) · [@powercoffee.ofc](https://instagram.com/powercoffee.ofc)
