const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your castle', () => {
  let castleFile;
  before(async () => {
    castleFile = await getFileContents('../castle.sh');
  });

  it('should have a bottom row that matches the example', async () => {
    assert(/^\s*echo\s+"\s*\n\|_{20}\|\s*\n\s*"\s*$/.test(castleFile));
  });
});
