// 기본 타입과 참조 타입의 비교연산

var a = 100;
var b = 100;

var objA = { value : 100 };
var objB = { value : 100 };
var objC = objB;

console.log(a == b);			// true
console.log(objA == objB);		// false
console.log(objB == objC);		// true

/*
	a == b 의경우 false를 예상했으나 결과는 true였다.
	a,b의 경우 숫자 100을 저장하고 있는 기본 타입의 변수다.
	기본 타입의 경우 동등 연산자(==)를 이용해서 비교할 때 값을 비교한다.
	a,b 두 변수 모두 100이라는 동일한 값을 가지고 있으므로 a == b의 결과는 true.

	objA, objB는 다른 객체지만 같은 형태의 프로퍼티 값을 가지고 있다.
	하지만 동등 연산자(==)로 두 객체를 비교하면 a,b와는 다르게 
	결과는 false 이다. a,b와 같이 기본 타입의 경우는 값 자체를 비교하지만,
	객체와 같은 참조 타입의 경우는 참조 값이 같아야 true가 된다.
	따라서 objB, objC는 같은 객체를 참조하므로 동등 연산자(==) > ture가 된다.
*/