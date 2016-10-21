/*
	자바스크립트 기본 타입은 
	숫자, 문자열, 불린값, null, undefined가 있다.

	이를 체크해보기 위해 typeof연산자를 이용하여 출력한다.
	typeof => 피연산자의 타입을 리턴한다.
*/

// 자바스크립트 기본 타입

// 숫자열 타입
var intNum 		= 10;
var floatNum 	= 0.1;

// 문자열 타입
var singleQuoteStr 	= 'single quote string';
var doubleQuoteStr 	= "double quote string";
var singleChar		= 'a';

// 불린 타입
var boolVar	= true;

// undefined 타입
var emptyVar;

// null 타입
var nullVar = null;

console.log(
	typeof intNum,
	typeof floatNum,
	typeof singleQuoteStr,
	typeof doubleQuoteStr,
	typeof boolVar,
	typeof nullVar,
	typeof emptyVar
	);