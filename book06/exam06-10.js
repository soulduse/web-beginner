var Person = function(arg){
	var name = arg ? arg : 'Dave';

	return {
		getName : function(){
			return name;
		},
		setName : function(arg){
			name = arg;
		}
	};
}

var me = Person();	/* or var me = new Person(); */
console.log(me.getName());

/*
	위의 코드 패턴은 모듈 패턴이라고 한다.

	Person 함수를 호출하여 객체를 반환받는 구조.
	이 객체에 Person함수의 private 멤버에 접근할 수 있는 메서드 들이 담겨 있다.
	사용자는 반환받는 개체로 메더르르 호출할 수 있고, private 멤버에 접근할 수
	있다. 한 가지 주의할 점은 접근하는 private멤버가 객체나 배열이면 얕은 복사로
	참조만을 반환하므로 사용자가 이후 이를 쉽게 변경할 수 있다.

	다음 예제에서 이에 대한 문제점을 갖는 코드를 확인해보자.
*/