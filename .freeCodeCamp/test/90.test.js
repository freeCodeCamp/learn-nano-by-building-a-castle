const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your file', () => {
  it('should have the correct command and spacing', async () => {
    const castleFile = await getFileContents('../castle.sh');

    assert(/^\s*echo\s+"\s*\n\s*\n\s*"\s*$/.test(castleFile));
  });
});
