const solution = (array) => {
    let map = new Map();

    for (i of array)
        map.set(i, (map.get(i)||0) + 1);	
    console.log(map);
    ar = [...map].sort((a,b)=>b[1]-a[1]);  
    console.log(ar);
    
    return ar.length === 1 || ar[0][1] > ar[1][1] ? ar[0][0] : -1;
}