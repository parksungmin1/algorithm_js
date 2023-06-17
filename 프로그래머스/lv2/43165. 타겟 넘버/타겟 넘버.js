function solution(numbers, target) {
    var length = numbers.length;
    var cnt = 0;
    
    function dfs(currentNumber , index){
        if(index === length){
            if(currentNumber === target)
              {
                  cnt++;
              }  
              return;
        }
               
        dfs(currentNumber+numbers[index],index+1);
        dfs(currentNumber-numbers[index],index+1);
    }
    dfs(0,0);
    return cnt;
}