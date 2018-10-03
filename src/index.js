import { declare } from '@babel/helper-plugin-utils';
import syntax from '@babel/plugin-syntax-dynamic-import';

export default declare(({ assertVersion, template }) => {
  assertVersion(7);

  const buildImport = template(`
  (new Promise((resolve) => {
    require.ensure([], (require) => {
      resolve(require(SOURCE));
    });
  }))
`);

  return {
    inherits: syntax,
    visitor: {
      Import(path) {
        const newImport = buildImport({
          SOURCE: path.parentPath.node.arguments,
        });
        path.parentPath.replaceWith(newImport);
      },
    },
  };
});
