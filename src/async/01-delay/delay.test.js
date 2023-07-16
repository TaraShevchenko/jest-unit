const delay = require("./delay");

describe('Delay', () => {
    test('right value', async () => {
        const result = await delay(() => 5 + 5, 1000);
        expect(result).toBe(10);
    })
})
