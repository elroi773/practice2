class Node{
    constructor(data,next,prev = null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
//node
class DoubleLinkedList{
    constructor(){ //생성자 
        this.head = null; //head 위치에 삽입
        this.tail = null; //tail 위치에 삭제 
        this.count = 0;   //갯수 
    }
    insertAt(index,data){

        if(index > this.count | index < 0){
            throw new Error("범위를 넘어갔습니다");
        }
        
        let newNode = new Node(data); 

        if(index == 0){ //인덱스가 0인데 노드가 있는 경우 
            newNode.next = this.head;
            if(this.head != null){
                this.head.prev = newNode;
            }
            this.head = newNode;
        }

        else if (index === this.count){
            newNode.next = null;
            newNode.prev = this.tail;
            this.tail.next = newNode;   
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
           newNode.prev = currentNode;
           //연결공사 
           currentNode.next = newNode;
           newNode.next.prev = newNode;
        }

        if(newNode.next == null){
            this.tail = newNode;
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
            if(this.head.next == null){
                this.head = null;
                this.tail = null;
            }
            else{   //최소 두개 이상의 노드
                this.head = this.head.next;
                this.head.prev = null;
            }
                this.count--;
            return deleteNode;
        }
        else if (index == this.count-1){ //tail 에서 삭제 하는 ver
            let deleteNode = this.tail; //tail 이 전으로 옮기고
            this.tail.prev.next = null; //tail 다음을 삭제 
            this.tail = this.tail.prev;
            this.count--;
            return deleteNode;
        } 
        else{
            for(let i = 0; i <index-1; i++){
                currentNode = currentNode.next;
            }
            let deleteNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            currentNode.next.prev = currentNode;
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

        return currentNode;
    }

}//Linked list

export {Node , DoubleLinkedList};