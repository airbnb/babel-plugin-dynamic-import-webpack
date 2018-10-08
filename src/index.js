export default ({ template }) => {
  const buildImport = template(`
  (new Promise((resolve) => {
    require.ensure([], (require) => {
      resolve(require(SOURCE));
    });
  }))
`);

  return {
    // NOTE: Once we drop support for Babel <= v6 we should
    // update this to import from @babel/plugin-syntax-dynamic-import.
    // https://www.npmjs.com/package/@babel/plugin-syntax-dynamic-import
    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push('dynamicImport');
    },
    visitor: {
      Import(path) {
        const newImport = buildImport({
          SOURCE: path.parentPath.node.arguments,
        });
        path.parentPath.replaceWith(newImport);
      },
    },
  };
};
