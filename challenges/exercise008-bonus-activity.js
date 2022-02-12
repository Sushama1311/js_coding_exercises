// Spread Syntax Bonus activity

function printColours(colours) {
    if (!colours) throw new Error("colour is required");
    return colours;
}

function shoppingList(list, newItem) {
    if (!list) throw new Error("list is required");
    if (!newItem) throw new Error("newItem is required");
    for (let i = 0; i < newItem.length; i++) {
        list.push(newItem[i]);
    }
    return list;
}

function highestNumber(numbers) {
    if (!numbers) throw new Error("numbers are required");
    return (Math.max(...numbers));
}

function splitThatString(string) {
    if (!string) throw new Error("string is required");
    const arr = [];
    for (let i = 0; i < string.length; i++) {
        arr[i] = string.charAt(i);
    }
    return arr;
}


// Optional Chaining Bonus activity!

function addressLookUp(user) {
    if (!user) throw new Error("user is required");
    if (user.address)
        return user.address.postcode;
}


module.exports = {
    printColours,
    shoppingList,
    highestNumber,
    splitThatString,
    addressLookUp
};