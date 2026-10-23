import test from 'node:test';
import assert from 'node:assert/strict';
import { rehypeScrollTables } from '../scripts/rehype-scroll-tables.mjs';

const element = (tagName, children = [], properties = {}) => ({ type: 'element', tagName, properties, children });
const text = value => ({ type: 'text', value });

test('table wrappers preserve original semantics, cells and links', () => {
  const table = element('table', [element('tbody', [element('tr', [element('td', [element('a', [text('Source')], { href: '/library/reading-and-sources/' })])])])]);
  const original = structuredClone(table);
  const tree = { type: 'root', children: [element('h2', [text('Comparison')], { id: 'comparison' }), table] };
  rehypeScrollTables()(tree);
  const wrapper = tree.children[1];
  assert.equal(wrapper.tagName, 'div');
  assert.equal(wrapper.properties.role, 'region');
  assert.equal(wrapper.properties.tabIndex, 0);
  assert.equal(wrapper.properties.ariaLabel, 'Comparison — scrollable table');
  assert.equal(wrapper.children[0], table);
  assert.deepEqual(table, original);
  assert.equal(tree.children[0].properties.id, 'comparison');
});

test('a caption supplies the accessible name and repeated processing is idempotent', () => {
  const table = element('table', [element('caption', [text('Published results')])]);
  const tree = { type: 'root', children: [table] };
  const transform = rehypeScrollTables();
  transform(tree);
  assert.equal(tree.children[0].properties.ariaLabel, 'Published results — scrollable table');
  const once = structuredClone(tree);
  transform(tree);
  assert.deepEqual(tree, once);
});

test('documents without tables and non-table code are unchanged', () => {
  const tree = { type: 'root', children: [element('p', [text('A source-led article.')]), element('pre', [element('code', [text('<table> is a code example.')])])] };
  const original = structuredClone(tree);
  rehypeScrollTables()(tree);
  assert.deepEqual(tree, original);
});
