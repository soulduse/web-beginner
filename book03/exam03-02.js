/*
	자바스크립트는 정수형이 따로 없고, 모든 숫자를 실수로 처리.
	따라서 나눗셈 연산시 주의필요.

	Java , C의 경우 5/2의경우 소수를 버린 2가 출력되지만,
	자바스크립트는 5와 2가 모두 정수가 아닌 실수로 취급되므로
	결과는 소수점 까지 출력되어 2.5가 결과값이 된다.
*/

var num = 5/2;

console.log(num);					// 2.5
console.log(Math.floor(num));		// 2

