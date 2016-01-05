function Person(state){
	this.state = state;
}

Person.prototype.changeState = function(state){
	this.state = state; 
}

Person.prototype.printState = function(){
	console.log(this.state);
}

function practice(){
	var a = new Person("run");
	a.changeState("jump");
	a.printState(); 
}