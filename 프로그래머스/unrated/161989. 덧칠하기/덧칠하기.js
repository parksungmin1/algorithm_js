function solution(n, m, section) {
    let count=1;
    let r = section[0] + (m-1);
    for(let i=0; i<section.length ; i++){
        if(r>section[i]){
            continue;}
        else if(r<section[i]){
            r=section[i] + (m-1);
            count++;
        }
        }
    return count;
}