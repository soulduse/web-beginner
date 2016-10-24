// 배열 요소의 동적 생성 예제

// 빈 배열
var emptyArr = [];
console.log(emptyArr[0]);	// undefined

// 배열 요소 동적 생성
emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[5] = true;
emptyArr[7] = 'eee'+1;

console.log(emptyArr);
// [ 100, , , 'eight', , true, , 'eee1' ]
console.log(emptyArr.length);
// 8

/*
	- 배열의 경우 length와 같은 프로퍼티가 있다.
	- 4개의 요소 값을 할당했지만 길이가 8이 나왔다.
		: 자바스크립트가 배열의 크기를 현재 배열의 인덱스 중 가장 큰 값을 기준으로 정하기 때문.		
*/