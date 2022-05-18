var containsDuplicate = function(nums) {
    let countobj = {};
    for (let num of nums) {
        if (countobj[num]) {
            countobj[num] += 1;
        } else {
            countobj[num] = 1
        }
    }
    for (let values in countobj) {
        if (countobj[values] != 1) {
            return true
        } 
    }
    return false;
};