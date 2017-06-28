import { transform } from 'babel-core';

export function testPluginWithoutHelpers(code) {
  const result = transform(code, {
    plugins: [
      './src/index.js',
      'external-helpers',
    ],
  });

  return result.code;
}

export function testPluginWithHelpers(code) {
  const result = transform(code, {
    plugins: ['./src/index.js'],
  });

  return result.code;
}
