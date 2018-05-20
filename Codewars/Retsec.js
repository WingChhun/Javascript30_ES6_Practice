// Do you speak retsec?
// You and your friends want to play undercover agents. In order to exchange your secret messages, you've come up with the following system: you take the word, cut it in half, and place the first half behind the latter. If the word has an uneven number of characters, you leave the middle at its previous place:

// retsec examples

// That way, you'll be able to exchange your messages in private.

// Task
// You're given a single word. Your task is to swap the halves. If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.

// Examples
// reverseByCenter("secret")  == "retsec" // no center character
// reverseByCenter("agent")   == "nteag"  // center character is "e"



//Solution
function reverseByCenter(s) {
    // ...
    let finalStr = "";
    s = s.split('');

    console.log("initial", s);

    console.log("size", s.length);

    // if no center (length is even)
    if (s.length % 2 == 0) {
        let firstHalf = s.slice(0, s.length / 2);
        let secondHalf = s.slice(s.length / 2, s.length);
        console.log("First half", firstHalf);
        console.log("Second Half", secondHalf);
        finalStr = [...secondHalf,
            ...firstHalf
        ];
        finalStr = finalStr.join(''); //form into a single string
    }
    //else if center (length is odd)
    else {
        let center = Math.round(s.length / 2); //grab center index
        let firstHalf = s.slice(0, center - 1);
        let secondHalf = s.slice(center, s.length);
        console.log("center", center);
        console.log("First half", firstHalf);
        console.log("Second half", secondHalf);
        finalStr = [...secondHalf,
            s[center - 1],
            ...firstHalf
        ].join('');;
    }
    //return the final str
    return finalStr;
}