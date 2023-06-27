function solution(nums) {
   let result = [];
    let counted =0;
    for(let i=0; i<nums.length-2; i++){
       for(let j=i+1; j<nums.length-1; j++){
           for(let k=j+1; k<nums.length; k++){
               let sum=0;
               sum+= nums[i] + nums[j] + nums[k];
               result.push(sum);           }
       }         
   }
    for(let i=0 ;i<result.length; i++){
        if(isPrime(result[i])) counted++;
   }
    return counted;
}

function isPrime(num){
        for(let j = 2; j <= Math.sqrt(num); j++){
            if(num % j === 0)
                return false;
        }
        return true;
}
