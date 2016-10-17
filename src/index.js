import template from 'babel-template';

const TYPE_IMPORT = 'Import';

const buildImport = template(`
  (new Promise((resolve) => {
    require.ensure([], (require) => {
      resolve(require(SOURCE));
    });
  }))
`);

export default () => ({
  manipulateOptions(opts, parserOpts) {
    parserOpts.plugins.push('dynamicImport');
  },

  visitor: {
    CallExpression(path) {
      if (path.node.callee.type === TYPE_IMPORT) {
        const newImport = buildImport({
          SOURCE: path.node.arguments,
        });
        // console.log(newImport);
        path.replaceWith(newImport);
      }
    },
  },
});
