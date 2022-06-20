const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[^a-z]/g, "");
    let reverseString = newString
            .split("")
            .reverse()
            .join("");
    return (newString === reverseString ? true : false);
    
};

// Do not edit below this line
module.exports = palindromes;
