// 피보나치 수열 구현

/*
	https://namu.wiki/w/%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98%20%EC%88%98%EC%97%B4
	개념은 위키에서 내용확인하자
*/

var fibo = function(){

	var cache = {
		'0' : 0,
		'1' : 1
	};

	var func = function(n){

		var result;

		if(typeof(cache[n]) === 'number'){
			result = cache[n];
		}else{
			result = cache[n] = func(n-1) + func(n-2);
		}

		return result;
	}

	return func;
}();

console.log(fibo(10));

/*
	소스코드를 보면 팩토리얼 계산할때 구현한 코드 7-3-3과 거의 비슷하다.
	클로저를 이용하여 cashe를 캐시로 활용한다는 것이 똑같고,
	다른점은 cache의 초기값과, 함수를 재귀호출할 때 산술식이 다르다.
*/