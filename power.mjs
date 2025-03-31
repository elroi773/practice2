// function power(x,n){
//     let sum=x;
//     if (sum ===0) return sum*n;
//     sum *= n;
// }
// console.log(power(2,5));


//정답 

function power(x,n){
    // if(n==1) return x
    if(n==0) return 1;
    return power(x,n-1) * x;
}

console.log(power(2,5));
