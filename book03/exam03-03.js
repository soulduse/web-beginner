/*
	문자열

	문자열의 경우 (') , (")로 생성한다.
	주의할점은 한번 정의된 문자열은 변하지 않는다.
*/

// str 문자열 생성
var str = 'text';

console.log(str[0], str[1], str[2], str[3]);	// t e x t

str[0] = 'D';
console.log(str);		// text
console.log(str[0]);	// t

/*
	str[0]의 문자열을 'D'로 변경하였으나,
	결과는 변경되지 않은 text로 그대로 출력되었다.
	따라서 자바스크립트에서는 한 번 생성된 문자여은 읽기만
	가능하지 수정은 불가능함을 알 수 있다.
*/
