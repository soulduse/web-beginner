// 참조에 의한 함수 호출 방식

var a = 100;
var objA = { value : 100 };

function changeArg(num, obj){
	num = 200;
	obj.value = 200;

	console.log(num);
	console.log(obj);
}

changeArg(a, objA);

console.log(a);
console.log(objA);


/* 출력 결과
	200
	{ value : 200 }	
	100
	{ value : 200 }

	결과를 보면 함수 내부에서는 변경한 결과가 반영되어 
	변수 a, objA 값이 변경된 값으로 출력되었으나,
	함수를 벗어나서는 매개변수 num을 통하여 200으로 변경하여도
	함수호출이 끝난 후에는 a의 값은변하지 않는다는 것을 알 수 있다.
	반면 객체의 경우는 매개변수 obj로 objA가 참조하는 객체의 위치 값이
	그대로 전달 되므로 실제 객체의 value 프로퍼티 값이 함수 호출 후에도
	적용되는 것이다.
	= call by value     : 값이 변경되지 않음.
	= call by reference : 값의 변경이 나타남.
*/