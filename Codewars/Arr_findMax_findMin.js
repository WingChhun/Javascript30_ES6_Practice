// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


function highAndLow(numbers) {
    /*
  Strategy
   - Recreate array of space-separated strings, into an array of integers
   - Either use Math.max, Math.min in combination with Spread operator for result
   - Or use Array.Sort method and return first index and last index values
  */
    numbers = numbers.split(" "); //space split numbers

    //console.log("numbers",numbers);
    const numberArr = numbers.map((value) => {
        return parseInt(value);
    });
    //Show number array after
    console.log("Number arr", numberArr);
    //Choice, either sort the numbers, using Array.Sort, or use Math.min and Math.max functions
    let max = Math.max(...numberArr); //use spread operator to spread the contents of array
    let min = Math.min(...numberArr); //use spread to spread contents of array
    console.log("Max", max);
    console.log("Min", min);

    //Array.sort method
    const Sorted = numberArr.sort((a, b) => {
        return (a < b ? 1 : -1);
    });
    let sortMax = Sorted[0];
    let sortMin = Sorted[Sorted.length - 1];
    console.log("Max, Sorted method =  ", sortMax);
    console.log("min, Sorted method = ", sortMin);

    //Final to return
    const contents = `${max} ${min}`;
    return contents;

}

