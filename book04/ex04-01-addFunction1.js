/* 함수의 선언방식
	1. 함수 선언문
	2. 함수 표현식
	3. Function() 생성자 함수
*/


// 함수 리터럴을 통한 add() 함수 정의

function add(x, y){
	return x+y;
}

// 매개변수 타입은 따로 선언하지 않는다.
// 함수 이름을 선언하지 않는 익명함수로도 선언할 수 있다. ex functin(){...}

console.log(add(3,4)); // 결과 7


// 이렇게 익명함수로 바로 선언후 사용해버리는 1회성 함수도 선언가능하다.
console.log(
	function(x,y){
		return x+y;
	}(3,4)
);
