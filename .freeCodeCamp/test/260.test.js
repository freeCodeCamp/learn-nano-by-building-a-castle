const assert = require('assert');
const { getNextCommand } = require('./utils');

describe('You', () => {
  it('should exit Nano after opening "castle.sh"', async () => {
		const nextCommand = await getNextCommand(4);

    assert(nextCommand[0] === 'nano' && /castle\.sh$/.test(nextCommand[1]));
  });
});
