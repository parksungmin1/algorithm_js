function solution(board) {
    let n = board.length;
    const dx = [0,0,-1,-1,-1,1,1,1];
    const dy = [1,-1,1,0,-1,1,0,-1];
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
         if(board[i][j] !==1 ) continue;
         for(let k=0;k<8; k++){
            const nx= j+dx[k];
            const ny = i+dy[k];    
          if(nx>=0 && nx<n && ny>=0 && ny<n && board[ny][nx]!==1){
            board[ny][nx] = 2;
          }}
            }
        }  
   return board.reduce((a,c) => a+c.filter(el=> el===0).length,0);
}