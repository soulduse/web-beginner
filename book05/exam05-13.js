// setTimeout() 에 지정되는 함수의 사용자 정의

function callLater(obj, a, b){
	return (function(){
		obj['sum'] = a+b;
		console.log(obj['sum']);
	});
}

var sumObj = {
	sum : 0
}

var func = callLater(sumObj, 1, 2);
setTimeout(func, 500);

/*
	setTimeout : 웹 브라우저에서 제공하는 함수
				 첫 번째 인자로 넘겨지는 함수 실행의 스케쥴링을 할 수 있다.
				 두 번째 인자인 밀리 초 단위 숫자만큼의 시간 간격으로 해당 함수 호출

	코드에서 할 내용 : 
		1. setTimeout() 으로 자신의 코드를 호출하고 싶다면 첫번 째
		인자로 해당 함수 객체의 참조를 넘겨주면 되지만, 이것으로는 실제 실행될
		때 함수에 인자를 줄 수 없다.
		2. 어떻게 자신이 정의한 함수에 인자를 넣어줄 수 있을까?
		3. 사용자가 정의 한 함수 callLater를 setTimeout 함수로 호출하려면,
			변수 func에 함수를 반환받아 setTimeout() 함수의 첫 번째 인자로 넣어주면 해결.

		=> 반환받는 함수는 당연히 클로저 이고, 사용자가 원하는 인자에 접근 가능하다.
*/


// 이해 후 복습을 위한 코드

function reviewFunc(obj, a, b){
	return (function(){
		obj['sum'] = a+b;
		console.log(obj['sum']);
	});
}

var reviewSum = {
	sum : 0
}

var exam = reviewFunc(reviewSum, 1,2);

setTimeout(exam, 500)

// 커스텀
function aaa(a, b){
	return (function(){
		console.log(a+b);
	});
}

var bbb = aaa(1,2);

setTimeout(bbb, 500)


function ccc(a, b){
	console.log(a+b);
}

var ddd = ccc(1,2);
console.log(ddd);

/*
	상위의 예제처럼 

	var reviewSum = {
		sum : 0
	}

	이 구문은 왜 필요할까?
*/








