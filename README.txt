Chen Lab website

GitHub Pages address: https://mchenlab.github.io/

Publishing
1. Open https://github.com/mchenlab/chenlab/settings/pages
2. Under Build and deployment, choose Deploy from a branch.
3. Select main and /(root), then Save.

The five HTML pages, CSS, JavaScript and images are in the repository root.
The .nojekyll file tells GitHub Pages to serve these static files directly.

Updates
Edit or upload the changed files at the repository root and commit to main.
GitHub Pages will deploy the changes automatically once Pages is enabled.

Local preview (optional)
Run python3 -m http.server 8000 from the website folder, then visit
http://localhost:8000. Python and Tailscale are not needed for GitHub hosting.
