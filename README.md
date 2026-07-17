# Wei Haoyu (Eric) — Personal Portfolio

My personal resume/portfolio website, built to showcase my education, internship experience, projects, and skills.

Live: [my-website-iota-lake.vercel.app](https://my-website-iota-lake.vercel.app/)

## Tech Stack

- [Next.js](https://nextjs.org) (App Router) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com) for styling
- [lucide-react](https://lucide.dev) for icons
- Deployed on [Vercel](https://vercel.com) with continuous deployment from GitHub

## Project Structure

```
app/            Routes (Home, About, Internship, Projects) — file-based routing
components/     Reusable UI pieces (Nav, Footer, SectionLabel, TimelineCard)
data/           Typed content (profile, skills, education, internships, projects)
```

Content is kept separate from presentation: page components under `app/` read from typed data modules under `data/`, so updating content doesn't require touching layout/markup.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.
