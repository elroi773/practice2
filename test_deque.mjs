import { Deque } from "./Deque.mjs";

let deque = new Deque();
console.log("===== addFirst ======");
console.log(`isEmpty : ${deque.isEmpty()}`);

deque.addFirst(1);
deque.addFirst(2);
deque.addFirst(3);
deque.addFirst(4);
deque.addFirst(5);

console.log("====== remove")
// console.log(deque);

console.log("")
deque.removeLast(); 