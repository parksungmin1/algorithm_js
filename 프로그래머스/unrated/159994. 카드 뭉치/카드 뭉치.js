 function solution(cards1, cards2, goal) {
    let answer = "Yes";
    let c1 = goal.filter((g) => cards1.includes(g));
    let c2 = goal.filter((g) => cards2.includes(g));
    
    c1.forEach((c,i) => {if(c !== cards1[i]) {answer = "No"}});
    c2.forEach((c,i) => {if(c !== cards2[i]) {answer = "No"}});
    return answer;
 }

