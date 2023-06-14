function solution(numbers, k) {
   let i=0;
   let v = (k-1) * (i+2);
   
   if( v > numbers.length){
       return numbers[v%numbers.length];
   }
 
   return numbers[v];
}