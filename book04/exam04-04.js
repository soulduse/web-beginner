/*
	함수 표현식에서는 함수 이름이 선택사항 이지만, 이러한 함수 이름을 이용하면
	함수 코드 내부에서 함수 이름으로 함수의 재귀적인 호출 처리가 가능하다.
*/

// 함수 표현식 방식으로 구현한 팩토리얼 함수.

var factorialVar = function factorial(n){
	if(n<=1){
		return 1;
	}

	return n * factorial(n-1);
};

console.log(factorialVar(3));
// console.log(factorial(3));