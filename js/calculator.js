var output;

function getInput(id){
	var inputvalue = document.getElementById(id).value;
	output = document.getElementById("calciscreen");
	output.value += inputvalue;
}
function clearCalciScreen(){
	document.getElementById("calciscreen").value = "";
}
function calculateInput(){
	var stringvalue = output.value;
	var pattern1 = /(x|\-|\+|\/)/g;
	var n = stringvalue.search(pattern1);
	//console.log(n);
	// var num1 = stringvalue .substr(0, stringvalue.indexOf('x') );
	// var num2 = stringvalue .substr(stringvalue.indexOf('x')+1,stringvalue.length);
	 var num1 = stringvalue .substr(0, n);
	 var num2 = stringvalue .substr(n+1,stringvalue.length);
	//console.log(stringvalue[n]);

	if(stringvalue.indexOf('.') === -1){
			var a = parseInt(num1);
			var b = parseInt(num2);
		if(stringvalue[n] === '-'){
			var caloutput = a - b;
		}
		else if(stringvalue[n] === '+'){
			var caloutput = a+b;
		}
		else if(stringvalue[n] === 'x'){
			var caloutput = a * b;
		}
		else{
			var caloutput = a / b;
		}
		document.getElementById("calciscreen").value = caloutput;
	}
	else{
		var a = parseFloat(num1);
		var b = parseFloat(num2);
		if(stringvalue[n] === '-'){
			var caloutput1 = a - b;
		}
		else if(stringvalue[n] === '+'){
			var caloutput1 = a+b;
		}
		else if(stringvalue[n] === 'x'){
			var caloutput1 = a * b;
		}
		else{
			var caloutput1 = a / b;
		}
		document.getElementById("calciscreen").value = caloutput1;
	}

	
}

// division symbol
