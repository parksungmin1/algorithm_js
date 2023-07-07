function solution(a, b) {
   let day = [31,29,31,30,31,30,31,31,30,31,30,31,30,31];
   let sum = 0;
    
   for(let i=0; i<(a-1); i++){
       sum += day[i];
   }
   sum += b;
    
   if((sum%7) === 0 ) return "THU";
   else if((sum%7) === 1 ) return "FRI";
   else if((sum%7) === 2 ) return "SAT";
   else if((sum%7) === 3 ) return "SUN";
   else if((sum%7) === 4 ) return "MON";
   else if((sum%7) === 5 ) return "TUE";
   else if((sum%7) === 6 ) return "WED";

}