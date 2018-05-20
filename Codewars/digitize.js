// Convert number to reversed array of digits
// Given a random number:

// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]


//SOLUTION

function digitize(n) {
    //code here
    //convert to string
    n = n.toString();
    //split into an array of characters
    let newArr = n.split('').reverse();
    //newArr return array of integers
    return newArr.map((a) => {
        return parseInt(a);
    });


    //check test
    console.log("check newArr integers", newArr);
}