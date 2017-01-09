var getCompletedStr = (function(){
	var buffAr = [
		'I am ',
		'',
		'. I live in ',
		'',
		'. I am ',
		'',
		' years old.',
	];

	return (function(name, city, age){
		buffAr[1] = name;
		buffAr[3] = city;
		buffAr[5] = age;

		return buffAr.join('');
	});
})();

var str = getCompletedStr('Dave', 'Texas', 22);
console.log(str);

/*
	주의해서 봐야할 점은 변수 getCompletedStr에 익명의 함수를 
	즉시 실행시켜 반환되는 함수를 할당하는 것이다. 이 반환되는 함수가
	클로저가 되고, 이 클로저는 자유 변수 buffAr을 스코프 체인에서 참조할 수 있다.
*/

var getData = (function(){
	var bff = [
		'name ',
		'',
	];

	return (function(name){
		bff[1] = name;

		return bff.join('');
	});
})();


var resultStr = getData('Dave');
console.log(resultStr);