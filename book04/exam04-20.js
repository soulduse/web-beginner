// self() 함수
var self = function(){
	console.log('a');
	return function(){
		console.log('b');
	}
}

self = self();	// a
self();			// b

// self();

/*
	처음 self()함수가 호출됬을 때는 'a'가 호출된다. 그리고 다시
	self 함수 변수에 self() 함수 호출 리턴값으로 내보낸 함수가 저장된다.

	두 번째로 self() 함수가 호출됬을 때는 'b'가 출력된다. 즉,
	self() 함수 호출 후에, self 함수 변수가 가리키는 함수가 원래 함수에서
	리턴 ㅏㄷ은 ㅐㅅ로운 함수로 변경 되었기 때문.
*/