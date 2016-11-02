/*
	자바스크립트에서는 함수도 하나의 값처럼 취급된다
	(이러한 특징으로 자바스크립트의 함수는 일급 객체라고 불린다.)
	따라서 함수도 숫자나 문자열처럼 변수에 할당하는 것이 가능하다.

	이러한 방식으로 함수 리터럴로 하나의 함수를 만들고, 여기서 생성된
	함수를 변수에 할당하여 함수를 생성하는 것을 (함수 표현식) 이라고 한다.
*/

// add() 함수 생성 (함수 표현식 방식)

var add = function(x, y){
	return x + y;
};

var injection = function(x, y){
	var a = x;
	var b = y;
	var m = a*b;

	var ddd = function(){
		console.log('결과 : '+m);		// 25
	}
	ddd();

	return add(x,m);
};

var plus = add;

console.log(add(3,4));			// 7
console.log(plus(10,4));		// 14
console.log(injection(5,5));	// 30

/*
	add, injection 함수 모두 함수의 이름이 없는 익명함수 이다.
	이름이 없는 익명함수를 만들고 이를 add, injection변수에 할당한 것.
	이를 익명 함수를 이용한 함수 표현식 방법(익명 함수 표현식)이다.

	이러한 익명 함수의 호출은 변수에 함수 호출 연산자인 ()를 붙여서 기술하는 것으로 가능하다.
	이름이 포함된 함수 표현식을 기명 함수 표현식이라고 한다.
*/