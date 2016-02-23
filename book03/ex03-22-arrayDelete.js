var arr = ['zero', 'one', 'two', 'three'];

// 배열이므로 데이터를 지울수 있고, delete 연산자를 이용하여 배열 프로퍼티 삭제 가능하다.
delete arr[2];

console.log(arr);
// 예상결과 ['zero', 'one', 'three']

/*
	결과 : [ 'zero', 'one', undefind , 'three' ]
 	예상결과와 달리 
	해당 주소에 요소만 삭제되었고, 빈공간은 undefind가 들어가있다.
*/
console.log(arr.length);

/* 
	결과 : 4 
	delete연산자로 해당 배열요소를 삭제 해도 배열의 length는 변경되지 않음.
	즉, delete연산자는 해당 요소의 값을 undefind로 설정할 뿐 원소 자체를 삭제 x

	때문에 보통 배열에서 요소 완전 삭제를 위해 splice()배열 메서드를 사용한다고 한다.
	ex03-23에서 splice() 예제 작성.
*/