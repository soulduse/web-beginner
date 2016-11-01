
// Array() 생성자 함수를 통한 배열 생성

var foo = new Array(3);
console.log(foo);				// [undefined, undefined, undefined]
console.log(foo.length);		// 3

var bar = new Array(1, 2, 3);
console.log(bar);				// [1, 2, 3]
console.log(bar.length);		// 3

/*
	foo 배열의 경우 Array() 생성자 함수를 호출할 때 3이라는 숫자 1개만
	넘겼으므로, 3개의 요소가 있는 빈 배열을 생성한다.
	반면 bar 배열의 경우는 Array(1,2,3)을 호출했으므로, 1,2,3 
	3개의 숫자가 요소인 배열이 생성되었다.
*/