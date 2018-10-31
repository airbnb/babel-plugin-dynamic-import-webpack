new Promise(resolve => {
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
}).then(() => new Promise(resolve => {
  require.ensure(['test-module-2'], require => {
    var ns = require('test-module-2');

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
}));

Promise.all([new Promise(resolve => {
  require.ensure(['test-1'], require => {
    var ns = require('test-1');

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
}), new Promise(resolve => {
  require.ensure(['test-2'], require => {
    var ns = require('test-2');

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
}), new Promise(resolve => {
  require.ensure(['test-3'], require => {
    var ns = require('test-3');

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
})]).then(() => {});
