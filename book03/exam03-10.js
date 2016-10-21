// 기본 타입과 참조 타입의 비교연산

var a = 100;
var b = 100;

var objA = { value : 100 };
var objB = { value : 100 };
var objC = objB;

console.log(a == b);			// false
console.log(objA == objB);		// false
console.log(objB == objC);		// true