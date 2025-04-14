class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){ //생성자 
        this.head = null;
        this.count = 0;
    }
    insertAt(index,data){

        if(index > this.count | index < 0){
            throw new Error("범위를 넘어갔습니다");
        }
        
        let newNode = new Node(data); //next 값을 가지고 있는 데이터 

        if(index == 0){ //인덱스가 0인데 노드가 있는 경우 
            newNode = this.head;
            this.head = newNode;
        }
        else{ //0이 아닌경우 
            //큐런트노드 
            //3,99 을 넣었을때 index = 3 data =99
           let currentNode = this.head;//1.head 가 가리키는걸 큐런트가 가리켜야 함
           for(let i = 0; i <index-1; i++){
            currentNode = currentNode.next; //가리키는 for 문 
           } 
           //1 새로운 노드의 next 지정 
           newNode = currentNode.next;
           //연결공사 
           currentNode.next = newNode;
        }
        this.count++;
    }//insertAt

    printAll(){
        let currentNode = this.head;
        let text = "[";
        while(currentNode != null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
            if(currentNode!= null){
                text +=", ";
            }
        }
        text += "]";
        console.log(text);
    }//다 출력하는 메소드

    clear(){
        this.head = null;
        this.count = 0;
    }//자바로 따지면 가비지 컬렉터래요 
    //초기화

    insertLast(data){
        this.insertAt(this.count , data);
    }

    deleteAt(index){
        if(index > this.count | index < 0){
            throw new Error("범위를 넘어갔습니다");
        }
        let currentNode = this.head;
        //첫번째 노드 가리킴
        if(index == 0){
            let deleteNode = this.head;
            this.head = this.head.next; //curent.next도 가능 ~~~
            this.count--;
            return deleteNode;
        }else{
            for(let i = 0; i <index-1; i++){
                currentNode = currentNode.next;
            }
            let deleteNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            this.count--;
            return deleteNode;
        }
    }//deletAt

    deleteLast(){
        this.deleteAt(this.count-1);
    }//deleteLast

    getNodeAt(index){
        if(index > this.count | index < 0){
            throw new Error("범위를 넘어갔습니다");
        }
        let currentNode = this.head;
        
        for(let i = 0; i <index; i ++){
            currentNode = currentNode.next;
        }

        return 
    }

}//Linked list

export {Node , LinkedList};