
function hanoi(count, from, to, temp){
    if(count==0) return;
    hanoi( count-1, from, temp, to);
    console.log(`원반 ${count}  ${from}  ==> ${to}`);
    hanoi( count-1, temp, to, from);
}


hanoi(4,"A","C","B");


