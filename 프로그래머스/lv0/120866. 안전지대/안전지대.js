function solution(board) {
    let n = board.length;
    let cnt = 0;
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(board[i][j] === 1){
                cnt++;  
           }    
        }
    }
    
    let result = n*n -3*(2+cnt);
    if(result < 0 ) return 0;
    return result;
}