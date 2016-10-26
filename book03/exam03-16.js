// 배열 length 프로퍼티의 명시적 변경

var arr = [0, 1, 2];
console.log(arr.length); 	// 3

arr.length = 5;
console.log(arr.length); 	// 5
console.log(arr);			// [0, 1, 2, undefined , undefined ]

arr.length = 2;
console.log(arr.length);	// 2
console.log(arr);			// [ 0, 1 ]
console.log(arr[2]);		// undefined

/*
	length = 5를 줬을때 기존 값에서 벗어나는 경우 3,4 인덱스는
	undefined로 출력된다. 하지만 반대로 length = 2를 줬을 때,
	프로퍼티를 벗어나는 인덱스 값 2가 살제로 삭제된다.
	따라서 console창에서는 undefined가 출력됨을 확인 할 수 있다.
*/