function solution(sizes) {
    var result = [];
    var resulttwo= [];
    
    sizes.map((item) => item.sort((a,b) => b-a));
    for(let i=0; i<sizes.length; i++){
        result.push(sizes[i][0]);
        resulttwo.push(sizes[i][1]);
    }
    return Math.max(...result) * Math.max(...resulttwo);
}
