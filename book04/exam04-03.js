
// 기명 함수 표현식의 함수 호출 방법

var add = function sum(x, y){
	return x + y;
};

console.log(add(3,4));		// 출력값 7
// console.log(sum(3,4));	// error

/*
	기명 함수 표현식 : 함수 이름이 포함된 함수 표현식

	sum() 함수를 정의하고, 이 함수를 add 함수 변수에 할당했다. add()
	함수의 경우 성공적으로 리턴된 반면, sum() 함수 호출의 경우 에러가
	발생 한 것을 알 수 있다. 
	-> 이것은 함수 표현식에서 사용된 함수 이름이 외부 코드에서 접근 불가능 하기 때문이다.
	>> sum() : 함수 표현식에서 사용된 함수 이름.

	그럼 어떨때 사용하나?
	실제로 함수 표현식에 사용된 함수 이름의 경우 내부에서 해당 함수를
	재귀적으로 호출하거나, 디버거 등에서 함수를 구분할 때 사용된다.

	
*/