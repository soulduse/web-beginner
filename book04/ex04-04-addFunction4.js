var factorialVar = function factorial(n){
	if(n <= 1){
		return 1;
	}

	return n * factorial(n-1);
};

console.log(factorialVar(3));
console.log(factorial(3));


/* Tip - 자바스크립트의 세미콜론 관습

	1. 함수 선언문 방식
	ex) function sum(){...}
	함수 끝에 세미콜론(;)을 붙이지 않는다.

	2. 함수 표현식 방식
	ex) var sum = function(){};
	함수 끝에 세미콜론(;)을 붙인다.
*/


