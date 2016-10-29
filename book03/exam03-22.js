// delete 연산자를 이용한 배열 프로퍼티 삭제

var arr = ['zero', 'one', 'two', 'three'];

delete arr[2];
console.log(arr.length);

/* 
	delete 연산자로 배열의 요소를 삭제하였으나, 생성된 배열의 길이는
	감소되지 않는다. 즉, delete 연산자는 해당 요소의 값을 undefined로 설정
	할 뿐 원소 자체를 삭제하진 않는다.
*/
