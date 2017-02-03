import { expect } from 'chai';
import { join } from 'path';
import { readdirSync, statSync, readFileSync } from 'fs';

import testPlugin from './testPlugin';

const FIXTURE_PATH = join(__dirname, 'fixtures');

const testFolders = readdirSync(FIXTURE_PATH)
  .filter(file => (
    statSync(join(FIXTURE_PATH, file)).isDirectory()
  ))
  .filter(dir => dir !== 'plain-require');

function getFiles(folderName) {
  const actual = readFileSync(join(FIXTURE_PATH, folderName, 'actual.js'), 'utf8');
  const expected = readFileSync(join(FIXTURE_PATH, folderName, 'expected.js'), 'utf8');

  return { folderName, actual, expected };
}

describe('babel-plugin-dynamic-import-webpack', () => {
  testFolders.map(getFiles).forEach(({ folderName, actual, expected }) => {
    it(`works with ${folderName}`, () => {
      const result = testPlugin(actual);
      expect(result.trim()).to.equal(expected.trim());
    });
  });

  it('works with plain-require', () => {
    const { actual, expected } = getFiles('plain-require');

    const result = testPlugin(actual, { plainRequire: true });
    expect(result.trim()).to.equal(expected.trim());
  });
});
