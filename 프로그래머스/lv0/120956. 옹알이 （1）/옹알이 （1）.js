function solution(babbling) {
    let count = 0;
    
    let result = babbling.map((item) => item.replace(/(aya|ye|woo|ma)/gi, ''));
    
    let arr = result.filter((e) => e = !e).length;
    return arr;
    
}
 