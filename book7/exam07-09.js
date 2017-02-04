var print_all = function(arg){
	for(var i in this)console.log(i +" : "+ this[i]);
	for(var i in arguments)console.log(i+" : "+arguments[i]);
}

var myobj = {name : "dave"};

var myfunc = print_all.bind(myobj);
myfunc();

var myfunc1 = print_all.bind(myobj, "jinju", "others");
myfunc1("javascript");