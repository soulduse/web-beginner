// 함수 표현식으로 foo() 함수 생성

var foo = function(func){
	func();
};

foo(function(){
	console.log('Function can be used the argument.');
});

/*
	foo()함수를 호출할 때 함수 리터럴 방식으로 생성한 익명함수를 func인자로 넘겼다.
	따라서 인자로 function을 받고 호출 할 수 있다.
*/