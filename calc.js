let sum;
function add(x,y){
	sum = 0;
	sum = x + y;
	return sum;
};
function subtract(x,y){
	sum = 0;
	sum = x - y;
	return sum;
};
function multiply(x,y){
	sum = 0;
	sum = x*y;
	return sum;
};
function divide(x,y){
	sum = 0;
	sum = x/y;
	return sum;
};

function operate(x, operator, y){
//console.log(arguments);
	if(operator == '+'){
		add(x,y)
		return sum;
	}else if(operator == '-'){
	subtract(x,y)
	return sum;
	}else if(operator == '*'){
		multiply(x,y)
		return sum;
	}else if(operator == '/'){
		divide(x,y)
		return sum;
		}
}
