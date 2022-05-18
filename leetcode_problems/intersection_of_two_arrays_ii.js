// Quickest Solution with sorting. 
var intersect = function(nums1, nums2) {
    let sortnums1 = nums1.sort(function(a,b) {
        return a-b;
    });
    let sortnums2 = nums2.sort(function(a,b) {
        return a-b;
    });
    let result = [];
    let i = 0;
    let j = 0;
    
    while (i < sortnums1.length && j < sortnums2.length) {
        if (sortnums1[i] < sortnums2[j]) {
            i++;
        }
        else if (sortnums1[i] > sortnums2[j]) {
            j++
        }
        else {
            result.push(sortnums1[i]);
            i++;
            j++;
        }
    }
    
    return result;
};

// Slower solution with Hash Map. 
var intersect = function(nums1, nums2) {
    let numsMap = {};
    let result = [];
    
    //make a hashmap of the first array of nums
    for (let i of nums1) {
        if (!numsMap[i]) {
            numsMap[i] = 1;
        } else {
            numsMap[i]++
        }
    }
    console.log(numsMap)
    //loop through the second array of nums and see if the hash map has a count of the value. 
    for (let i of nums2) {
        if (numsMap[i] > 0) {
            result.push(i)
            numsMap[i]--;
        }
    }
return result
}