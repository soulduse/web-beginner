// self() 함수

var self = function(){
	console.log('a');
	return function(){
		console.log('b');
	}
};


self = self();
self();


/*
var print = self();
print();

약간 재귀호출 느낌이 난다.

한번 self() 메서드를 호출하면 a가 출력 되고 
다시 self() 메서드를 담은 후 다시 실행하면 b가 출력된다.
*/