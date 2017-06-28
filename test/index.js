import { expect } from 'chai';
import { join } from 'path';
import { readdirSync, statSync, readFileSync } from 'fs';

import { testPluginWithHelpers, testPluginWithoutHelpers } from './testPlugin';

const FIXTURE_PATH = join(__dirname, 'fixtures');

const testFolders = readdirSync(FIXTURE_PATH).filter(file => (
  statSync(join(FIXTURE_PATH, file)).isDirectory()
));

describe('babel-plugin-dynamic-import-webpack', () => {
  testFolders.forEach((folderName) => {
    const actual = readFileSync(join(FIXTURE_PATH, folderName, 'actual.js'), 'utf8');
    const expectedInternalHelpers = readFileSync(join(FIXTURE_PATH, folderName, 'expected-internal-helpers.js'), 'utf8');
    const expectedExternalHelpers = readFileSync(join(FIXTURE_PATH, folderName, 'expected-external-helpers.js'), 'utf8');
    it(`works with ${folderName}`, () => {
      const resultInternalHelpers = testPluginWithHelpers(actual);
      const resultExternalHelpers = testPluginWithoutHelpers(actual);
      expect(resultInternalHelpers.trim()).to.equal(expectedInternalHelpers.trim());
      expect(resultExternalHelpers.trim()).to.equal(expectedExternalHelpers.trim());
    });
  });
});
