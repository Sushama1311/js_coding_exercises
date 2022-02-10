const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  var result = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == n) {
      result = nums[i + 1];
      break;
    }
  }
  if (result == 0)
    return null;
  else if (result == null)
    return null;
  else
    return result;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const arr=[];
    for (var i = 0; i < str.length; i++) {
      arr.push(str.charAt(i));
    }
         const counts = {};
       
        counts["0"]=0;
        counts["1"]=0;
        arr.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
        });
      
        return counts;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  n = n + "";
  return Number(n.split("").reverse().join(""));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  var sum = 0;
  for (var i = 0; i < arrs.length; i++) {
    for (var j = 0; j < arrs[i].length; j++) {
      sum += arrs[i][j];
    }
  }
  return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  var result;
  var temp;
  var temp1;
  if (arr.length >= 4) {
    temp = arr[0];
    arr[0] = arr[3];
    arr[3] = temp;
    return arr;
  } else {
    result = arr.reverse();
    return result;
  }

};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  var temp=[];
  temp=Object.values(haystack);
  for(var i=0;i<temp.length;i++){
   // console.log(haystack,searchTerm);
   if( Object.values(haystack)[i].toString().toLowerCase().includes(searchTerm.toLowerCase())){
        return true;
      }
      
    }
    return false;

  };

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  var regex =  /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
   var newString=str.toLowerCase().replace(regex,'') ;
    const arr=newString.split(" ");
            const counts = {};
        arr.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
        });
  return counts;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
