const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should exit Nano after opening "castle.sh"', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'nano' && /castle\.sh$/.test(lastCommand[1]));
  });
});
