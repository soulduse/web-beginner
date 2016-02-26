// 내부 함수를 외부로 리턴하면 부모 함수 밖에서도 내부함수를 호출하는 것이 가능하다.

function parent(){
	var a = 100;
	// child() 내부 함수
	var child = function(){
		console.log(a);
	};

	return child;
}

var inner = parent();
inner();

/* inner => 클로저 

	클로저 : 실행이 끝난 parent()와 같은 부모 함수 스코프의 변수를 참조하는 
	inner()와 같은 함수를 클로저라고 한다.
*/