/*
	null, undefined

	위의 타입은 모두 값이 비어있음을 나타낸다.
	undefined -> 값이 할당되지 않은 타입.(변수 자체의 값 또한 undefined)
	: 자바스크립트에서 undefined는 타입이자 값을 나타낸다.

*/

// null type create
var nullVar = null;
var emptyVar;

console.log('-----------[null]---------------');
console.log(typeof nullVar);			// object
console.log(typeof nullVar === null);	// false
console.log(nullVar === null);			// true

console.log('-----------[undefined]--------------');
console.log(typeof emptyVar);				// undefined
console.log(typeof emptyVar === undefined);	// false
console.log(emptyVar === undefined);		// true

var typeofEmpty = typeof emptyVar;
console.log('typeofEmpty : '+typeofEmpty);
console.log('emptyVar    : '+emptyVar);
console.log('result      : '+(typeofEmpty === emptyVar));
console.log(undefined === undefined);

/*
	자바스크립트에서는 null타입 변수인지를 확인할 때 
	typeof연산자를 사용하면 안 되고, 일치 연산자(===)를
	사용해서 변수의 값을 직접 확인 해야한다.
*/
