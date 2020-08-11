const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('You', () => {
  it('should use "touch" to create "castle.sh"', async () => {
    const projectDirectory = await getDirectoryContents('..');
    const lastCommand = await getLastCommand();

    assert(projectDirectory.indexOf('castle.sh') >= 0 && lastCommand[0] === 'touch' && /castle\.sh$/.test(lastCommand[1]));
  });
});
