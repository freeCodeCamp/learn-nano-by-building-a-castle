const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your castle', () => {
  it('should be drawn correctly', async () => {
    const castleFile = await getFileContents('../castle.sh');

    assert(/^\s*echo\s+"\s*\n\| {20}\|\s*\n\|_{20}\|\s*\n\s*"\s*$/.test(castleFile));
  });
});
