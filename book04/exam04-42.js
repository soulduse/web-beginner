// 프로토타입 메서드와 this 바인딩

// Person() 생성자 함수
function Person(name){
	this.name = name;
}

// getName() 프로토타입 메서드
Person.prototype.getName = function(){
	return this.name;
};

// foo 객체 생성
var foo = new Person('foo');

console.log(foo.getName());	// 출력값 foo

// Person.prototype 객체에 name 프로퍼티 동적 추가
Person.prototype.name = 'person';

console.log(Person.prototype.getName());


/*
	foo 객체에는 getName()이 없으므로 Line 16에서 프로토타입 체이닝이 발생한다.
	그리고 Person.prototype.getName()을 호출하는데 이때 this 바인딩된 name의 값은
	foo 이므로 결과는 foo가 출력되고, 아래에 직접적으로 Person.prototype 프로퍼티의
	name값을 동적으로 추가하고, 그 값이 person 이므로 this 바인딩의 값은 'person'이 된다.
*/