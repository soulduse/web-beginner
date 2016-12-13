// arguments 객체 예제 코드

// add() 함수

function add(a, b){
	// arguments 객체 출력
	console.dir(arguments);
	return a+b;
}

console.log(add(1));		// NoN
console.log(add(1,2));		// 3
console.log(add(1,2,3));	// 3



/*
	arguments 객체는 매개변수 개수가 정확하게 정해지지 않은 함수를 구현하거나,
	전달된 이낮의 개수에 따라 서로 다른 처리를 해줘야 하는 함수를 개발하는데
	유용하게 사용 할 수 있다.	
*/

function sum(){
	var result = 0;

	for(var i=0; i<arguments.length; i++){
		result += arguments[i];
	}

	return result;
}

console.log('============================');
console.log(sum(1,2,3));				// 6
console.log(sum(1,2,3,4,5,6,7,8,9));	// 45