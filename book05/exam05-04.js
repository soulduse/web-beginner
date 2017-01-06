// 함수를 호출한 경우 생성되는 실행 컨텍스트의 스코프 체인

var var1 = 1;
var var2 = 2;

function func(){
	var var1 = 10;
	var var2 = 20;
	console.log(var1);
	console.log(var2);
}

func();
console.log(var1);
console.log(var2);

/*
	1. 전역 실행 컨텍스트가 생성된다.
	2. func() 함수 객체 만들어진다.
	3. 함수 객체의 [[scope]]는 현재 실행되는 컨텍스트의 변수 객체에 있는 [[scope]]를 그대로 가진다.
	4. func 함수 객체의 [[scope]]는 전역변수 객체가 된다.
*/