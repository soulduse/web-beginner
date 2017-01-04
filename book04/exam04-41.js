// 프로토타입 객체의 동적 메서드 생성

// Person() 생성자 함수
function Person(name){
	this.name = name;
}

// foo 객체 생성
var foo = new Person('foo');

// foo.sayHello();							// error 

// 프로토타입 객체에 sayHello() 메서드 정의
Person.prototype.sayHello = function(){
	console.log('Hello');
}

foo.sayHello();	// Hello

/*
	함수가 생성될 때 자신의 prototype 프로퍼티에 연결되는 프로토타입 객체는 디폴트로
	constructor 프로퍼티만을 가진 객체다. 당연히 프로토타입 객체 역시 자바스크립트 객체
	이므로 일반 객체처럼 동적으로 프로퍼티를 추가/삭제하는 것이 가능하다. 그리고 이렇게
	변경된 프로퍼티는 실시간으로 프로토타입 체이닝에 반영된다.

	Line 14~16 : foo 객체의 프로토타입 객체인 Person.prototype 객체에
	동적으로 sayHello() 메서드를 추가했다.

	Line 18 : foo 객체에서 sayHello() 메서드를 호출. 이때 foo 객체는 
	sayHello() 메서드가 없지만, 프로토타입 체이닝으로 Perosn.prototype 객체에서
	sayHello() 메서드를 검색한다. 그리고 sayHello() 메서드가 정의되어 있어서
	Hello가 정상적으로 출력된다.
*/