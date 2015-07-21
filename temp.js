/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  In the HTML, have one input field where someone can enter
  in a temperature. Then have a radio button group where
  Celsius or Fahrenheit can be selected as the scale that the
  number should be converted to. Then a button that,
  when clicked, displays the converted.
*/

function toCelsius (inputNumber) {
var answer = (inputNumber  -  32)  * (5/9) ;
 return answer;
}


function toFahrenheit (inputNumber) {
var answer = inputNumber * (9/5) + 32 ; 
  return answer;
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function Convert (e) {  
  // This will actually return an array containing both of the radio buttons
  // so you will need to look at each item in the array and see if the 'checked'
  // property is true (sample code provided)
  var radioButtonArray = document.getElementsByName("conversion_type");
  var inputNumber = document.getElementById("temp").value;

  // for loop
  for (var index = 0; index < radioButtonArray.length; index++)
    {
      if (radioButtonArray[index].checked &&  radioButtonArray[index].value === 'celsius') {
        var answerElement = document.getElementById("answerOutput");
        answerElement.innerHTML+= toCelsius(inputNumber);
      }
     if (radioButtonArray[index].checked &&  radioButtonArray[index].value === 'fahrenheit') {
        var answerElement = document.getElementById("answerOutput");
        answerElement.innerHTML+= toFahrenheit(inputNumber);
      }
    }
  // end for loop
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// Assign a function to be executed when the button is clicked
button.onclick = Convert;
