class Node {
  constructor(element=null,next=null) {
    this.element = element;
      this.next = next;
  }
}

let node1 = new Node(1,null);
let node2 = new Node(2);
node1.next = node2;

console.log(node1);