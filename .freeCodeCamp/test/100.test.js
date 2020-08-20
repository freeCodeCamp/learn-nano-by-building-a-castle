const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your castle', () => {
  it('should have a bottom row that matches the example', async () => {
    const castleFile = await getFileContents('../castle.sh');

    assert(/^\s*echo\s+"\s*\n_{20}\s*\n\s*"\s*$/.test(castleFile));
  });
});
