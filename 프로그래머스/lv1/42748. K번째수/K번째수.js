function solution(array, commands) {
    let result = [];
    let newarr = [];
    
    for(let i=0; i<commands.length; i++){
       result = array.slice(commands[i][0]-1 , commands[i][1]);
       result.sort((a,b) => a-b);
       newarr.push(result[commands[i][2]-1]);
    }
   return newarr;
}