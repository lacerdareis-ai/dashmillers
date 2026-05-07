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

## Tech Stack

- **React 18** + **Vite 6**
- **Google Sheets CSV export** (no API key needed)
- **GitHub Actions** for CI/CD
- Zero external UI libraries — pure React components

---

**The Power Coffee** — *Fuel the people who show up fully every day.*

[thepowercoffee.com](https://www.thepowercoffee.com) · [Amazon](https://a.co/d/09Gmr1Sq) · [@powercoffee.ofc](https://instagram.com/powercoffee.ofc)
