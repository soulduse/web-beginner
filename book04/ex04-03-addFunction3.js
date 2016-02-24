// 기명함수 표현식(함수 이름이 있고 이 함수를 변수에 할당한 상태)

var add = function sum(x,y){
	return x+y;
}


console.log(add(2,3));
console.log(sum(5,5));

/*
	함수 표현식에서 사용된 함수 이름이 외부 코드에서 접근 불가능하기 때문에
	에러가 출력된다.
*/