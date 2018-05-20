// //
// Format a string of names like 'Bart, Lisa & Maggie'.


function list(names) {
    /*
    STRATEGY
     - Create new arr, get contents of all using Object.amp
    */
    if (names.length == 0) {
        return '';
    }
    let finalStr = "";
    console.log("starter", names);
    //  console.log(names[0].name);
    const namesArr = names.map((value) => {
        return value.name;

    });
    console.log("Names arr", namesArr);

    if (namesArr.length > 2) {
        const temp = namesArr.slice(0, namesArr.length - 2);
        const tempArr = [...temp];
        console.log("temp", tempArr);
        //use array.reduce method to build a final string
        let firstHalf = tempArr.reduce((accumulator, value, index) => {
            if (index = 0) {
                return accumulator = `${value}, `;
            }
            return accumulator += `${value}, `;
        }, finalStr);

        console.log("First half ", firstHalf);
        //Now create the second half
        let secondHalf = `${namesArr[namesArr.length-2]} & ${namesArr[namesArr.length-1]}`;
        finalStr = firstHalf + secondHalf;
    } else if (namesArr.length == 2) {
        finalStr = `${namesArr[0]} & ${namesArr[1]}`;
    } else if (namesArr.length = 1) {
        finalStr = namesArr[0];
    } else {
        return '';
    }
    //return string
    return finalStr;
}