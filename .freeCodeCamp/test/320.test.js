const assert = require('assert');
const { getNextCommand } = require('./utils');

describe('You', () => {
  it('should open "castle.sh" with Nano', async () => {
		const nextCommand = await getNextCommand();

    assert(nextCommand[0] === 'nano' && /castle\.sh$/.test(nextCommand[1]));
  });
});
