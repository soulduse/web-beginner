var foo = new Array(3);
console.log(foo);
console.log(foo.length);

var bar = new Array(1,2,3);
console.log(bar);
console.log(bar.length);

/*
	[예상 출력결과 위]
	object
	3

 	[예상 출력결과 아래]
	object
	3

	결과 
	// 위
	[undefind, undefind, undefind]
	3

	// 아래
	[1,2,3]
	3

	결론 : Array() 생성자 함수를 호출할 때 3이라는 숫자 인자 1개만 넘기면
	3개의 요소가 있는 빈 배열 생성,
	bar 배열의 경우는 1,2,3 세 개의 숫자가 요소인 배열이 생성.
*/ 


