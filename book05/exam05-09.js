
// 특정 함수에 사용자가 정의한 객체의 메서드 연결하기

function HelloFunc(func){
	this.greeting = "hello";
}

HelloFunc.prototype.call = function(func){
	func ? func(this.greeting) : this.func(this.greeting);
}

var useFunc = function(greeting){
	console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = useFunc;
objHello.call();

/*
	함수 HelloFunc는 greeting 변수가 있고, func 프로퍼티로 참조되는 함수를
	call() 함수로 호출한다. func 프로퍼티에 자신이 정의한 함수를 참조시켜 
	호출할 수 있다. 다만, HelloFuc.prototype.call()을 보면 알 수 있듯이
	자신의 지역 변수인 greeting 만을 인자로 사용자가 정의한 함수에 넘긴다.
	사용자는 userFunc() 함수를 정의하여 HelloFunc.func()에 참조시킨 뒤,
	HelloFunc() 의 지역 변수인 greeting을 화면을 출력시킨다.
*/


/*
	코드 적으며 몰랐던 사실( 까먹었던 사실 )

	HelloFunc.prototype.call = function(func){
		func ? func(this.greeting) : this.func(this.greeting);
	}

	위의 코드에서 func ? a : b;
	와 같은 구문이 있는데 자바스크립트에서의 함수는 파라메터 값이 없어도
	동작하기 때문에 위의 함수를 분석하자면, 파라메터 값으로 함수가 넘어오면,
	a 를 실행하고, 파라메터 값이 없다면 b를 실행한다는 내용이다.	

	아래는 간단하게 이해를 돕기 위한 예제코드를 작성하였다.
*/

function aaa(func){
	console.log(func ? 1 : 2);
}

aaa(1); 	// 1 
aaa();		// 2
