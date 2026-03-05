<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/51cc7494-8ad1-46fa-8d6a-78d771b499c5

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

1. Push to the `main` branch.
2. In your GitHub repo, go to Settings → Pages and set "Build and deployment" to "GitHub Actions".
3. The workflow at `.github/workflows/deploy.yml` will build and publish the site.

## Manual Deploy (gh-pages)

1. Install deps: `npm install`
2. Build with the correct base:
   - macOS/Linux: `VITE_BASE=/<your-repo>/ npm run deploy`
   - Windows (PowerShell): `$env:VITE_BASE='/<your-repo>/'; npm run deploy`
