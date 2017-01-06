function outerFunc(arg1, arg2){
	var local = 8;
	function innerFunc(innerArg){
		console.log((arg1+arg2)/(innerArg + local));
	}

	return innerFunc;
}

var exam1 = outerFunc(2,4);
exam1(2);

/*
	exam1(2)를 호출하게 되면 arg1, arg2, local 값은 outerFunc 변수 객체
	에서 찾고, innerArg는 innerFunc 변수 객체에서 찾는다.
	결과는 ((2+4)/(2+8)) = 0.6이 된다.
*/