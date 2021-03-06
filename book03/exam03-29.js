// == (동등) 연산자와 === (일치) 연산자의 차이점

/*
	==	: 비교하려는 피연산자의 타입이 다를 경우에 타입 변환을 거친 다음 비교
	=== : 피연산자의 타입이 다를 경우에 타입을 변경하지 않고 비교한다.
*/

console.log(1 == '1');	// true
console.log(1 === '1'); // false

// == 연산자로 비교하는 것은 추천하지 않음. 가급적 === 연산자로 비교할 것!