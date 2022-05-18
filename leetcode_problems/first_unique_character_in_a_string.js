var firstUniqChar = function(s) {
    let sCount = {};
    
    for (let i = 0; i < s.length; i++) {
        if (sCount[s[i]]) {
            sCount[s[i]]++;
        } else {
            sCount[s[i]] = 1;
        }
    }
    console.log(sCount);
    for (let char of s) {
        if (sCount[char] === 1) {
            return s.indexOf(char);
        } 
    }
    return -1;
}; 