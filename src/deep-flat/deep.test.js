/** ..........
 * Converts a nested array into a single array with no nesting.
 *
 * It returns a new array and there are no side-effects.
 *
 * @param {Array} [array=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * deepFlat([1, [2, [3, [4]], 5]]);
 * // -> [1, 2, 3, 4, 5]
 *
 * @example
 *
 * deepFlat(['a', ['b', [['c'], ['d']], 'e']]);
 * // -> ['a', 'b', 'c', 'd', 'e']
 */

const mySolution = (array1) => {
  let array2 = [];
  array2 = array1.join('');
  return array2;
};

for (const solution of [mySolution]) {
    describe(solution.name + ': _', () => {
      describe('_', () => {
        it('_', () => {});
      });
      it('reverse strings of array', () => {
        expect(solution(['naza', 'is'])).toEqual('nazais');
      });
      it('reverse strings of array', () => {
        expect(solution(['123', '456'])).toEqual('123456');
      });
      it('reverse strings of array', () => {
        expect(solution(['nursultan', 'is', 'myson'])).toEqual('nursultanismyson');
      });
    });
  }