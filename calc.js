let sum;
let x;
let operator;
let y;
const param = (/[\d|\/|\*|\+|\-|=|]/g || 'Enter')
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
	return;
};
function divide(x,y){
	sum = 0;
	sum = x/y;
	return sum;
};
function powerOf(x,y){
	sum = 0;
	sum = x**y;
	return sum;
};
function operate(x, operator, y){
if(operator == "/" && y == 0){
	sum = 'INCONCEIVABLE';
	return sum;
	}else if(typeof(x) != 'number'){
		sum = y;
		return sum;
	}else if(sum > 10**20){
		return sum = "number too large!";
	}else{
//console.log(arguments);
	if(operator == '+'){
		add(x,y)
	}else if(operator == '-'){
	subtract(x,y)
	}else if(operator == '*'){
		multiply(x,y)
	}else if(operator == '/'){
		divide(x,y)
	}else if(operator == '**'){
		powerOf(x,y)
		}
	}
}
function clearAll(){
display.value = 0;
x = '';  y = ''; operator = ''; sum = 0; display.style.color = '';
}

//Button wiring
function digit(e){
	if(this.name == "CE"){
		clearAll();
		}else if(this.name == "undo"){
			display.value = display.value.slice(0, -1);
		}else if(this.name == "+" || this.name == "-" || this.name == "*" || this.name == "/" || this.name == "**"){
			if (display.classList.contains('working')){
				y = parseFloat(display.value);
				//console.log(x, operator, y);
				operate(x, operator, y);
				x = sum;
				display.value = 0;
				operator = this.name;
				}else{
				display.classList.add('working');
				x = parseFloat(display.value);
				operator = this.name;
				display.value = 0;
				}
	}else if(this.name =="="){
		display.classList.remove('working');
		y = parseFloat(display.value);
		operate(x, operator, y);
		x = '';
		if(typeof(sum) == 'number'){ 
		display.value = sum;
		for(i = ((display.value.length < 6) ? display.value.length - 1 : 5); i>0; i--){
			if (display.value[i] == 0){
			continue
			}else{
			primeColors();
			return display.value = sum.toFixed(i) 
			};
		}
		primeColors();
		}else{display.value = sum}
	}else{
		display.value += this.name;
	}
	if(display.value.includes('.')){keyDot.disabled = true;}else{keyDot.disabled = false;}
	}
let btns = [... document.querySelectorAll('.btn')];
for(i=0; i<btns.length; i++){
	btns[i].addEventListener('click', digit);
	}
//Attaches keyboard to onscreen buttons
function pressButton(e){
	if(e.key.match(param) || e.key == "Enter" || e.key == "Escape" || e.key  == "Backspace" || e.key == "."||e.key == '^'){
		event.preventDefault();
		if(e.key == 'Enter'){window['key='].dispatchEvent(new Event('click'))
		}else if(e.key == "Escape"){ 
			keyCE.dispatchEvent(new Event('click'))
		}else if(e.key == "Backspace"){
			keyUndo.dispatchEvent(new Event('click'))
		}else if(e.key == "."){  //Not using && because it will continue to else statement and fire an error
			if(keyDot.disabled == false){
			keyDot.dispatchEvent(new Event('click'));
			}
		}else{
		window['key'+e.key].dispatchEvent(new Event('click'));
		}}
}
//[... document.querySelectorAll('.btn')].forEach(button => addEventListener("click", digit)); > Doesn't work right
display.addEventListener('keyup', pressButton);

//Just for fun let's color the primes
function primeColors(){
	function colorify(){display.style.color = `rgb(${Math.floor(Math.random()*1000)}, ${Math.floor(Math.random()*1000)}, ${Math.floor(Math.random()*1000)})`}
			if(display.value.match(/\d\.\d\d\d*|\d\.[1-9]\d*/)){display.style.color = ''}
			let num= display.value;
			if (Math.floor(num) != num){return};
			let n = Math.floor((num/2));
			if (n == 1 && num > 1){colorify(); return}else if(num <=1){display.style.color = ''};
					divide:while(n>1){
						if(num%n !== 0){
							n--;
	//There was no real reason for prefering this method over the other two methods, was easiest fix
							while(n>1){
							continue divide;
							}
						}else{
						display.style.color = '';
						break divide
						}
						colorify();
					}
				}





//Correct the display width
display.style.width = `${calcBody.clientWidth -10}px`;
