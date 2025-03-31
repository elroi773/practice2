//재귀함수를 이용해서 배열의 합 구하기 - 하향식 계산 방법
//기저조건 꼭 !!!!!!!! 기억하긔~!~!~!~!!~!~!~!~!~!~!

let arr = [1,2,3,4,5];
function sumArray(arr){
    if (arr.length===0) return arr[0];
    sumArray(arr.slice(0,-1))+arr[arr.length-1];
}

console.log(sumArray(arr));