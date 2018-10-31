const MODULE = 'test-module';

new Promise(resolve => {
  require.ensure([MODULE], require => {
    var ns = require(MODULE);

    if (ns && ns.__esModule) {
      resolve(ns);
    } else {
      var wrap = Object.create(null);
      wrap.__esModule = true;
      wrap.default = ns;
      Object.freeze(wrap);
      resolve(wrap);
    }
  });
});
new Promise(resolve => {
  require.ensure([`test-${ MODULE }`], require => {
    var ns = require(`test-${ MODULE }`);

    if (ns && ns.__esModule) {
      resolve(ns);
    } else {
      var wrap = Object.create(null);
      wrap.__esModule = true;
      wrap.default = ns;
      Object.freeze(wrap);
      resolve(wrap);
    }
  });
});
