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

console.log(add.result);	// 5
console.log(add.status);	// 'OK'
console.log(add);			// { [Function: add] result: 5, status: 'OK' }

/* 
	- add()함수를 생성할 때 함수 코드는 함수 객체의 [[Code]] 내부 프로퍼티에
		자동으로 저장된다
	- add()함수에 마치 일반객체처럼 result프로퍼티를 동적으로 생성하고,
		여기에 add()함수를 호출한 결과를 저장한 것을 확인할 수 있다.
		따라서 add(2,3) 함수 실행의 결과값인 5가 add()함수 객체의 result 프로퍼티에 저장된다.
	- add() 함수 객체의 status 프로퍼티도 일반 객체에서 접근 방식처럼 add.satus를 이용해 접근 가능하다.
*/