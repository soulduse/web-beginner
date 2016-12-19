/*
	함수 호출에서의 this 바인딩 특성은 내부 함수 inner function를 호출
	했을 경우에도 그대로 적용 되므로, 내부 함수에서 this를 이용할 때는 주의해야 한다.
*/

// 전역 변수 value 정의

var value = 100;

// myObject 객체 생성
var myObject = {
	value : 1,
	func1 : function(){
		this.value += 1;
		console.log('func1() called. this.value : '+this.value);

		// func2() 내부함수
		func2 = function(){
			this.value += 1;
			console.log('func2() called. this.value : '+this.value);

			// func3() 내부 함수
			func3 = function(){
				this.value += 1;
				console.log('func3() called. this.value : '+this.value);
			}

			func3();	// func3() 내부 함수 호출
		}

		func2(); 		// func2() 내부 함수 호출
	}
};
myObject.func1();		// func1() 메서드 호출

/*
	[실행 순서]
	- 35 line >> func1() 메서드 호출
	- 31 line >> func2() 내부함수 호출
	- 28 line >> func3() 내부함수 호출
*/