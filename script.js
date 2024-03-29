//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	get Width(){
		return this.width;
	}
	get Height(){
		return this.height;
	}
	getArea(){
		let a = this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side);
	}
	getPerimeter(){
		let p = 4*this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
