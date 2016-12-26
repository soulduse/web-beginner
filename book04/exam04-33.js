// slice() 알아보기

var arrA = [1,2,3];
var arrB = arrA.slice(0);	 	// 예상 : 1,2,3 - o
var arrC = arrA.slice();		// 예상 : 1,2,3 - o
var arrD = arrA.slice(1);		// 예상 : 2,3	   - o
var arrE = arrA.slice(1,2);		// 예상 : 2,3   - x

console.log(arrA);		// 결과 : 1,2,3
console.log(arrB);		// 결과 : 1,2,3
console.log(arrC);		// 결과 : 1,2,3
console.log(arrD);		// 결과 : 2,3
console.log(arrE);		// 결과 : 2

/*
	이전 소스 코드 exam04-32.js 에서 등장하는 
	Array.prototype.slice.apply(arguments)를 생각해보자.
	결과 값은 apply()메서드의 두번째 인자로 slice() 메서드를 호출할 때 사용할 인자를
	넘기지 않았으므로, arguments 객체로 인자 없이 slice() 메서드를 호출한 형태가 된다.
	앞서 설명했듯이 slice() 메서드는 인자 없이 호출한 경우, 이 메서드를 호출한 배열
	(arguments 객체)을 복사한 새로운 배열을 생성한다. 따라서 arguments객체의 모든
	요소를 그대로 복사한 배열이 생성되고, 이것은 args 변수에 리턴된다. 
*/