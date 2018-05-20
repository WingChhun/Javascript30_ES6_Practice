// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


//solution
function disemvowel(str) {

    /*
     STRATEGY
      - make string into an array using array.split
      - use Array.filter fuynction to filter the vowels out,
      - .join('') into a single string to return
    */
    let newArr = str.split(''); //make array from string
    console.log('newArr', newArr);

    newArr = newArr.filter((value) => {
        let temp = value.toLowerCase();
        return temp != 'a' && temp != 'e' && temp != 'i' &&
            temp != 'o' && temp != 'u';

    });
    str = newArr.join('');
    console.log("Final String ", str);
    return str;
}