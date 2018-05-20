// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.


function addBinary(a, b) {

    //create empty string, and get sum
        let binary = ""; //string to be made
        let sum = a + b; //get sum
        //while there is a remainder, append 1 to the binary string
        while (sum % 2 != 0) {
    sum = sum/2;
    binary +="1";
        }
        //output
        console.log(sum);
        console.log(binary);
        
    }