const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your file', () => {
  let castleFile;
  before(async () => {
    castleFile = await getFileContents('../castle.sh');
  });

  it('should have the correct command and spacing', async () => {
    assert(/^\s*echo\s+"\s*\n\s*\n\s*"\s*$/.test(castleFile));
  });
});
