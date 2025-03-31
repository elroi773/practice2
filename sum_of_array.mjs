//for 문을 이용해서 배열의 합 구하기 - 상향식 계산 방법 

function addArray(){
    let sum =0;
    for(let i = 0; i< arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
let arr = [1,2,3,4,5,6,7];
console.log(addArray(arr));


let arrr = [1,2,3,4,5];
let temp =0;

for(let i  = 0; i < arrr.length; i++){
    temp +=arr[i];
}

console.log(temp);