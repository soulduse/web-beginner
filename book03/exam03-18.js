// 배열과 객체의 유사점과 차이점

// colorsArray 배열
var colorsArray = ['orange', 'yellow', 'green'];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);

// colorsObj 객체
var colorsObj = {
	'0' : 'orange',
	'1' : 'yellow',
	'2' : 'green'
};

console.log(colorsObj[0]);
console.log(colorsObj[1]);
console.log(colorsObj[2]);

/*
	아래의 ['0']와 위의 [0]은 같은 역할을 한다. 이유는 자바스크립트 엔진이
	[] 연산자 내에 숫자가 사용될 경우, 해당 숫자를 자동으로 문자열 형태로
	바꿔주기 때문.
*/
// console.log(colorsObj['0']);
// console.log(colorsObj['1']);
// console.log(colorsObj['2']);

// typeof 연산자 비교
console.log(typeof colorsArray);
console.log(typeof colorsObj);

// length 프로퍼티
console.log(colorsArray.length);
console.log(colorsObj.length);

// 배열 표준 메서드
colorsArray.push('red');
// colorsObj.push('red');

/*
	colorsObj는 배열이 아니므로 push(), length와 같은 표준 배열
	메스드와 프로퍼티를 사용할 수 없다.이것은 객체가 자신의 부모 
	프로토타입 객체가 서로 다르기 때문이다.

	객체 리터럴 방식으로 생성한 객체
	-> Object prototype 객체가 프로토 타입.
	배열의 경우 
	-> Array.prototype 객체가 부모 객체인 프로토타입.
	
*/



