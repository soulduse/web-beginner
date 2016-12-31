/*
	모든 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 객체를
	자신의 프로토타입 객체(부모 객체)로 취급한다.
*/

// 생성자 함수 방식에서의 프로토타입 체이닝

// Person() 생성자 함수
function Person(name, age, hobby){
	this.name = name;
	this.age = age;
	this.hobby = hobby;
}

// foo 객체 생성
var foo = new Person("Dave", 27, "Coding");

// 프로토타입 체이닝
console.dir(foo.hasOwnProperty('name')); // true

// Person.prototype 객체 출력
console.dir(Person.prototype);