const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your file', () => {
  it('should be empty"', async () => {
    const castleFile = await getFileContents('../castle.sh');

    assert(!/\S/.test(castleFile));
  });
});
