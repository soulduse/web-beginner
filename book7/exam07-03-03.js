/*
var fact = function(){
	var cache = {'0': 1};
	var func = function(n){
		var result = 0;

		if(typeof(cache[n]) === 'number'){
			result = cache[n];
		}else{
			result = cache[n] = n * func(n-1);
		}

		return result;
	}

	return func;
}();


console.log(fact(10));
console.log(fact(20));
*/

/*
	위에 소스 이해해보기 : 이해 완료
	설명 : 
		exam function을 바로 실행시켜 cashe에 접근 할 수 있는
		클로저를 반환받는다. 클로저로 숨겨지는 cache에는 팩토리얼을
		연산한 값을 저장하고 있다. 연산을 수행하는 과정에서 캐시에
		저장된 값이 있으면 곧바로 그 값을 반환하는 방식이다.
		이렇게 하면 한번 연산된 값을 캐시에 저장하고 있으므로, 중복된
		연산을 피하여 보다 나은 성능의 함수를 구현 할 수 있다.
*/

var exam = function(){

	var cache = {'0':1};

	var func = function(n){
		console.log('funcCnt : '+n);
		var result = 0;

		console.log(typeof(cache[n]));
		console.log(typeof('number'));
		if(typeof(cache[n]) === 'number'){
			result = cache[n];
		}else{
			result = cache[n] = n * func(n-1);
		}

		console.log('cacheNum : '+cache[n]);
		
		console.log('----------------');
		console.log(n);
		console.log(result);
		console.log('----------------');

		return result;
	}

	return func;
}();

console.log(typeof(exam(5)));

/*
var ca = {'0':1};
console.log(typeof(ca[0]) === 'number');
*/

/* 
	아래와 같은 정의가 가능하다. ( 이건 몰랐네.. ) 
	따라서 위의

var a = 0;
var b = 0;
var c = 0;

a = b = c = 5;
console.log(a);		// 5
console.log(b);		// 5
console.log(c);		// 5

a = b=  0;
console.log(a);		// 0
console.log(b);		// 0
console.log(c);		// 5

exam(3);

*/

/*
function factA(num){

	if(num == 0){
		return 1;
	}
	return num * factA(num-1);
}

function factB(num){
	var val = 1;
	for(var i=2; i<=num; i++)
		val = val * i;
	return val;
}

console.log(factA(3));
console.log(factB(20));

*/


/* Memorization parttern

	정의 : 계산 결과를 저장해 놓아 이후 다시 계산할 필요 없이
			사용할 수 있게 한다.

	기능 : 계산된 결과를 함수 프로퍼티 값으로 담아 놓고 나중에
			사용한다.
*/

console.log('------- memoization parttern --------');

function Calculate(key, input, func){
	Calculate.data = Calculate.data || {};
	console.log('Cal data ');
	console.log(Calculate.data);

	if(!Calculate.data[key]){
		var result;
		result = func(input);
		Calculate.data[key] = result;
	}

	return Calculate.data[key];
}

var result = Calculate(1, 5, function(input){
	return input * input;
});

console.log(result);


result = Calculate(2, 5, function(input){
	return input * input / 4;
});

console.log('----------- result ----------');
console.log(result);

console.log(Calculate(1));
console.log(Calculate(2));
// console.log(Calculate(3));
console.log('-----------------------------');