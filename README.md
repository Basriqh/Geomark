# GEOMARK Engineering Consultants

Professional land surveying, geotechnical investigation, materials testing, and engineering documentation services for infrastructure development in Somalia.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Hostinger Node.js Web App (auto-deploy from GitHub)

## Local Development

**Prerequisites**: Node.js 22+

```bash
npm install
cp .env.example .env.local   # fill in your values
npm run dev
```

## Environment Variables

See [.env.example](.env.example) for all required variables. On Hostinger, set these in the **Environment Variables** panel.

## Build & Deploy

```bash
npm run build    # production build
npm run lint     # ESLint check
npm start        # start production server
```

Auto-deployment is configured via Hostinger GitHub integration. Every push to `main` triggers a new deployment.

## Project Structure

```
app/              # Next.js App Router pages
components/       # Shared UI components
hooks/            # React hooks
lib/              # Utilities
public/Images/    # Static images (case-sensitive on Linux)
```

## Contact

**Office**: 410, Qalab-xor Tower, Digfeer Street, Mogadishu, Somalia
**Email**: info@geomark.so
**Phone**: +252 611 548 569
