// length 프로퍼티

function func0(){

};

function func1(x){
	return x;
}

function func2(x, y){
	return x+y;
}

function func3(x, y, x){
	return x+y+z;
}

function func4(x, y, z, a, b){
	return x+y+z;
}

console.log('func0.length - '+func0.length);
console.log('func1.length - '+func1.length);
console.log('func2.length - '+func2.length);
console.log('func3.length - '+func3.length);
console.log('func4.length - '+func4.length);

/*
	출력값

	func0.length - 0
	func1.length - 1
	func2.length - 2
	func3.length - 3
	func4.length - 5

	출력값을 보면 함수 객체의 length 프로퍼티는 함수를 작성할 때 
	정의한 인자 개수를 나타내고 있음을 확인할 수 있다.
*/