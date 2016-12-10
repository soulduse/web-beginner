// parent() 함수 정의
function parent(){
	var a = 100;
	var b = 200;

	// child() 내부함수 정의
	function child(){
		var b = 300;

		console.log(a);
		console.log(b);
	}

	child();
}

parent();
// child();

/*
	결과
	100
	300

	parent() 에서의 100, 200이 아닌
	child() 함수의 변수 b값이 바로 출력되었다.

	이것이 가능한 이유는 스코프 체이닝 때문.
	=> 내부 함수는 자신을 둘러싼 외부 함수의 변수에 접근 
	가능하다.
*/