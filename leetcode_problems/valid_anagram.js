var isAnagram = function(s, t) {
    let tTable = {};
    if (s.length != t.length) {
        return false;
    }
    for (let num of t) {
        if (!tTable[num]) {
            tTable[num] = 1;
        } else {
            tTable[num]++;
        }
    }
    
    for (let value of s) {
        if (tTable[value]) {
            tTable[value]--;
        } else {
            return false;
        }
    }
    return true;
};