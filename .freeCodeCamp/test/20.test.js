/*const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('You', () => {
  let cwd, lastCommand, projectDirectory;
  before(async () => {
    projectDirectory = await getDirectoryContents('..');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should use "touch" to create "castle.sh"', async () => {
    assert(projectDirectory.indexOf('castle.sh') >= 0 && lastCommand[0] === 'touch' && /castle\.sh$/.test(lastCommand[1]) && cwd === '/home/strove/project');
  });
});*/
