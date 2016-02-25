// 함수를 리턴하는 foo() 함수 정의
var foo = function(){
	return function(){
		console.log('this function is return value.');
	};
};

var bar = foo();
bar();

/*
	처음 foo()만 하면 출력결과가 잘 나올줄 알았는데,
	생각 해보면 foo() 함수를 호출 했을때 리턴값은 또다른 함수를 리턴하고 있다.

	따라서 새로운 변수 bar 에 foo()함수 실행값을 담으면
	리턴된 함수가 담기게 되고, 이를 실행하기 위해서 bar(); 를 하면 실행되는 형태이다.

	이렇게 리턴값으로 함수를 활용할 수 있음을 알게 되었다.
*/