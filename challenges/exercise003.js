function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  retArray = [];
  for (var i = 0; i < nums.length; i++) {
    var sqr;
    sqr = Math.pow(nums[i], 2);
    retArray.push(sqr);
  }
  return retArray;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  var ans = " ";
  for (i = 0; i < words.length; i++) {
    if (i == 0) {
      ans += words[i].toLowerCase();
    }
    else {
      ans += words[i].substring(0, 1).toUpperCase() + words[i].substring(1, words[i].length);
    }

  }
return ans.trim();
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var count = 0;
  for (var i = 0; i < people.length; i++) {
    count += people[i].subjects.length;
  }
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (var i = 0; i < menu.length; ++i) {

    if (menu[i].ingredients.includes(ingredient)) {
      return true;
    }

    else {
      return false;
    }

  }
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  var duplicate;
  var dupArr = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j <= arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        //  console.log("Array i"+arr1[i]);
        dupArr[i].splice(i, arr1[i]);
      }
    }
  }
  // console.log( dupArr[i]);
  return dupArr[i].sort();

}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
