// Green Phase

/*

function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}; 

*/



// Refactor Phase

function countVowels(str) {
    if (typeof str !== 'string') return 0;
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}


module.exports = {
    countVowels,
}