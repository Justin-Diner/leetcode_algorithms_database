var canConstruct = function(ransomNote, magazine) {
    let magazineCount = {};
    
    for (let num of magazine) {
        if (!magazineCount[num]) {
            magazineCount[num] = 1;
        } else {
            magazineCount[num]++;
        }
    }

    for (let note of ransomNote) {
        if (magazineCount[note] >= 1) {
            magazineCount[note]--;
        } else {
            return false;
        }
    }
    return true;
};