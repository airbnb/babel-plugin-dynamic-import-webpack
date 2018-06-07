import test from 'tape';
import { join } from 'path';
import { readdirSync, statSync, readFileSync } from 'fs';

import testPlugin from './testPlugin';

const FIXTURE_PATH = join(__dirname, 'fixtures');

const testFolders = readdirSync(FIXTURE_PATH).filter(file => (
  statSync(join(FIXTURE_PATH, file)).isDirectory()
));

test('babel-plugin-dynamic-import-webpack', (t) => {
  testFolders.forEach((folderName) => {
    const actual = readFileSync(join(FIXTURE_PATH, folderName, 'actual.js'), 'utf8');
    const expected = readFileSync(join(FIXTURE_PATH, folderName, 'expected.js'), 'utf8');
    t.test(`works with ${folderName}`, (st) => {
      const result = testPlugin(actual);
      st.equal(result.trim(), expected.trim());
      st.end();
    });
  });

  t.end();
});
