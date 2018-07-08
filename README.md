The `/dist` folder is generated using Gulp. All SASS, JS, and image changes/additions should be made in the `/src` folder. Then, run gulp to process your changes and output them to `/dist`.

To view the site locally:

1. Checkout the repo and `cd` into the repo.
2. Run a local server pointing to the root directory of the repo (ex: `python3 -m http.server`). This makes it so links and images will resolve correctly.

Now you show be about to view and navigate through the site in your browser.

Additional steps if you are doing development:

1. Run `npm install`.
2. Install gulp if needed, then run `gulp`.
3. To automatically compile/minify your SASS & JS as you work, run `gulp watch`.
4. You can use livereload to have your changes auto-updated in the browser as you work. Install the livereload browser extension, activate it for the browser tab you're working on, and make sure you have `gulp watch` running.
