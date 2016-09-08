// Your js goes here
//numbersToPrint is 5: 0,1,1,2,3
//numbersToPrint is 1: 0
//numbersToPrint is 2: 0,1
//numbersToPrint is undefined: Please specify a integer > 0
function printHtml(limit){
	var html='';
	getFibonacci(limit).forEach(function(limit,index){
						//alert(limit+" "+index);
					if(isNaN(limit)){
						limit = "<div style = 'color:red' >"+limit+"</div>";
					}
					html = html + limit + "<br/>";

				});
	//console.log(html);
	return html;
}
function printFibonacci(){
				//gets the limit from textbox
				var limit = document.getElementById("limit").value;
				var output = document.getElementById("output");
				var html = '';
				//call the getfibonacci function
				// getFibonacci(limit).forEach(function(limit,index){
				// 	if(isNaN(limit)){
				// 		limit = "<div style = 'color:red' >"+limit+"</div>";
				// 	}
				// 	html = html + limit + "<br/>";

				// });
				output.innerHTML = "<br/>" + printHtml(limit);
			}
			function getFibonacci(numbersToPrint){

				if(parseInt(numbersToPrint) > 0){
					var fibnums = [];
					var i;
					for(i=0; i<numbersToPrint; i++){
						if(i === 0){
							fibnums[i] = 0;
							continue;
						}
						else if(i === 1){
							fibnums[i] = 1;
							continue;
						}
						fibnums[i] = fibnums[i-2] + fibnums[i-1];
					}
					return fibnums;	
				}
				else{
					return ["You have an invalid number. Please specify a integer > 0"];
				}
			}
			if (typeof module !== 'undefined' && module.exports !== null) { 
				exports.getFibonacci = getFibonacci;
				exports.printFibonacci = printFibonacci;
				exports.printHtml = printHtml;
			}


/* Code--version 1*/
// 	var firstnum = 0, secondnum = 1, nextnum, outputElement;

// 	if(parseInt(numbersToPrint) > 0) 
// 	{		
// 		if(parseInt(numbersToPrint) === 1)
// 		{
// 		outputElement = document.getElementById("output"); 
// 		outputElement.innerHTML = "";
// 		outputElement.innerHTML = "<br/>";
// 		outputElement.innerHTML += firstnum + "<br/>";
// 		// outputElement.innerHTML += secondnum + "<br/>";
// 		}	
// 		else if(parseInt(numbersToPrint) === 2)		
// 		{
// 			outputElement = document.getElementById("output"); 
// 		outputElement.innerHTML = "";
// 		outputElement.innerHTML = "<br/>";
// 		outputElement.innerHTML += firstnum + "<br/>";
// 		outputElement.innerHTML += secondnum + "<br/>";
// 		}
// 		else{
// 				outputElement = document.getElementById("output"); 
// 		outputElement.innerHTML = "";
// 		outputElement.innerHTML = "<br/>";
// 		outputElement.innerHTML += firstnum + "<br/>";
// 		outputElement.innerHTML += secondnum + "<br/>";

// 		// here we are checking > 2 because we have already printed two numbers of fiboncacci series above 
// 		//loop through the numbers to print limit till it becomes 0 (zero)
// 			while(numbersToPrint > 2){       
// 				nextnum   = firstnum + secondnum;//add the first value and second to get the next value
// 				firstnum  = secondnum;//assign second value to first
// 				secondnum = nextnum;//next value to second to find the next series

// 				outputElement.style.color = "#000000";
// 				outputElement.innerHTML += nextnum + "<br/>";
// 				 numbersToPrint--; //decrement the numbers to print limit by one 
// 			}

// 	}
// }else{
// 		var errormessage = document.getElementById("output");
// 		errormessage.style.color = "#FF0000";
// 		errormessage.innerHTML = "Please enter a value greater than 0!";
// 	}
// }

// if(module && module.exports!=null){

// }






