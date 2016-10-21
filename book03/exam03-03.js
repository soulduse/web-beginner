/*
	문자열

	문자열의 경우 (') , (")로 생성한다.
	주의할점은 한번 정의된 문자열은 변하지 않는다.
*/

// str 문자열 생성
var str = 'text';

console.log(str[0], str[1], str[2], str[3]);

str[0] = 'D';
console.log(str);
console.log(str[0]);
