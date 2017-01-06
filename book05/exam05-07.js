function outerFunc(){
	var x = 10;
	var innerFunc = function(){console.log(x);}

	return innerFunc;
}

var inner = outerFunc();
inner();


/*
	클로저란 ?
	이미 생명 주기가 끝난 외부 함수의 변수를 참조하는 함수를 클로저라고 한다.

	따라서 outerFunc에서 선언된 x를 참조하는 innerFunc가 
*/