function solution(babbling) {
    let count = 0;
    
    let result = babbling.map((item) => item.replace(/(aya|ye|woo|ma)/gi, ''));
    
    for(let i=0; i<result.length; i++){
        if(result[i] === '')
            count++;
    }
    return count;
}
 