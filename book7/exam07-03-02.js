// 재귀로 구현한 팩토리얼

function fact(num){
	if(num == 0) return 1;
	else return num * fact(num-1);
}

console.log(fact(3));


