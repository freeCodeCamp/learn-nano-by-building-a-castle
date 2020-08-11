const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should echo the welcome message above your castle', async () => {
    const castleFile = await getFileContents('../castle.sh');

    assert(/^\s*echo\s+"\s*\n\s*Welcome to my castle\s*\n\s*"/.test(castleFile));
  });
});
