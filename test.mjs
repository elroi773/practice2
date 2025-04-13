import {LinkedList, Node} from './LinkedList.mjs';

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);

// node1.next = node2;
// node2.next = node3;


// console.log(node1.data);
// console.log(node1.next.data);
// console.log(node2.next.data);

let list = new LinkedList();
// list.insertAt(0,99);
// list.insertAt(3,99); //인덱스가 0이 아닌 경우 연결 공사를 두번 해야 함 

console.log("===== insertAt() 호출 =====");
list.insertAt(0,1); //배열에 숫자 넣는거 0 번방에 1 넣기 
list.insertAt(1,2); 
list.insertAt(2,3); 
list.insertAt(3,4); 
list.insertAt(3,99);

list.printAll();

console.log("===== count() 호출 =====");
list.clear();
list.printAll();


console.log("===== insertLast() 호출 =====");
list.insertLast(77);
list.insertLast(78);
list.insertLast(79);// list.insertAt(2,79);
list.insertLast(80);// list.insertAt(3,80);

list.printAll();