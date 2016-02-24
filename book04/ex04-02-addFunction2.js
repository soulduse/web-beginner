// ex04-01에서 함수 리터럴 방식과 다른, add () 함수 표현식

var add = function(x,y){
	return x+y;
};

var plus = add;

console.log(add(3,4));
console.log(plus(5,6));
// 함수 리터럴로 두 값을 더하는 함수를 생성 후, 이를 add 변수에 저장.
// 여기서 함수 리터럴로 생성한 함수는 함수명이 없으므로 익명함수이다.