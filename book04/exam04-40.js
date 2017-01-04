// String 기본 타입에 메서드 추가

String.prototype.testMethod = function(){
	console.log('This is the String.prototype.testMethod()');
};

var foo = {
	name : 'Dave',
	age : 25,
	testMethod : function(){
		console.log('This is testMethod');
	}
}

console.log(foo);

var str = "this is test";

str.testMethod();

console.dir(String.prototype);