function solution(N, stages) {
    let total = stages.length;
    let array = [];
    
    for(let i=1; i<=N; i++){
        let fail= stages.filter((s) => s === i).length;
        array.push([i, fail/total]);
        total -= fail;
    }
    
    const answer = array.sort((a,b) => b[1] - a[1]);
    return answer.map(v=> v[0]);
}