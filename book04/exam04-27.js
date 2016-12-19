// 내부 함수 this 바인딩 하기

var value = 100;

var myObject = {
	value: 1,
	func1: function(){
		var that = this;
		console.log('func1() called. this.value : '+this.value);

		func2 = function(){
			value2 = 100;
			var that2 = this;
			that.value += 1;
			console.log('func2() called. this.value : '+that.value);
			console.log('func2() called. this.value2 : '+this.value2);

			func3 = function(){
				that.value += 1;
				that2.value2 += 100;
				console.log('func3() called. this.value : '+that.value);
				console.log('func3() called. this.value2 : '+that2.value2);
			}

			func3();
		}

		func2();
	}
}

myObject.func1();

/*
	부모 함수인 func1()의 this 값을 that 변수에 저장했다.
	내부함수 특징에 따라 func2(), func3() 내부 함수는 자신을 둘러싼 부모 함수인
	func1()의 변수에 접근 가능하므로, func2(), func3()도 that변수로
	func1()의 this가 바인딩된 객체인 myObject에 접근가능하다.
*/