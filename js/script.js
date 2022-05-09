// Created by: Emma Janani
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

 function displayCost() {
  // declaring variables
  let baseCost = "Please make a selection above.";
   
	// get user input
  let size = document.getElementById('size').value;

  // calculating base cost using if statements
  if (size == "pequena") {
  	baseCost = 7.45;
	}
	else if (size == "mediana") {
  	baseCost = 9.35;
	}
	else if (size == "grande") {		
  	baseCost = 11.95;
	}    
   
  // determining how many toppings the user selected by counting number of checkboxes checked (code taken from https://www.techiedelight.com/count-number-check-boxes-javascript/)
  let numCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let numToppings = numCheckboxes.length;

  // declaring constant topping price
  const TOPPING_PRICE = 0.50;

  // determing topping price
  let toppingCost = numToppings * TOPPING_PRICE;

  // declaring variables
  let sideCost = 0;

  // determining whether user wants a side order or not by determining which radio button is selected (code taken from https://www.geeksforgeeks.org/how-to-check-whether-a-radio-button-is-selected-with-javascript/#:~:text=Using%20Input%20Radio%20checked%20property,id%20is%20check%20or%20not.)
  if(document.getElementById('yes').checked) {
    sideCost = 4.00;
  }
    
  if(document.getElementById('no').checked) {
    sideCost = 0;
  }

  // calculating subtotal
  let subtotal = baseCost + toppingCost + sideCost;

  // calculating tax
  const HST = 0.13;
  let tax = subtotal * HST;

  // calculating total
  let total = subtotal + tax;
  
  // display the greeting
	document.getElementById('display-results').innerHTML = "Your subtotal is $" + subtotal.toFixed(2) +".<br>Your HST is $" + tax.toFixed(2) + ".<br>Your total is $" + total.toFixed(2) + ".";
}
