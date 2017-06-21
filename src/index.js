import template from 'babel-template';
import syntax from 'babel-plugin-syntax-dynamic-import';

const TYPE_IMPORT = 'Import';

const buildImport = template(`
  (new Promise((resolve) => {
    require.ensure([], (require) => {
      requireLogic
    });
  }))
`);

export default ({ types }) => ({
  inherits: syntax,

  visitor: {
    CallExpression(path) {
      if (path.node.callee.type === TYPE_IMPORT) {
        const importPath = path.node.arguments[0];
        /**
         * Create the resolve(require('path')) call.
         * This utilizes babel-helpers to properly handle default and named exports.
         */
        const requireLogic = types.callExpression( // eslint-disable-line
          types.identifier('resolve'), [
            types.callExpression(
              /**
               * Wrap the require call with the require wildcard babel helper
               * This helps to reduce boilerplate while sticking as closely
               * as possible to the spec of import()
               */
              this.addHelper('interopRequireWildcard'), [
                types.callExpression(types.identifier('require'), [importPath]),
              ],
            ),
          ],
        );

        const newImport = buildImport({
          requireLogic,
        });
        path.replaceWith(newImport);
      }
    },
  },
});
