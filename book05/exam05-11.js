// 함수의 캡슐화

var buffAr = [
	'I am ',
	'',
	'. I live in ',
	'',
	'. I am ',
	'',
	' years old.',
];

function getCompletedStr(name, city, age){
	buffAr[1] = name;
	buffAr[3] = city;
	buffAr[5] = age;

	return buffAr.join('');
}

var str = getCompletedStr('Dave', 'Texas', 29);
console.log(str);

/*
	해당 코드의 단점은 buffer 변수가 노출되어 있다.
	따라서 다른 함수에서 이 배열에 수비게 접근하여 값을 바꿀 수도 있고, 
	실주로 같은 이름의 변수를 만들어 버그가 생길 우려가 있다.
	이는 특히 다른 코드와의 통합 혹은 이 코드를 라이브러리로 만들려고 할 때,
	까다로운 문제를 발생시킬 가능성이 있다. 실제로 다른 사람이 사용할 
	라이브러리를 만드려고 할 때 이러한 충돌 가능성을 충분히 대비해서 라이브러리를
	작성해야만 한다. 앞 예제의 경우, 클로저를 활용하여 buffAr을 추가적인 
	스코프에 넣고 사용하게 하면, 이문제를 해결 할 수 있다.
*/