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


/*
	위에 소스 이해해보기
*/

var exam = function(){

	var cache = {'0':1};

	var func = function(n){
		var result = 0;

		console.log(typeof(cache[n]));
		console.log(typeof('number'));
		if(typeof(cache[n]) === 'number'){
			result = cache[n];
		}else{
			result = cache[n] = n * func(n-1);
		}
		
		console.log('----------------');
		console.log(n);
		console.log(result);
		console.log('----------------');

		return result;
	}

	return func;
}();

exam(5);

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
