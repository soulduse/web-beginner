// Person() 생성자 함수
var Person = function(name){
	// 함수 코드 실행전
	this.name = name;
	// 함수 리턴
};

// foo 객체 생성
var foo = new Person('foo');
console.log(foo.name);