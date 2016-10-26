# babel-plugin-dynamic-import-webpack

Babel plugin to transpile `import()` to `require.ensure`, for Webpack.

**NOTE:** Babylon v6.12.0 is required to correct parse dynamic imports.

## Installation

```sh
$ npm install babel-plugin-dynamic-import-webpack --save-dev
```

You'll also need to enable babylon to parse the dynamic import syntax by installing `babel-plugin-syntax-dynamic-import` plugin.

```sh
$ npm install babel-plugin-syntax-dynamic-import --save-dev
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["syntax-dynamic-import", "dynamic-import-webpack"]
}
```

You can also use `parseOpts` and not install the syntax-plugin:

```json
{
  "parserOpts": {
    "plugins": ["dynamicImport"]
  },
  "plugins": ["dynamic-import-webpack"]
}
```

### Via CLI

```sh
$ babel --plugins syntax-dynamic-import dynamic-import-webpack script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["syntax-dynamic-import", "dynamic-import-webpack"]
});
```
