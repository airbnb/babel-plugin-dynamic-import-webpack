function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

new Promise(resolve => {
  require.ensure([], require => {
    resolve(_interopRequireWildcard(require('test-module')));
  });
}).then(() => new Promise(resolve => {
  require.ensure([], require => {
    resolve(_interopRequireWildcard(require('test-module-2')));
  });
}));

Promise.all([new Promise(resolve => {
  require.ensure([], require => {
    resolve(_interopRequireWildcard(require('test-1')));
  });
}), new Promise(resolve => {
  require.ensure([], require => {
    resolve(_interopRequireWildcard(require('test-2')));
  });
}), new Promise(resolve => {
  require.ensure([], require => {
    resolve(_interopRequireWildcard(require('test-3')));
  });
})]).then(() => {});
