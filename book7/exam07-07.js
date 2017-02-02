// curring

// 특정 함수에서 정의된 인자의 일부를 넣어 고정시키고, 나머지를 인자로 받는 새로운 함수를 만드는 것

function calculate(a, b, c){
	return a * b + c;
}

function curry(func){
	var args = Array.prototype.slice.call(arguments, 1);
	console.log(Array.prototype.slice.call(arguments, 1));
	// Array.prototype.slice.call(a, b, c)
	/*
		a - 슬라이스할 아규먼트를 주입
		b - 배열의 순서 입력 (어디서부터 시작할 것인지)
		c - 어디까지 출력할 것인지 (옵션)
	*/
	return function(){
		return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
	}
}

var new_func1 = curry(calculate, 1);
console.log(new_func1(2,3));	// 1 x 2 + 3 = 5
var new_func2 = curry(calculate, 1, 3);
console.log(new_func2(3));		// 1 x 3 + 3 = 6


