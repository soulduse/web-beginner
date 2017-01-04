// 프로토타입 체이닝과 동적 프로퍼티 생성

// Person()생성자 함수
function Person(name){
	this.name = name;
}

console.log(Person.prototype.constructor);

Person.prototype.country = 'Korea';

var foo = new Person('foo');
var bar = new Person('bar');

console.log(Person.prototype.constructor);

console.log(foo.country);	// Korea
console.log(bar.country);	// Korea

foo.country = 'USA';

console.log(foo.country);	// USA
console.log(bar.country);	// Korea

console.log(Person.prototype.constructor);

Person.prototype = {
	country : "Japan",
};

console.log(Person.prototype.constructor);