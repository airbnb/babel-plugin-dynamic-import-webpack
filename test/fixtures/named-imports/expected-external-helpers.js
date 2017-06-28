const a = new Promise(resolve => {
  require.ensure([], require => {
    resolve(babelHelpers.interopRequireWildcard(require('./somePath')));
  }, 'some-path');
});
