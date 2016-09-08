 //Set up an associative array
 //The keys represent the type of milk
 //The values represent the cost of the milk.
 var milk_prices = new Array();
 milk_prices["Skim"]=20;
 milk_prices["Whole"]=25;
 milk_prices["TwoPercent"]=15;
 
 
 
 //Set up an associative array 
 //The keys represent the filling type
 //We use this this array when the user selects a filling from the form
 var flavor_prices= new Array();
 flavor_prices["None"]=0;
 flavor_prices["Vanilla"]=5;
 flavor_prices["Cherry"]=5;
 flavor_prices["Strawberry"]=7;
 flavor_prices["Chocolate"]=8;
 flavor_prices["Raspberry"]=10;

 
 
 
// getMilkSelected() finds the price based on the type of milk selected.
// Here, we need to take user's the selection from radio button selection
function getMilkSelected()
{  
    var milkPrice=0;
    //Get a reference to the form id="milkshakesform"
    var theForm = document.forms["milkshakesform"];
    //Get a reference to the milk the user Chooses name=selectedmilk":
    var selectedMilk = theForm.elements["selectedmilk"];
    //Here since there are 3 radio buttons selectedMilk.length = 3
    //We loop through each radio buttons
    for(var i = 0; i < selectedMilk.length; i++)
    {
        //if the radio button is checked
        if(selectedMilk[i].checked)
        {
            //we set milkPrice to the value of the selected radio button
            milkPrice = milk_prices[selectedMilk[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the milkPrice
    return milkPrice;
}

//This function finds the filling price based on the 
//drop down selection
function getFlavorPrice()
{
    var icecreamFlavorPrice=0;
    //Get a reference to the form id="milkshakesform"
    var theForm = document.forms["milkshakesform"];
    //Get a reference to the select id="flavor"
    var selectedFlavor = theForm.elements["flavor"];

    
    //set icecreamFlavorPrice equal to value user chose
    //For example filling_prices["Lemon".value] would be equal to 5
    icecreamFlavorPrice = flavor_prices[selectedFlavor.value];

    //finally we return icecreamFlavorPrice
    return icecreamFlavorPrice;
}


function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var discount = 0.05;
    var MilkShakePrice = getMilkSelected() + getFlavorPrice();
    var DiscountPrice = (getMilkSelected() + getFlavorPrice())* discount;
    var afterdiscountTotalPrice = MilkShakePrice - DiscountPrice;

    if(afterdiscountTotalPrice === null || afterdiscountTotalPrice === 0 )
    {
        alert(" Milk and Ice Cream Flavor should be entered!");
        return false;
    }
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the Milk Shake After Discount $"+afterdiscountTotalPrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}