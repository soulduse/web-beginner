// Person() 생성자 함수
var Person = function (name){
	// 함수코드 실행 전
	this.name = name;
	// 함수 리턴
}

// foo 객체 생성
var foo = new Person('foo');
console.log(foo.name);


var Piple = function(name, age){
	this.name = name;
	this.age = age;
}

var pi = new Piple('hell',20);
console.log(pi);
console.log(pi.name);
console.log(pi.age);