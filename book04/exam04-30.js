// new 를 붙이지 않고 생성자 함수 호출시의 오류
function Person(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}

var qux = Person('qux', 20, 'man');

console.log(qux);				// undefined

console.log(window.name);		// qux
console.log(window.age);		// 20
console.log(window.gender);		// man

/*
	생성자 함수 Person()을 new 없이 일반 함수 형태로 호출할 경우, this는 함수 호출적이므로
	전역 객채인 window 객체로 바인딩 된다. 따라서 이 코드는 Person 객체를 생성해서 이를
	qux변수에 저장하려는 원래 의도와는 다르게 this가 바인딩된 window 객체에 동적으로 
	name, age, gender 프로퍼티가 생성된다. 따라서 window.name의 값이 qux로 출력된 것.

	Person() 함수는 리턴값이 특별히 없다. 생성자 함수는 별도의 리턴값이 정해져 있지 않은 경우
	새로 생성된 객체가 리턴되지만, 일반 함수를 호출할 때는 undefined가 리턴된다. 

	new를 사용해서 호출하지 않을 경우 코드의 에러가 발생할 수 있으므로,
	더글러스 크락포드와 같은 자바스크립트 전문가들은 객체를 생성하는 다음과 같은
	별도의 코드 패턴을 사용하기도 한다.

	<강제로 인스턴스 생성하기>


*/
function A(arg){
	// if(!(this instanceof arguments.callee))
	if(!(this instanceof A))
		return new A(arg);
	this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);
var c = A();

console.log(a.value);
console.log(b.value);
console.log(c.value);
console.log(global.value);

