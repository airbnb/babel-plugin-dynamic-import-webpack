function getModule(path) {
  return new Promise(resolve => {
    require.ensure([], require => {
      resolve(babelHelpers.interopRequireWildcard(require('test-module')));
    });
  });
}

getModule().then(() => {});
