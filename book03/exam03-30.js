// !! 연산자 활용을 통한 불린값 변환

console.log(!!0);			// false
console.log(!!1);			// true
console.log(!!'string');	// true
console.log(!!'');			// false
console.log(!!true);		// true
console.log(!!false);		// false
console.log(!!null);		// false
console.log(!!undefined);	// false
console.log(!!{});			// true
console.log(!![1,2,3]);		// true


/*
	---------- 확인결과 -----------
	false 를 가지는 경우는 5가지 이다.
	0, '', false, null, undefined
*/