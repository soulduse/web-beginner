var arr = ['zero', 'one', 'two', 'three'];

/* splice(start, deleteCount, item...)
	- start : 배열의 시작위치.
	- deleteCount : start에서 지정한 시작위치부터 삭제할 요소의 수
	- item : 삭제할 위치에 추가할 요소
*/
arr.splice(2, 1)
console.log(arr);
console.log(arr.length);


/*
	[ 출력결과 ] 
	[ 'zero', 'one', 'three' ]
	3
*/