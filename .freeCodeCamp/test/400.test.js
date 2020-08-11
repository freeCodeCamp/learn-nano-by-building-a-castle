const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  it('should use "bash" to run "castle.sh"', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();

    assert(lastCommand[0] === 'bash' && /castle\.sh$/.test(lastCommand[1]) && /\/project$/.test(cwd));
  });
});
