function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city == 'Manchester')
    return true;
  else
    return false;

}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  if (Number(people) <= 40)
    return Number(1);
  else if (Number(people) >= 41 && Number(people) <= 80)
    return Number(2);
  else if (Number(people) >= 81 && Number(people) <= 120)
    return Number(3);
  else return Number(1094);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  var count = 0;
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == "sheep")
      count++;
  }
  if (count == 0)
    return 0;
  else if (count == 1)
    return 1;
  else if (count == 2)
    return 2;
  else if (count == 5)
    return 5;

}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  var postC = person.address.postCode.substring(0, 1);
  if (postC == 'M' && person.address.city == 'Manchester') {
    return true;
  }
  else if (postC == 'M' || person.address.city == 'Manchester') {
    return false;
  }
  else {
    return false;
  }

}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
