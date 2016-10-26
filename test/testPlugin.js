import { transform } from 'babel-core';

export default function testPlugin(code) {
  const result = transform(code, {
    plugins: ['syntax-dynamic-import', './src/index.js'],
  });

  return result.code;
}
