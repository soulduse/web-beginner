var ArrCreate = function(arg){
	var arr = [1,2,3];

	return {
		getArr : function(){
			return arr;
		}
	};
}

var obj = ArrCreate()	/* or var me = new Person(); */
var arr = obj.getArr();
arr.push(5);
console.log(obj.getArr());	// 출력값 [ 1, 2, 3, 5 ]

/* 
	다음과 같은 오류가 발생 이유는 멤버객체나 배열의 경우 얕은 복사로 참조만을
	반환하기 때문.
*/