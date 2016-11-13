// 함수를 다른 함수의 리턴값으로 활용한 코드

// 함수를 리턴하는 foo() 함수 정의
var foo = function(){
	return function(){
		console.log('this function is the return value.');
	};
};

var bar = foo();
bar();

/*
	foo 함수가 호출되면, 리턴값으로 전달되는 함수가 bar 변수에 저장된다.
	()함수 호출 연산자를 이용해 bar()로 리턴돈 함수를 실행하는 것이 가능하다.
*/