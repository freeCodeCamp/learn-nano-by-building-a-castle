const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should use "touch" to create "castle.sh"', async () => {
    assert(lastCommand[0] === 'ls' && cwd === '/home/strove/project');
  });
});
