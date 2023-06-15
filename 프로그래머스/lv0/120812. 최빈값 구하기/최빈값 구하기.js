const solution = (array) => {
    let map = new Map();

    for(let i of array)
        map.set(i, (map.get(i)||0) + 1);	

   let ar = [...map].sort((a,b)=>b[1]-a[1]);  
    return ar.length === 1 || ar[0][1] > ar[1][1] ? ar[0][0] : -1;
}
