// + 연산자

var add1 = 1+2;
var add2 = 'my '+'string';
var add3 = 1+'string';
var add4 = 'string'+2;

console.log(add1);	// (출력값) 3
console.log(add2);	// (출력값) my string
console.log(add3);	// (출력값) 1string
console.log(add4);	// (출력값) string2

var obj = function(a,b){
	var sum = a+b;
	console.log(sum);
	return sum;			// return 값이 없을 경우 undefined 를 리턴함.
};

console.log(typeof obj);	// function
console.log(obj(100,200));