// Person() 생성자 함수
var Person = function(name){
	// 함수 코드 실행전
	this.name = name;
	// 함수 리턴
};

// foo 객체 생성
var foo = new Person('foo');
console.log(foo.name);

/*
	9Line - Person() 함수를 new 로 호출하면, Person()은 생성자 함수로 동작한다.

	3Line - Person() 함수가 생성자로 호출되면, 함수 코드가 실행되기 전에 빈 객체가
	생성된다. 여기서 생성된 빈 객체는 Person() 생성자 함수의 prototype 프로퍼티가
	가리키는 객체(Person.prototype 객체)를 [[Prototype]] 링크로 연결해서 자신의
	프로토타입으로 설정한다. 그리고 이렇게 생성된 객체는 생성자 함수 코드에서 사용되는
	this로 바인딩된다.

	4Line - this가 가리키는 빈 객체에 name이라는 동적 프로퍼티를 생성했다.

	5Line - 리턴값이 특별히 없으므로 this로 바인딩한 객체가 생성자 함수의 리턴값으로
	반환되서, foo변수에 저장된다.
*/