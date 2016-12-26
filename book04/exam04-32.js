function myFunction(){
	console.dir(arguments);	// { '0': 1, '1': 2, '2': 3 }
	// arguments 를 출력시 아래의 myFunction함수를 호출하면서 인자로 전달한
	// 아규먼트 값이 자릿수와 함께 출력된다.

	// arguments.shift() 에러발생

	// arguments 객체를 배열로 변환

	var args = Array.prototype.slice.apply(arguments);
	console.dir(args);
}

myFunction(1,2,3);

/*
	배열에서는 shift() 메서드를 사용해 첫 번째 원소를 쉽게 삭제할 수 있지만,
	arguments 객체는 length프로퍼티만을 가진 유사 객체 배열이므로, 앞 코드에서
	주석을 제거하고 arguments.shift()와 같이 표준 배열 메서드를 호출하면
	에러가 발생하여 프로그램이 종료된다

	이러한 경우 apply()메서드로 arguments 객체에서 마치 배열 메서드가 있는 것처럼
	처리할 수 있다. 이를 가능하게 하는 것이 Array.prototype.slice.apply(arguments)
	이다.

	- Array.protoype : 모든 배열 객체의 부모 역할을 하는 자바스크립트 기본 프로토타입 객체
						slice(), push(), pop()과 같은 배열 표준 메서드가 있다.
	- slice(start, end) : 이 메서드를 호출한 배열의 start 인덱스에서 end-1인덱스
	까지 복사한 배열을 리턴한다. end 인자를 지정하지 않을 경우 기본값은 배열의 length 값이다.
	slice()메서드에 아무 인자도 넘기지 않을 경우 전체 배열이 복사된다.
*/