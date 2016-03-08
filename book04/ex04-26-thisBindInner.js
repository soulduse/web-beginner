// 전역 변수 value 정의

var value = 100;

// myObject 객체 생성
var myObject = {
	value : 1,
	func1 : function(){
		this.value += 1;
		console.log('func1() called. this.value : '+ this.value);

		// func2() 내부 함수
		func2 = function(){
			this.value +=1;
			console.log('func2() called. this.value : '+this.value);

			// func3() 내부 함수
			func3 = function(){
				this.value += 1;
				console.log('func3() called. this.value : '+this.value);
			}

			func3();	// func3() 메서드 호출
		}

		func2();		// func2() 메서드 호출
	}
};

myObject.func1();		// func1() 메서드 호출



/*
	출력이 제대로 이루어지지 않은 이유는 내부 함수 호출 패턴을 정의해 놓지 않기 때문.
	내부 함수도 결국 함수 이므로 이를 호출 할 때는 함수 호출로 취급한다.
	따라서 함수 호출 패턴 규칙에 따라서 내부 함수의 this는 전역객체 (window)에 바인딩 된다.
	때문에 내부함수 func2,3 은 this.value값에 1을 더한 것이 아닌 window.value값에 1을 더한 값이 나온다.
	=> 2 , 101, 102 
	
	따라서 해결 방법으로 this를 내부 함수가 접근 가능한 다른 변수에 저장하는 방법으로 문제를 해결한다.
*/
