//1) Sum Zero
const addToZero = (arr) => {
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr.length; j++){
            if (i !== j){
                if (arr[i] + arr[j] === 0){
                    return true
                }
            }
        }
    }
    return false
}

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

//time: O(1)

//2) Unique Characters
const hasUniqueChars = (str) => {
    for(let i=0; i<str.length; i++){
        for(let j=i+1; j<str.length; j++){
            if (str[i]===str[j]){
                return false
            }
        }
    }
    return true
}

hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False

//time: O(n)

//3) Pangam Sentence: COME BACK TO THIS ONE
// const isPangram = str => {
//     str = str.toLowerCase().replace
// }

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// -> False

//4) 
const findLongestWord = (arr) => {
    let wordLength = 0
    arr.forEach(word => {
        if (word.length > wordLength){
            wordLength = word.length
        }
    })
    return wordLength
}

findLongestWord(["hi", "hello"]);
// -> 5

//time: O(n)