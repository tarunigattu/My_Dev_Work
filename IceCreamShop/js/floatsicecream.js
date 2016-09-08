 //Set up an associative array.
 //The keys represent the type of soda.
 //The values represent the cost of soda.
 var soda_prices = new Array();
 soda_prices["Coke"]=10;
 soda_prices["Pepsi"]=10;
 soda_prices["DrPepper"]=10;

 
 
 //Set up an associative array 
 //The keys represent the filling type
 //The value represents the cost of the filling
 var VanillaSingleScoop = 5;
 var CherrySingleScoop = 5;
 var StrawberrySingleScoop = 7;
 var ChocolateSingleScoop = 8;
 var RaspberrySingleScoop = 10;

 
 
 
// getSodaPrice() finds the price based on the type of soda.
// Here, we need to take user's the selection from radio button selection
function getSodaPrice()
{  
    var sodaPrice=0;
    //Get a reference to the form id="floatsform"
    var theForm = document.forms["floatsform"];
    //Get a reference to the cake the user Chooses name=selectedsoda":
    var selectedSoda = theForm.elements["selectedsoda"];
    //Here since there are 3 radio buttons selectedSoda.length = 3
    //We loop through each radio buttons
    for(var i = 0; i < selectedSoda.length; i++)
    {
        //if the radio button is checked
        if(selectedSoda[i].checked)
        {
            //we set sodaPrice to the value of the selected radio button
            sodaPrice = soda_prices[selectedSoda[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the sodaPrice
    return sodaPrice;
}

//This function finds the filling price based on the 
//drop down selection
function getFillingPriceOne()
{
    var icecreamFlavorPrice=0;
    //Get a reference to the form id="floatsform"
    var theForm = document.forms["floatsform"];
    //Get a reference to the select id="vanillascoop"
    var selectedFillingCount = document.getElementById("vanillascoop").value;

    
    //set icecreamFlavorPrice equal to value user chose
    icecreamFlavorPrice = selectedFillingCount * VanillaSingleScoop;

    //finally we return icecreamFlavorPrice
    return icecreamFlavorPrice;
}


function getFillingPriceTwo()
{
    var icecreamFlavorPrice=0;
    //Get a reference to the form id="floatsform"
    var theForm = document.forms["floatsform"];
    //Get a reference to the select id="cherryscoop"
    var selectedFillingCount = document.getElementById("cherryscoop").value;

    
    //set icecreamFlavorPrice equal to value user chose
    icecreamFlavorPrice = selectedFillingCount * CherrySingleScoop;

    //finally we return icecreamFlavorPrice
    return icecreamFlavorPrice;
}

function getFillingPriceThree()
{
    var icecreamFlavorPrice=0;
    //Get a reference to the form id="floatsform"
    var theForm = document.forms["floatsform"];
    //Get a reference to the select id="strawberryscoop"
    var selectedFillingCount = document.getElementById("strawberryscoop").value;

    
    //set icecreamFlavorPrice equal to value user chose
    icecreamFlavorPrice = selectedFillingCount * StrawberrySingleScoop;

    //finally we return icecreamFlavorPrice
    return icecreamFlavorPrice;
}

function getFillingPriceFour()
{
    var icecreamFlavorPrice=0;
    //Get a reference to the form id="floatsform"
    var theForm = document.forms["floatsform"];
    //Get a reference to the select id="chocolatescoop"
    var selectedFillingCount = document.getElementById("chocolatescoop").value;

    
    //set icecreamFlavorPrice equal to value user chose
    icecreamFlavorPrice = selectedFillingCount * ChocolateSingleScoop;

    //finally we return icecreamFlavorPrice
    return icecreamFlavorPrice;
}


function getFillingPriceFive()
{
    var icecreamFlavorPrice=0;
    //Get a reference to the form id="floatsform"
    var theForm = document.forms["floatsform"];
    //Get a reference to the select id="raspberryscoop"
    var selectedFillingCount = document.getElementById("raspberryscoop").value;

    
    //set icecreamFlavorPrice equal to value user chose
    icecreamFlavorPrice = selectedFillingCount * RaspberrySingleScoop;

    //finally we return icecreamFlavorPrice
    return icecreamFlavorPrice;
}




function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var discount = 0.05;
    var FloatPrice = getSodaPrice() + getFillingPriceOne() + getFillingPriceTwo() + getFillingPriceThree() + getFillingPriceFour() + getFillingPriceFive();
    var Discountedprice = (getSodaPrice() + getFillingPriceOne() + getFillingPriceTwo() + getFillingPriceThree() + getFillingPriceFour() + getFillingPriceFive())*discount;
    //display the result

    var TotalPriceAfterDiscount = FloatPrice - Discountedprice;

    if(FloatPrice === null || FloatPrice === 0 || FloatPrice < 0)
    {
        alert("Select a Soda and Any Number of Scoops You like!");
        return false;
    }
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the Float after Discount $"+TotalPriceAfterDiscount;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}