const testModule = new Promise(resolve => {
  require.ensure([], require => {
    resolve(require('test-module'));
  });
});
