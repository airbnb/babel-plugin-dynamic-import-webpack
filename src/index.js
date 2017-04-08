import template from 'babel-template';
import syntax from 'babel-plugin-syntax-dynamic-import';

const TYPE_IMPORT = 'Import';

const buildImport = template(`
  (new Promise((resolve) => {
    require.ensure([], (require) => {
      resolve(require(SOURCE));
    });
  }))
`);

const buildPlainImport = template(`
  (new Promise((resolve) => {
    resolve(require(SOURCE));
  }))
`);

export default () => ({
  inherits: syntax,

  visitor: {
    CallExpression(path, state) {
      if (path.node.callee.type === TYPE_IMPORT) {
        const importBuilder = state.opts.plainRequire ? buildPlainImport : buildImport;
        const newImport = importBuilder({
          SOURCE: path.node.arguments,
        });
        path.replaceWith(newImport);
      }
    },
  },
});
