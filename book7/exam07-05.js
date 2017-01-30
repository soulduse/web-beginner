var cacher = function(cache, func){
	var calculate = function(n){
		var result;

		if(typeof(cache[n]) === 'number'){
			result = cache[n];
		}else{
			result = cache[n] = func(calculate, n);
		}

		return result;
	};

	return calculate;
}

/*
	cacher 함수는 사용자 정의 함수와 초기 cache 값을 받아 연산을 수행한다.
	사용자는 이 함수의 인자로 피보나치 수열을 연산하는 함수 혹은 팩토리얼을
	연산하는 함수를 정의하여 사용할 수 있다.
*/	