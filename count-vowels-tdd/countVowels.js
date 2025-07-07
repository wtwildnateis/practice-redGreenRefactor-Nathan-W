// Green Phase

/*
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

*/



// Refactor Phase

function countVowels(str) {
    if (typeof str !== 'string') return 0;
    return (str.match(/[aeiou]/gi) || []).length;
};

module.exports = {
    countVowels,
}