import { transform } from 'babel-core';

export default function testPlugin(code, options) {
  const result = transform(code, {
    plugins: [['./src/index.js', options]],
  });

  return result.code;
}
