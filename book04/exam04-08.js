/*
	자바스크립트에서는 함수도 객체다
	=> 함수 기본 기능인 코드 실행뿐만 아니라, 함수 자체가 일반 객체처럼
		프로퍼티들을 가질 수 있다.

	add() 함수도 객체처럼 프로퍼티를 가질 수 있다.
*/

// 함수 선언 방식으로 add() 함수 정의
function add(x, y){
	return x+y;
}

// add()함수 객체에 result, status 프로퍼티 추가
add.result = add(3, 2);
add.status = 'OK';

console.log(add.result);
console.log(add.status);
console.log(add);