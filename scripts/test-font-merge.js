const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const mergeCss = require('gatsby-plugin-prefetch-google-fonts/merge-css');

async function main() {
  const originalCwd = process.cwd();
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'sulfur-font-merge-'));
  const cache = path.join(temp, '.cache/google-fonts');
  fs.mkdirSync(cache, { recursive: true });
  function rule(source) {
    return "@font-face {\n font-family: Test;\n font-style: normal;\n font-weight: 400;\n src: " + source + ";\n}\n";
  }
  try {
    process.chdir(temp);
    for (const sharedLocalSource of [false, true]) {
      const local = sharedLocalSource ? "local('Test'), " : '';
      fs.writeFileSync(path.join(cache, 'woff2.css'), rule(local + "url(https://example.invalid/test.woff2) format('woff2')"));
      fs.writeFileSync(path.join(cache, 'woff.css'), rule(local + "url(https://example.invalid/test.woff) format('woff')"));
      await mergeCss({ pathPrefix: '' });
      const css = fs.readFileSync(path.join(cache, 'google-fonts.css'), 'utf8');
      assert(css.includes('https://example.invalid/test.woff2'), 'WOFF2 source must survive');
      assert(css.includes('font-display: swap'), 'font-display must survive');
      assert(!css.includes('undefined'), 'unmatched source must never become undefined');
      if (sharedLocalSource) assert(css.includes('https://example.invalid/test.woff)'), 'legacy matched WOFF fallback must survive');
    }
    console.log('PASS: current unmatched font sources and legacy matching sources remain usable');
  } finally {
    process.chdir(originalCwd);
    fs.rmSync(temp, { recursive: true, force: true });
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
