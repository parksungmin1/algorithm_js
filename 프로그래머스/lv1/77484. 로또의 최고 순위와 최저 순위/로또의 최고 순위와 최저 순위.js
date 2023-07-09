function solution(lottos, win_nums) {
    let mincounting = lottos.filter((element) => win_nums.includes(element)).length;
  
    let counting = lottos.filter((element) => element === 0).length;
    let finalcount = mincounting + counting;
    let best; let worst;
    let arr = [];
    
    if(finalcount === 2) best = 5; 
    else if(finalcount === 3) best = 4;
    else if(finalcount === 4) best = 3;
    else if(finalcount === 5) best = 2;
    else if(finalcount === 6) best = 1;
    else best = 6;
    
    if(mincounting === 2) worst = 5; 
    else if(mincounting === 3) worst = 4;
    else if(mincounting === 4) worst = 3;
    else if(mincounting === 5) worst = 2;
    else if(mincounting === 6) worst = 1;
    else worst = 6;
    
    arr.push(best,worst);
    return arr;
}