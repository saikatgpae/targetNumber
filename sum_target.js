var twoSum = function(nums, target) {
    var arr = []
    for (let i=0; i<nums.length; i++){
      for (let j=0; j<nums.length; j++){
          if(nums[i] + nums[j] === target && i !== j){
            //   console.log(i,j)
            if(!arr.includes(i)){
                arr.push(i);
            }
            if(!arr.includes(j)){
                arr.push(j);
            }
          }
      }
    }
    // return arr;
    console.log(arr);
};

const nums = [2,7,11,15];
const target = 9;

// const nums = [3,2,4];
// const target = 6;

// const nums = [3,3];
// const target = 6;

twoSum(nums, target)