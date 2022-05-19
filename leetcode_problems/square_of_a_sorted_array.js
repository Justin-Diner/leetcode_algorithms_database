/*
 * @param {number[]} nums
 * @return {number[]}
 */
//Example = [-4, -1, 0, 3, 10]
//Output = 

//Compare nums[0] to nums[nums.length - 1]. Add the largest absolute number to your squareArray. Then move a pointer if that number's square is added to squareArray. Once pointer variable is 0, you have gone through the entire nums array and you have your answer in squareArray. 

//This operation takes O(n) time. The brute force is to square each number and then sort. This would take O(n log n) time. 

 var sortedSquares = function(nums) {
    const squareArray = new Array(nums.length) 
    
    let left = 0;
    let right = nums.length - 1; 
    
    let pointer = nums.length;
    
    while(pointer){
        pointer--; 
        if(Math.abs(nums[left]) < Math.abs(nums[right])) { 
            squareArray[pointer] = nums[right]**2;		  
            right--;
        }
        else{
            squareArray[pointer] = nums[left]**2; /
            left++;
        } 
    }
    return squareArray
};
