function MyObject(name, message){
	this.name = name.toString();
	this.message = message.toString();
}

MyObject.prototype = {
	getName : function(){
		return this.name;
	},
	getMessage : function(){
		return this.message;
	}
}


var val = new MyObject("홍길동", "안녕하세요");
console.log(val);
// var val1 = val.prototype;
// console.log(val1);
// console.log(val1.getName());
// console.log(val1.getMessage());