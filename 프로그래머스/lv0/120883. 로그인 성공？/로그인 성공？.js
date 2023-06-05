function solution(id_pw, db) {
    let answer = '';
    db.forEach((el) => {
        if(el[0] === id_pw[0]){
            if(el[1] === id_pw[1]) answer ="login";
            else answer = "wrong pw";
        }
        else answer= "fail";
    });
    return answer;
}

