// 배열의 length 프로퍼티 변경

var arr = [];

console.log(arr.length); // 0

arr[0] = 0;
arr[1] = 1;
arr[2] = 2;
arr[100] = 100;

console.log(arr.length);

/*
	최초 빈 배열에서는 길이가 0이지만, 배열의 인덱스 100 위치에 값을 저장하는 순간,
	가장 큰 인덱스 값인 100을 기준으로 배열의 length 값이 101로 늘어난다.
	=> 하지만 실제 메모리는 length 크기처럼 할당되지 않는다.
*/
