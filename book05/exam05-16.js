// 클로저를 활용할 때 주의사항

/*
	루프 안에서 클로저를 활용할 때는 주의하자 
*/ 

function countSecond(howMany){
	for(var i=1; i<=howMany; i++){
		setTimeout(function(){
			console.log(i);
		}, i * 1000);
	}
};

countSecond(3);

/*
위의 코드를 실행시키면 결과는 4만 출력된다.
이유는 setTimeout 함수의 인자로 들어가는 함수는 자유 변수 i 를 참조한다.
하지만 이 함수가 실행되는 시점은 countSecond() 함수의 실행이 종료된 이후이고,
i 값은 이미 4가 된 상태이다. 그러므로 setTimeout()로 실행되는 함수는 모두
4를 출력하게 된다.

function countSecond(howMany){
	for(var i=1; i<=howMany; i++){
		(function(currentI){
			setTimeout(function(){
				console.log(currentI);
			}, currentI * 1000);
		})(i);
	}
};

countSecond(3);

*/