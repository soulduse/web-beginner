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
console.log(emptyArr.length);