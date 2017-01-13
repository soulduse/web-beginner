var Person = function(arg){
	var name = arg ? arg : 'Dave';

	var Func = function(){}
	Func.prototype = {
		getName : function(){
			return name;
		},

		setName : function(arg){
			name = arg;
		}
	};

	return Func;
}();

var me = new Person();
console.log(me.getName());