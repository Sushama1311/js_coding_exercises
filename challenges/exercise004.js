function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  var temp = [];
  var index=0;
  for (i = 0; i < nums.length; ++i) {
    if (nums[i] < 1) {
      temp[index] = nums[i];
      index+=1;
    }
  }
  if (temp.length == 0 || temp == null)
    return [];
  else
    return temp;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  var temp = [];
  var index=0;
  for(var i=0;i<names.length;i++){
    if(names[i].substring(0,1)==char){
      temp[index] = names[i];
      index+=1;
    }
  }
  return temp;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  var arrt=[];
  var index=0;
  for(var i=0;i<words.length;i++){
    if(words[i].indexOf(' ')>0 && words[i].substring(0,2)=="to"){
          arrt[index] = words[i];
          index+=1;
           // arrt.push(words[i]);
        }
  }
  if (arrt.length == 0 || arrt == null)
    return [];
  else
    return arrt;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  var temp = [];
  var index=0;
  for(var i=0;i<nums.length;i++){
    if(Number.isInteger(nums[i])){
      temp[index] = nums[i];
      index+=1;
    }
  }
  if (temp.length == 0 || temp == null)
    return [];
  else
    return temp;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  var temp = [];
  var index=0;
  for(var i=0;i<users.length;i++){
    temp[index] = users[i].data.city.displayName;
      index+=1;
  }
  return temp;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  var temp = [];
  var index=0;
  var result;
  for(var i=0;i<nums.length;i++){
    temp[index] =  Math.sqrt(nums[i]).toFixed(2);
    result =  Math.sqrt(nums[i]).toFixed(2);
    if(result% 1==0){
     temp[index]  = Number(Math.sqrt(nums[i]).toFixed());
     
    }
    else{
     temp[index] = Number(Math.sqrt(nums[i]).toFixed(2));
    }
    
       index+=1;
  
  }
  return temp;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  var temp = [];
  var index=0;
  for(var i=0;i<sentences.length;i++){
    if( sentences[i].toLowerCase().includes(str.toLowerCase())){
      temp[index] = sentences[i];
      index+=1;
    }
     
  }
  if(sentences.length>0)
     return temp;
  else
    return [];   
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  var maxRow = triangles.map(function(row){ return Math.max.apply(Math, row); });
  return maxRow;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
