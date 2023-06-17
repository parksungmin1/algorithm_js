function solution(nums) {
    const set = [...new Set(nums)];

    if(set.length > (nums.length)/2){
        return (nums.length)/2;
    }
    else if(set.length <= (nums.length)/2){
        return set.length;
    }
}