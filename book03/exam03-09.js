// 동일한 객체를 참조하는 두 변수 objA와 objB

/*
	자바스크립트에서는 기본 타입인 숫자, 문자열, 불린값, null, undefined
	5가지를 제외한 모든 값은 객체다.
	배열, 함수 또한 객체로 취급된다.
	이러한 객체는 자바스크립트에서 참조타입이라고 부른다.
	: 객체의 모든 연산이 실제 값이 아닌 참조값으로 처리 되기 때문
*/

var objA = {
	val : 40
};

var objB = objA;

console.log(objA.val);
console.log(objB.val);

objB.val = 50;

console.log(objA.val);
console.log(objB.val);


/*
	결과
	40
	40
	50
	50
*/