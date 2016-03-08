
var value = 100;

// myObject 객체 생성
var myObject = {
	value : 1,
	func1 : function(){
		var that = this;
		console.log('that : '+that);
		this.value += 1;
		console.log('func1() called. this.value : '+ this.value);

		// func2() 내부 함수
		func2 = function(){
			that.value +=1;
			console.log('func2() called. this.value : '+that.value);

			// func3() 내부 함수
			func3 = function(){
				that.value += 1;
				console.log('func3() called. this.value : '+that.value);
			}

			func3();	// func3() 메서드 호출
		}

		func2();		// func2() 메서드 호출
	}
};

myObject.func1();		// func1() 메서드 호출


/*
	관례상 this의 값을 저장하는 변수 이름을 that이라고 짓는다고 한다.

	그런데 이런 부분이 너무 불편하기 때문에 이와같은 문제를 해결 하기 위해 
	this 바인딩을 명시적으로 할 수 있도록 call, apply 메서드를 제공한다.

	추후 학습해보겠다.
*/