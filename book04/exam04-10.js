// 함수를 다른 함수의 인자로 넘긴 코드

// 함수 표현식으로 foo() 함수 생성

var foo = function(func){
	func();
};

// foo() 함수 실행

foo(function(){
	console.log('Function can be used as the argument.');
});

/*
	foo() 함수를 호출할 때, 함수 리터럴 방식으로 생성한 익명함수를
	func인자로 넘겼다. 따라서 foo()함수 내부에서는 func 매개변수로
	인자에 넘겨진 함수를 호출할 수 있다. 인자로 넘긴 익명 함수가 foo()
	함수 내부에서 제대로 호출된 것을 알 수 있다.
*/