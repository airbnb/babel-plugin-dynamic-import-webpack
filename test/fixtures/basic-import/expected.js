const testModule = new Promise(resolve => {
  require.ensure(['test-module'], require => {
    var ns = require('test-module');

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
