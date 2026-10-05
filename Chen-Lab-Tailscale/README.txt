CHEN LAB — MULTIPAGE WEBSITE

Pages: index.html, publications.html, pi.html, people.html, contact.html.
Keep style.css, app.js and cellular-landscape.webp beside these HTML files.
All visual assets are local. Publication links, Scholar and ORCID open external sites.

UPDATE YOUR CURRENT MAC SETUP
Copy every file from this folder into:
/Users/mrc/Dropbox/MRC/Labpage/Chen-Lab-Tailscale
Choose Replace for index.html and README.txt when asked.
Keep the folder path the same. Your existing Tailscale URL stays the same.
Refresh the browser with Command-Shift-R.

If the local server is stopped, start it in Terminal:
python3 -m http.server 8000 --bind 127.0.0.1 --directory "/Users/mrc/Dropbox/MRC/Labpage/Chen-Lab-Tailscale"

Leave that Terminal window open and keep the Mac awake and online.
In another Terminal tab, if Funnel needs to be started:
TAILSCALE_BE_CLI=1 /Applications/Tailscale.app/Contents/MacOS/Tailscale funnel --bg http://127.0.0.1:8000

The People page retains a placeholder for additional member profiles.
