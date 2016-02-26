function sum(){
	var result = 0;

	for(var i=0; i< arguments.length; i++){
		result += arguments[i];
	}

	return result;
}


console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7,8,9));
console.log(sum(5,5,5,5,5,5));


/*
	정리

	이렇게 하면 매개변수 개수가 정확하게 정해지지 않은 함수를 구현 하거나,
	전달된 인자의 개수가 서로다른 처리를 해줘야 하는 함수를 개발하는 데 유용하게 사용할 수 있다.
	

	예제에서 보면 인자를 특별히 지정하지 않았으나 arguments 객체를 사용하여 함수가 호출될 당시의
	인자들에 배열 형태로 접근 할 수 있다.
*/