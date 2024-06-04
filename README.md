| :exclamation: Deprecation Notice |
|:-|
|We want to express our sincere gratitude for your support and contributions to this open source project. As we are no longer using this technology internally, we have come to the decision to archive this repository. While we won't be providing further updates or support, the existing code and resources will remain accessible for your reference. We encourage anyone interested to fork the repository and continue the project's legacy independently. Thank you for being a part of this journey and for your patience and understanding.|

# babel-plugin-dynamic-import-webpack

Babel plugin to transpile `import()` to `require.ensure`, for Webpack.

Note that Webpack 2 has [gotten `import()`](https://github.com/webpack/webpack/issues/3098) after this code was written.

**NOTE:** Babylon v6.12.0 is required to correctly parse dynamic imports.

## Installation

```sh
$ npm install babel-plugin-dynamic-import-webpack --save-dev
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["dynamic-import-webpack"]
}
```

### Via CLI

```sh
$ babel --plugins dynamic-import-webpack script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["dynamic-import-webpack"]
});
```

### Dynamic imports and webpack

Although the specification for `import()` supports a dynamic importing of modules in the browser runtime, webpack's `require.ensure()` is not dynamic and requires a hardcoded string to work correctly. For more information see [webpack's documentation](https://webpack.js.org/guides/code-splitting/#dynamic-imports) on dynamic imports. 
