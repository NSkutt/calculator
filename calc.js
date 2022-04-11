let sum;
let x;
let operator;
let y;
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
if(operator == "/" && y == 0){
	sum = 'INCONCEIVABLE';
	return sum;
	}else if(typeof(x) != 'number'){
		sum = y;
		return sum;
	}else{
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
		}}
}
function clearAll(){
display.value = 0;
x = '';  y = ''; operator = ''; sum = 0;
}
function digit(e){
	if(this.name == "CE"){
		clearAll();
		}else if(this.name == "+" || this.name == "-" || this.name == "*" || this.name == "/"){
			if (display.classList.contains('working')){
				y = parseInt(display.value);
				//console.log(x, operator, y);
				operate(x, operator, y);
				x = sum;
				display.value = 0;
				operator = this.name;
				}else{
				display.classList.add('working');
				x = parseInt(display.value);
				operator = this.name;
				display.value = 0;
				}
	}else if(this.name =="="){
		display.classList.remove('working');
		y = parseInt(display.value);
		operate(x, operator, y);
		display.value = sum;
	}else{
	display.value += this.name;
	}
	}
let btns = [... document.querySelectorAll('.btn')];
for(i=0; i<btns.length; i++){
	btns[i].addEventListener('click', digit);
	}

//[... document.querySelectorAll('.btn')].forEach(button => addEventListener("click", digit)); > Doesn't work right

//Correct the display width
display.style.width = `${calcBody.clientWidth -10}px`;
