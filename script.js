
 /* set elements to variables, makes the code less messy */ 
var amountval = document.getElementById("amountVal");
var principal = document.getElementById("principal");
var rate = document.getElementById("rate");
var years = document.getElementById("years");
var result = document.getElementById('result');
var selectedRate = document.getElementById("selectedRate");
/*  Set default values for rate  */
var defaultRate =  document.getElementById('rate').value = 3.5;
 /* hide amountval error message  */
amountval.setAttribute("style", "display: none;");
/* display the default rate  */
CurrentInterestRate(defaultRate);


function compute()
{
    /* set values to variables */  
   var _principal = principal.value;
   var _rate = rate.value;
   var _years = years.value;
   var int_years = parseInt(_years);
   var interest = (_principal * _rate * _years) / 100;
 
  /* calculate future year */
   var futureDate = new Date(new Date().setFullYear(new Date().getFullYear() + int_years));
   var futureYear = futureDate.getFullYear();

   /* Check if prinicipal is empty and is not numeric */
   if(_principal ==='' || _principal == undefined || isNaN(_principal))
   { 
        var validationText = "Please enter a numeric amount value. Your entry must be a positive number.";
        amountval.innerHTML = validationText;
        amountval.setAttribute("style", "display: block;");
        document.getElementById("principal").focus();
       /*  if so then do not continue */
        return  
  }
  /* check for negative numbers */
  else if(Math.sign(_principal)=== -1 || _principal === '0' ){
    var validationText = "Please enter a positive number.";
    amountval.innerHTML = validationText;
    amountval.setAttribute("style", "display: block;");
    document.getElementById("principal").focus();
   /*  if so then do not continue */
    return   
  }
  else
  {
       /* hide the validation div */
        amountval.setAttribute("style", "display: none;");
         /* if all is good then Create the results */
        result.innerHTML =`If you deposit <span class="highlight-text">$${numberWithCommas(_principal)}</span>,<br>
        at an interest rate of <span class="highlight-text">${_rate}% </span>.<br>
        You will receive an amount of <span class="highlight-text">$${numberWithCommas(interest)}</span>,<br>
        in the year <span class="highlight-text">${futureYear}</span><br>`
  }


}
/* Helper functions */
const setfocus =()=>document.getElementById("principal").focus();
 function CurrentInterestRate(value) {
        document.getElementById("selectedRate").innerHTML = value + "%";
}  
/* format the currency in the result html  */
const numberWithCommas = (currency_value) =>currency_value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

