function solution(lottos, win_nums) {
    let count = 0;
     for(let i=0; i<lottos.length; i++){
        for(let j=0; j<win_nums.length; j++){
            if(lottos[i] === win_nums[j])
                count++;
            }
    }
  
    let counting = lottos.filter((element) => element === 0).length;
    let finalcount = count + counting;
    let best; let worst;
    let arr = [];
    
    if(finalcount === 2) best = 5; 
    else if(finalcount === 3) best = 4;
    else if(finalcount === 4) best = 3;
    else if(finalcount === 5) best = 2;
    else if(finalcount === 6) best = 1;
    else best = 6;
    
    if(count === 2) worst = 5; 
    else if(count === 3) worst = 4;
    else if(count === 4) worst = 3;
    else if(count === 5) worst = 2;
    else if(count === 6) worst = 1;
    else worst = 6;
    
    arr.push(best,worst);
    return arr;
}