function solution(babbling) {
    babbling = babbling.map(item => item.replaceAll((/ayaaya|yeye|woowoo|mama/gi), ' '));
    babbling= babbling.map(item => item.replaceAll((/aya|ye|woo|ma/gi), ''));
  
    console.log(babbling);
    let count = 0;
    for(let i=0; i<babbling.length; i++){
            if(babbling[i] === ''){ count ++;}
        }
    
    return count;    
}
      