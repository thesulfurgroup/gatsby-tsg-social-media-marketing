const assert = require('assert');
const path = require('path');
const handlebars = require('handlebars');
assert.equal(handlebars.VERSION, '4.7.10');
assert.equal(handlebars.compile('Hello {{name}}')({name:'<Sulfur>'}), 'Hello &lt;Sulfur&gt;');
for (const [parent, version] of [['@graphql-tools/url-loader','4.0.6'], ['@types/node-fetch','4.0.6'], ['request','2.5.6'], ['codesandboxer','2.5.6']]) {
  const resolved = require.resolve('form-data/package.json', {paths:[path.dirname(require.resolve(parent + '/package.json'))]});
  assert.equal(require(resolved).version, version);
  const Form = require(path.dirname(resolved));
  const form = new Form();
  form.append('company', 'Sulfur');
  assert(form.getBuffer().toString().includes('Sulfur'));
}
console.log('Patched tooling resolutions, escaped rendering and multipart smoke checks pass');
