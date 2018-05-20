// Your task is to make two functions, max and min (maximum and minimum in PHP) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

// #Examples

// max([4,6,2,1,9,63,-134,566]) returns 566
// min([-52, 56, 30, 29, -54, 0, -110]) returns -110
// max([5]) returns 5
// min([42, 54, 65, 87, 0]) returns 0

//SOLUTION

//strategy, use Math.max and Math.min with spreqad operator
// optional, use array.sort method and return first index or last index.

//strategy, use Math.max and Math.min with spreqad operator
// optional, use array.sort method and return first index or last index.

var min = function (list) {

    return Math.min(...list);
}

var max = function (list) {

    return Math.max(...list);
}

/*
SECOND SOLUTION
*/

let min2 = (list) =>

    {
        //sort list from least to greatest, return first index
        list = list.sort((a, b) => {
            return a > b ? 1 : -1;
        });
        return list[0];
    }

let max2 = (list) => {
    //sort list from greatest to least, return first index
    list = list.sort((a, b) => {
        return a < b ? 1 : -1;
    });
    return list[0];
}