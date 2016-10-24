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


/* 출력 결과 예상
	200
	200	
	100
	100
*/