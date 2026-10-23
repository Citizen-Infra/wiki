// Preserve table semantics/content while providing a labelled keyboard scroll region.
export function rehypeScrollTables() {
  const text = node => node.type === 'text' ? node.value : (node.children || []).map(text).join('');
  return tree => {
    function walk(parent, heading = '') {
      if (!parent.children) return;
      parent.children = parent.children.map(node => {
        if (node.type === 'element' && /^h[1-6]$/.test(node.tagName)) heading = text(node).trim();
        if (node.type === 'element' && node.properties?.className?.includes('wiki-table-scroll')) return node;
        if (node.type === 'element' && node.tagName === 'table') {
          const caption = node.children?.find(child => child.tagName === 'caption');
          return {
            type: 'element', tagName: 'div',
            properties: {
              className: ['wiki-table-scroll'], role: 'region', tabIndex: 0,
              ariaLabel: `${caption ? text(caption).trim() : heading || 'Article'} — scrollable table`,
            },
            children: [node],
          };
        }
        walk(node, heading);
        return node;
      });
    }
    walk(tree);
  };
}
