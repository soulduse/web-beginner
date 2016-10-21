

// 객체 리터럴을 통한 foo 객체 생성
var foo = {
	name : 'foo',
	age : 30,
	major : 'computer science'
};

// for in 문을 이용한 객체 프로퍼티 출력
var prop;
var cnt = 0;
for (prop in foo){
	cnt++;
	console.log('count'+cnt+' : '+prop, foo[prop]);
}

/*
	출력결과

	count1 : name foo
	count2 : age 30
	count3 : major computer science
*/