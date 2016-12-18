// 전역 객체와 전역 변수의 관계를 보여주는 코드

var foo = "I'm foo";	// 전역 변수 선언

console.log(foo);			// I'm foo 출력
console.log(window.foo);	// I'm foo 출력

/*
	전역 변수는 전역 객체(window)의 프로퍼티로도 접근할 수가 있다.
*/