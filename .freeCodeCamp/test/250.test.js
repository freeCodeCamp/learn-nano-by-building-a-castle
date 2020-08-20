const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your castle', () => {
  it('should be drawn correctly', async () => {
    const castleFile = await getFileContents('../castle.sh');

    assert(/^\s*echo\s+"\s*\n \/\\ {16}\/\\\s*\n\/  \\ {14}\/  \\\s*\n\|  \|_{14}\|  \|\s*\n(\| {20}\|\s*\n){4}\|_{20}\|\s*\n\s*"\s*$/.test(castleFile));
  });
});
