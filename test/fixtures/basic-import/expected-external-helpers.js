const testModule = new Promise(resolve => {
  require.ensure([], require => {
    resolve(babelHelpers.interopRequireWildcard(require('test-module')));
  });
});
