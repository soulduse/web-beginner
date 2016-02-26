function func(arg1, arg2){
	console.log(arg1, arg2);
}

func();
func(1);
func(1, 2);
func(1, 2, 3);


/*
	자바의 오버로딩 기법과는 다른 형식으로 작동하는 것을 확인 하였다.
	인자 수가 일치하지 않더라도 에러가 발생하지 않고, 들어오는 인자만큼만
	출력이 된다.

	결론
	인자보다 적게 입력 -> undefined 값 할당
	인자보다 많게 입력 -> 무시
*/