export function fibonacci (num, array=[0,1]) {
  while (num > 2) {
      const [nextToLast,last] = array.slice(-2);
      array.push(nextToLast+last)
      num -=1
  }
  return array;
}
export function flattenArray(arr) {
  return arr.reduce((flat,toBeFlatten)=>{
      return flat.concat(Array.isArray(toBeFlatten) ?
          flattenArray(toBeFlatten) : toBeFlatten);
  },[])
}