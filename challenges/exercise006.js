/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let total = 0;
  arr.forEach(n => {
    if (n % 3 == 0 || n % 5 == 0) {
      total += n;
    }
  })
  return total;
};

/**
 * This function will receive a string of characters and should return true/false
 *  depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  str = str.trim();
    var lines = str.split('\n');
    if (str[0] == '>') { 
        lines.splice(0, 1);
     
    }
    str = lines.join('').trim();
    if (str.search(/[^gatc\s]/i) != -1) {   
       return false;
    }
    else
    {
         return true;
    }
};

/**
 * This function will receive a valid DNA string (see above) and should return a string 
 * of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G.
 *  So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  function complement(a) {
    return { T: 'A', A: 'T', C: 'G', G: 'C' }[a];
}    

//var sequence = 'TGCA',
    complementSeq = str.split('').map(complement).join('');
  return complementSeq;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not.
 *  A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
    if(n==1) return false;
    if (n > 1) {
      for (let i = 2; i < n; i++) {
        if (n % i == 0){
           return false;
        }
        else{
            return true;
        }
        
      }
    }
  };

  /**
   * This function should receive a number and return an array of n arrays,
   *  each filled with n items. The parameter "fill" should be used as the filler of the arrays.
   *  For example, given parameters 3 and "foo" the resulting matrix should be:
   * [
   *   ["foo", "foo", "foo"],
   *   ["foo", "foo", "foo"],
   *   ["foo", "foo", "foo"]
   * ]
   * @param {Number} n
   * @param {Any} fill
   * @returns {Array}
   */
  const createMatrix = (n, fill) => {
    if (n === undefined) throw new Error("n is required");
    if (fill === undefined) throw new Error("fill is required");

    let arr = [];
    let arrTest = [];
    for (var i = 0; i < n; ++i) {
      for (j = 0; j <= 0; ++j) {
        arrTest.push(fill);
      }
      arr.push(arrTest);
    }
    return arr;
  };

  /**
   * This function takes an array of staff objects in the format:
   * [
   *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
   *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
   *  ...etc
   * ]
   * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. 
   * The function should return true/false depending on whether there are enough staff scheduled for the given day.
   * @param {Array} staff
   * @param {String} day
   * @returns {Boolean}
   */
  const areWeCovered = (staff, day) => {
    if (staff === undefined) throw new Error("staff is required");
    if (day === undefined) throw new Error("day is required");
    if (staff.length == 0) {
      return false;
    }
    else {
      for (let i = 0; i < staff.length; i++) {
        if (staff[i].rota.includes(day)) {
          return true;
        }
      }
      return false;
    }


  };

  module.exports = {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  };
