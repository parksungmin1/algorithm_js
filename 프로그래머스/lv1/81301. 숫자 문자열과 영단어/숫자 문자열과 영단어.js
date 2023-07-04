function solution(s) {
  let arr = [/zero/gi,/one/gi,/two/gi,/three/gi,/four/gi,/five/gi,/six/gi,/seven/gi,/eight/gi,/nine/gi];

    let result;
  for(let i=0; i<10; i++){
     result = s.replaceAll(arr[i],i);
     s = result;
  }
  return parseInt(s);
}