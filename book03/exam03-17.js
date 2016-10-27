
// push() 메서드와 length 프로퍼티

// arr 배열 생성
var arr = ['zero', 'one', 'two'];

// push() 메서드 호출
arr.push('three');
console.log(arr);	// [ 'zero', 'one', 'two', 'three' ]

// length 값 변경 후, push() 메서드 호출
arr.length = 5;
arr.push('four');
console.log(arr);	// [ 'zero', 'one', 'two', ,'three' ]

/*
	위의 결과처럼 배열의 length 프로퍼티는 배열 메서드의 동작에
	영향을 줄 수 있을만큼 배열에서는 중요한 프로퍼티 이므로 반드시 기억할 것.
*/