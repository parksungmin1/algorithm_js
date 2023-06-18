function solution(n, times) {
    times.sort((a,b) => 
               a-b);
    let res = -1;
    let rt = times[times.length-1] * n;
    let lt = 0;
    
    while (lt<=rt){
        let mid = Math.floor((rt+lt) / 2);
        let max = 0;
        
        for (let e of times){
            max += Math.floor(mid / e);
        }
        
        if(max >= n){
            res = mid;
            rt = mid - 1;
        }else{
            lt = mid + 1;
        }
    }
    return res;
}