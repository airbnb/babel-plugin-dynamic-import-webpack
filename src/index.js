import template from 'babel-template';
import syntax from 'babel-plugin-syntax-dynamic-import';

const buildImport = template(`
  (new Promise((resolve) => {
    require.ensure([SOURCE], (require) => {
      var ns = require(SOURCE);
      
      if (ns && ns.__esModule) {
        resolve(ns);
      } else {
        var wrap;
        if (typeof Object.create === 'function') {
          wrap = Object.create(null);
        } else {
          wrap = {};
          if (typeof wrap.__proto__ === 'object') {
            wrap.__proto__ = null;
          }
        }
        if (typeof Object.defineProperty === 'function') {
          Object.defineProperty(wrap, '__esModule', {
            value: true,
            writable: false,
            enumerable: false,
            configurable: false
          });
          Object.defineProperty(wrap, 'default', {
            value: ns,
            writable: false,
            enumerable: true,
            configurable: false
          });
        } else {
          wrap.__esModule = true;
          wrap.default = ns;
        }
        if (typeof Object.freeze === 'function') {
          Object.freeze(wrap);
        }
        resolve(wrap);
      }
    });
  }))
`);

export default () => ({
  inherits: syntax,

  visitor: {
    Import(path) {
      const newImport = buildImport({
        SOURCE: path.parentPath.node.arguments,
      });
      path.parentPath.replaceWith(newImport);
    },
  },
});
