const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your castle', () => {
  it('should be drawn correctly', async () => {
    const castleFile = await getFileContents('../castle.sh');

    assert(/echo\s+"\s*\n \/\\ {16}\/\\\s+\n\/  \\ {14}\/  \\\s+\n\|  \|_{14}\|  \|\s*\n\| {20}\|\s*\n\|   \[\] {4}\[\] {4}\[\]   \|\s*\n\| {20}\|\s*\n\| {9}__ {9}\|\s*\n\|_{8}\|  \|_{8}\|\s*\n"/.test(castleFile));
  });
});
