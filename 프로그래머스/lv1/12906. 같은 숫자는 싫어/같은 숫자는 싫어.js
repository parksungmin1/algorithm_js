function solution(arr)
{
    for(let i =0; i<arr.length; i++){
        if(arr[i] === arr[i+1]) delete arr[i];
    }
    let result = [];
    for(let i=0 ; i<arr.length; i++){
        if(arr[i] != null) result.push(arr[i]);
    }
    return result;
}
    