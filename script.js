let myList = null;

class linkBuilder {
	constructor(head, next) {
		this.head = head;
		this.next = null;
	}
	append(next) {
		this.next = next;
	}
	prepend(next) {
		const newNode = new linkBuilder(next);
		myList.append(newNode);
		this.next = next;
	}
	size() {
		let count = 0;
		let currentNode = this; //sets currentNode to head
		while (currentNode) {
			//while there is a next node
			count++; //increments count
			currentNode = currentNode.next; //moves to next node
		}
		return count;
	}
	tail() {
		let lastNode = this;
		while (lastNode.next !== null) {
			lastNode = lastNode.next;
		}
		return lastNode;
	}
	pop() {
		let lastNode = this;
		while (lastNode.next.next !== null) {
			//while there are two more nodes
			lastNode = lastNode.next; //set to next node (leaves 1 left to pop)
		}
		lastNode.next = null; //pops last node
	}

	at(index) {
		let currentNode = this;
		let count = 0;
		while (currentNode) {
			if (count === index) {
				return currentNode;
			}
			count++;
			currentNode = currentNode.next;
		}
		return null;
	}

	contains(value) {
		let node = this;
		while (node !== null) {
			if (node.head === value) {
				return true;
			} else {
				node = node.next;
			}
		}
		return false;
	}
	find(value) {
		let countIndex = 0;
		let list = this;
		while (list) {
			if (list.head === value) {
				return countIndex;
			}
			list = list.next;
			countIndex += 1;
		}
		return `Unable to find in all ${countIndex} counts.`;
	}
	toString(){
		let totalString = "";
		let currentNode = this;
		while (currentNode) {
			totalString += ` (${currentNode.head}) --> `;
			currentNode = currentNode.next;
		}
		return totalString
	}
	insertAt(value, index) {
		if (this.size() <= index){
			return "error, index size too large."
		}
		let currentNode = this;
		for (let i = 0; i < index; i++) {		
			currentNode = currentNode.next;
		}
		let splicedNodes = currentNode.next;
		const newNode = new linkBuilder(value);
		newNode.append(splicedNodes);
		currentNode.next = newNode;

	}

}

function createLinkedList(inputArray) {
	let prevNode = null;
	let secondNode = null;
	for (let i = 0; i < inputArray.length-1; i++) {
		if (prevNode === null) {
			prevNode = new linkBuilder(inputArray[i]);
			secondNode = new linkBuilder(inputArray[i + 1]);
			prevNode.append(secondNode);
			myList = prevNode;
			prevNode = secondNode;
			i += 1;
		} else {
			secondNode = new linkBuilder(inputArray[i]);
			prevNode.append(secondNode);
			prevNode = secondNode;
		}
	}
}
let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

createLinkedList(inputArray); //

console.log(myList.size(), "sz");
console.log(myList.head, "hd");
console.log(myList.tail(), "tl");
console.log(myList.at(5), "at");

console.log(myList.contains(10), "contains");
console.log(myList.contains(99), "contains2");
console.log(myList.find(10),"finem");
console.log(myList.toString(), "str")
console.log(myList.insertAt(99, 0))
console.log(myList.toString(), "strrr")

myList.pop();
console.log(myList, "pop?");

