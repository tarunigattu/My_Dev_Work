 //Set up an associative array
 //The keys represent the size of the cone or cup
 //The values represent the cost of the cone or cup
 var conecup_prices = new Array();
 conecup_prices["WSmall"]=5;
 conecup_prices["WRegular"]=10;
 conecup_prices["WLarge"]=15;
 conecup_prices["WSmallCup"]=5;
 conecup_prices["WBowl"]=20;
 
 
 //Set up an associative array 
 //The keys represent the filling type
 //The value represents the cost of the filling 
 //We use this this array when the user selects a filling from the form
 var filling_prices= new Array();
 filling_prices["None"]=0;
 filling_prices["Vanilla"]=5;
 filling_prices["Cherry"]=5;
 filling_prices["Strawberry"]=7;
 filling_prices["Chocolate"]=8;
 filling_prices["Raspberry"]=10;

 


// getConeCupPrice() finds the price based on the size of the cone or cup.
// Here, we need to take user's the selection from radio button selection
function getConeCupPrice()
{  
    var conecupSizePrice=0;
    //Get a reference to the form id="icecreamform"
    var theForm = document.forms["icecreamform"];
    //Get a reference to the cone or cup the user Chooses name=selectedconecup":
    var selectedConeCup = theForm.elements["selectedconecup"];
    //Here since there are 5 radio buttons selectedConeCup.length = 5
    //We loop through each radio buttons
    for(var i = 0; i < selectedConeCup.length; i++)
    {
        //if the radio button is checked
        if(selectedConeCup[i].checked)
        {
            //we set Price to the value of the selected radio button
            conecupSizePrice = conecup_prices[selectedConeCup[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the conecupSizePrice
    return conecupSizePrice;
}

//This function finds the filling price based on the 
//drop down selection
function getFillingPrice()
{
    var icecreamFillingPrice=0;
    //Get a reference to the form id="icecreamform"
    var theForm = document.forms["icecreamform"];
    //Get a reference to the select id="filling"
    var selectedFilling = theForm.elements["filling"];

    //set icecreamFillingPrice equal to value user chose
    
    icecreamFillingPrice = filling_prices[selectedFilling.value];

    //finally we return icecreamFillingPrice
    return icecreamFillingPrice;
}


function getFillingPriceTwo()
{
    var icecreamFillingPrice=0;
    //Get a reference to the form id="icecreamform"
    var theForm = document.forms["icecreamform"];
    //Get a reference to the select id="filling2"
    var selectedFilling = theForm.elements["filling2"];
    //set icecreamFillingPrice equal to value user chose
    
    icecreamFillingPrice = filling_prices[selectedFilling.value];

    //finally we return icecreamFillingPrice
    return icecreamFillingPrice;
}

function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var icecreamPrice = getConeCupPrice() + getFillingPrice() + getFillingPriceTwo();

    if(icecreamPrice === null || icecreamPrice === 0){
        alert("Please select your Cone and Ice Cream Flavors!");
        return false;
    }
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the Ice Cream $"+icecreamPrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}