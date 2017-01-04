// 프로토타입 객체 변경

// Person() 생성자 함수
function Person(name){
	this.name = name;
}

console.log(Person.prototype.constructor);

// foo 객체 생성
var foo = new Person('foo');
console.log(foo.conutry);

// 디폴트 프로토타입 객체 변경
Person.prototype = {
	conutry : 'Korea',
};

console.log(Person.prototype.constructor);

// bar 객체 생성
var bar = new Person('bar');
console.log(foo.conutry);
console.log(bar.conutry);
console.log(foo.constructor);
console.log(bar.constructor);