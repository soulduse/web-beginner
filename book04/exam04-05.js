/*
	77p 추가 학습필요.

	Function() 생성자 함수를 통한 함수 생성

	자바스크립트의 함수도 Function()이라는 기본 내장 생성자 함수로부터
	생성된 객체라고 볼 수 있다. 함수 선언문 또는 함수 표현식 방식도
	Function() 생성자 함수가 아닌 함수 리터럴 방식으로 함수를 생성하지만,
	결국 이 또한 내부적으로는 Function() 생성자 함수로 함수가 생성된다고 볼 수 있다.
*/

var add = new Function('x', 'y', 'return x+y');
console.log(add(3,4));

/*
	But, it is bed example.
	because this method is often not used.
*/