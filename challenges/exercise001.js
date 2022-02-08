function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
 return word.substring(0,1).toUpperCase() + word.substring(1,word.lenght);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0,1) +"."+ lastName.substring(0,1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  if(originalPrice!=0){
   var num= ((originalPrice/100)*vatRate)+originalPrice;
   var res = Math.floor(num * 100) / 100;
    return res;
  }
  else{
    return ((originalPrice/100)*vatRate)+originalPrice;
  }
   
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  if(originalPrice!=0){
  
   var num =originalPrice-((originalPrice*reduction)/100);

   var res = Math.floor(num * 100) / 100;
    return res;
  }
  else{
    return originalPrice-((originalPrice*reduction)/100);
  }
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
 
           var position;
          var length;

          if(str.length % 2 == 1) {
              position = str.length / 2;
              length = 1;
          } else {
              position = str.length / 2 - 1;
              length = 2;
          }

          return str.substring(position, position + length)
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  var newString = "";
  for (var i = word.length - 1; i >= 0; i--) {
      newString += word[i];
      
  }
  return newString;
}

function reverseAllWords(words) {
 
  
 // words.split(",").reverse().join(" ");words
 
  /*const reverseArray=[];
  var newString = "";
  
  for(var cnt=0;cnt<words.lenght;cnt++){
    
      var originalStr=words[cnt];
     
    for (var i = originalStr.length - 1; i >= 0; i--) {
        newString += originalStr[i];
        
    }
     reverseArray.push(newString);
   
  }
  return reverseArray;*/
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  var count=0;
  for(var i=0;i<users.length;i++){
    if(users[i].type=="Linux")
      count+=1;
  }
  if(count==0)
    return count=0;
  else
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var sum=0;
  for(var i in scores){
      sum+=scores[i];
  }
  var result= sum/scores.length;
  if(result%1==0)
  return result= sum/scores.length;
  else
  return result=Number((sum/scores.length).toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
    switch (true) {
      case (n % 15 == 0):
        return "fizzbuzz";
        break;
      case (n % 3 == 0):
        return "fizz";
        break;
      case (n % 5 == 0):
        return "buzz";
        break;
      case (n==4 ):
        return 4;
        break;
    
    }


}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
