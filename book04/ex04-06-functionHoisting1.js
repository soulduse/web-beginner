
// 함수의 호이스팅.

/*
	자바스크립트의 Guru(전문가, 권위자)로 알려진 더글러스 크락포드는 함수 생성에 있어서 
	함수 표현식만을 사용할 것을 권하고 있다.
	ex) var sum = function(){...};

	Why ? -> 함수 호이스팅 때문!.
*/

console.log(add(2, 3));	// error?

function add(x,y){
	return x+y;
}

console.log(add(3, 4));	// success?


// 예상과는 달리 (주석) 둘다 출력된다.