// Function() 생성자 함수를 통한 함수 생성

var add = new Function('x', 'y', 'return x+y');
console.log(add(3,4));

/*
	new Function(arg1, arg2, ...argN, functionBody)

	arg1, arg2, ... argN - 함수의 매개변수
	functionBody - 함수가 호출될 때 실행될 코드를 포함한 문자열.

*/

var print = new Function('a', 'b', 'if(a===b){return "A와 B는 같습니다.";} else {return "다르다!"}');

console.log(print(3,3));


/*
	개인적 의견으로는... 생성자 함수를 통한 함수 생성은 
	함수의 매개변수를 문자열로 넘겨줘야 하고, 마찬가지로 실행할 코드 또한, 문자열로 표현해야
	해서 불편한것 같다. 일반적인 함수 선언문 방식 또는 함수 표현식 방식이 좋은것 같다.

	책에서도 자주 사용하지 않는 방법으로 비추천 하고 있다.
*/