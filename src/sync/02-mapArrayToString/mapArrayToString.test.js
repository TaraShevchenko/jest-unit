const mapArrayToString = require('./mapArrayToString');

describe('MapArrayToString', () => {
    test('right value', () => {
        expect(mapArrayToString([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    test('with all types value', () => {
        expect(mapArrayToString([1, 2, 3, null, undefined, false, 'test', () => {}, {
            hello: 'test',
            number: 1
        }, [1, null, undefined, false, 'test', () => {}, {hello: 'test', number: 1}]])).toEqual(['1', '2', '3']);
    })
    test('denial', () => {
        expect(mapArrayToString([1, 2, 3])).not.toEqual([1, 2, 3]);
    })
})

