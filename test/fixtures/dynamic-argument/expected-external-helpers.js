const MODULE = 'test-module';

new Promise(resolve => {
  require.ensure([], require => {
    resolve(babelHelpers.interopRequireWildcard(require(MODULE)));
  });
});
new Promise(resolve => {
  require.ensure([], require => {
    resolve(babelHelpers.interopRequireWildcard(require(`test-${MODULE}`)));
  });
});
