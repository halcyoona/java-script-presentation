function multiplyBy(){
	var num1 = document.getElementById("firstNumber").value;
	var num2 = document.getElementById("secondNumber").value;
	document.getElementById("result").innerHTML = num1 * num2; 
 	
}

function divideBy(){
	var num1 = document.getElementById("firstNumber").value;
	var num2 = document.getElementById("secondNumber").value;
	document.getElementById("result").innerHTML = num1 / num2; 
}

function add(){
	var num1 = document.getElementById("firstNumber").value;
	var num2 = document.getElementById("secondNumber").value;
	var x = parseInt(num1);
	var y = parseInt(num2);
	document.getElementById("result").innerHTML = x + y; 
}

function subtract(){
	var num1 = document.getElementById("firstNumber").value;
	var num2 = document.getElementById("secondNumber").value;
	var x = parseint(num1);
	var y = parseint(num2);
	document.getElementById("result").innerHTML = x - y; 
}

function reminder(){
	var num1 = document.getElementById("firstNumber").value;
	var num2 = document.getElementById("secondNumber").value;
	document.getElementById("result").innerHTML = num1 % num2; 
}

function power(){
	var num1 = document.getElementById("firstNumber").value;
	var num2 = document.getElementById("secondNumber").value;
	document.getElementById("result").innerHTML = num1 ** num2; 
}

function fib(){
	var index = parseInt(document.getElementById("firstNumber").value);
	var index1 = parseInt(document.getElementById("secondNumber").value);
	a = 0, b = 1, sum = 0;
	var output =" ";
	for(i = 0; i < index; i ++) {
		output += a + "  ";
		sum = a + b;
		a = b;
		b = sum;
		
	}

	document.getElementById("result").innerHTML = output;
	               
}

function squareRoot(){
	var index = parseInt(document.getElementById("firstNumber").value);
	var index1 = parseInt(document.getElementById("secondNumber").value);
	document.getElementById("result").innerHTML = (Math.sqrt(index)+"");
}

function fact() {
	var n = parseInt(document.getElementById("firstNumber").value);
	var res = 1;
    if (n == 0 || n == 1) {
        document.getElementById("result").innerHTML = 1;  // 0! = 1! = 1
    }
    else
    {
    	for (var i = n; i > 0; i--) {
    		res *= i;
    	}
    }
    document.getElementById("result").innerHTML = res;
}

function isPrime(){
	var num = parseInt(document.getElementById("firstNumber").value);
	var b = prime(num);
	if(b == true)
	{
		var x = 11;
		while(num >= x*x)
		{
			x = x + 2;
			if(num == x*x)
			{
				document.getElementById("result").innerHTML = false;
			}
		}
		document.getElementById("result").innerHTML = true;	
	}
	else
	{
		document.getElementById("result").innerHTML = false;
	}
}

function prime(num){
	if(num <= 1)
	{
		return false;
	}
	else
	{
		if(num == 2 || num == 3 || num == 5 || num == 7 || num == 11)
		{
			return true;
		}
		if(num % 2 == 0)
		{
			return false;
		}
		if(num % 3 == 0)
		{
			return false;
		}
		if(num % 5 == 0)
		{
			return false;
		}
		if(num % 7 == 0)
		{
			return false;
		}
		if(num % 11 == 0)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
}

function cos(){
	var num = parseInt(document.getElementById("firstNumber").value);
	var index1 = parseInt(document.getElementById("secondNumber").value);
	document.getElementById("result").innerHTML = (Math.cos(num));
}

function sin(){
	var num = parseInt(document.getElementById("firstNumber").value);
	document.getElementById("result").innerHTML = (Math.sin(num));
}

function tan(){
	var num = parseInt(document.getElementById("firstNumber").value);
	var index1 = parseInt(document.getElementById("secondNumber").value);
	document.getElementById("result").innerHTML = (Math.tan(num));
}

function fact() {
	var n = parseInt(document.getElementById("firstNumber").value);
	var res = 1;
    if (n == 0 || n == 1) {
        document.getElementById("result").innerHTML = 1;  // 0! = 1! = 1
    }
    else
    {
    	for (var i = n; i > 0; i--) {
    		res *= i;
    	}
    }
    document.getElementById("result").innerHTML = res;
}


function e(){
	document.getElementById('result').innerHTML = 2.718281828;
}

function pi(){
	document.getElementById('result').innerHTML = 3.14159;
}

function bin(){
	var n = parseInt(document.getElementById("firstNumber").value);
	document.getElementById('result').innerHTML = (n >>> 0).toString(2);
}