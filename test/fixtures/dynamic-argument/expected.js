const MODULE = 'test-module';

new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(MODULE));
  });
});
new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(`test-${ MODULE }`));
  });
});
