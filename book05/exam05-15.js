// 클로저를 활용할 때 주의사항

/* 
	2. 하나의 클로저가 여러 함수 객체의 스코프 체인에 들어가 있는 경우 도 있다.
*/ 

function func(){
	var x = 1;
	return {
		func1 : function(){console.log(++x);},
		func2 : function(){console.log(-x);}
	};
};

var exam = func();
exam.func1();
exam.func2();
exam.func1();
exam.func1();
exam.func2();
exam.func2();

/*
	반환 되는 객체에는 두 개의 함수가 정의되어 있는데, 두 함수 모두 자유
	변수 x를 참조한다. 그리고 각각의 함수가 호출될 때마다 x값이 변화하므로
	유의해야 한다.
*/