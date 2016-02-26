function func0(){

}
function func1(x){
	return x;
}
function func2(x, y){
	return x+y;
}
function func3(x, y, z){
	return x+y+z;
}

console.log('func0.length - '+func0.length); // 0
console.log('func1.length - '+func1.length); // 1
console.log('func2.length - '+func2.length); // 2
console.log('func3.length - '+func3.length); // 3


/*
	결과값으로 봤을때, 
	함수 객체의 length 프로퍼티는 함수에 정의된 인자 갯수와 동일하다.
*/


