const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your file', () => {
  let castleFile;
  before(async () => {
    castleFile = await getFileContents('../castle.sh');
  });

  it('should contain "echo hello nano"', async () => {
    assert(/echo hello nano/.test(castleFile));
  });
});
