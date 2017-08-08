function receivesAFunction(callback){
	callback()
}

function returnsANamedFunction(){
	return function hello(){}
}

function returnsAnAnonymousFunction(){
	return function(){}
}