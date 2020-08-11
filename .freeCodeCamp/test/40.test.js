const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your file', () => {
  it('should contain "echo hello nano"', async () => {
    const castleFile = await getFileContents('../castle.sh');

    assert(/echo hello nano/.test(castleFile));
  });
});
