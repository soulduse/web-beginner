function Person(name, age, position){
	this.name = name;
	this.age = age;
	this.position = position;
}

var qux = Person('qux', 20, 'man');
console.log(qux);

/*
console.log(window.name);
console.log(window.age);
console.log(window.position);
//*/

/* 
	일반 함수와 생성자 함수 구분이 별도로 없으므로,
	생성자 함수의 경우 첫 글자를 대문자로 표기하는 네이밍 규칙이 있다.

	----------------------------------------------------------------------------

	이러한 규칙을 사용 하더라도 결국 new를 해주지 않으면 코드의 에러가 발생할 수 있으므로,
	다음과 객체를 생성하는 코드패턴을 사용 하기도한다.
*/

console.log("----------------------------------------------------------------------------");

function A(arg){
	if(!(this instanceof A))
		return new A(arg);
	this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);

console.log(a.value);
console.log(b.value);
console.log(global.value);

console.log("----------------------------------------------------------------------------");


function B(arg){
	this.value = arg ? arg : 0;
}

var aa = new B(100);
var bb = B(1000);
console.log(aa.value);
console.log(bb);
console.log(global.value);

function C(arg){
	// console.log("arg Name >> "+arguments.callee);
	// console.log("test");
	if(!(this instanceof arguments.callee))
		return new C(arg);
	this.value = arg ? arg : 0;
}

console.log("test2");
// 이렇게 입력하더라도 C() 함수에서 자동으로 new C 함수 객체를 리턴해줌. 
//따라서 글로벌 변수에 value값이 할당되지 않는다.
var c = C(10); 	
console.log(c);
console.log('cval : ' +c.value);
console.log('gl : '+global.value);
