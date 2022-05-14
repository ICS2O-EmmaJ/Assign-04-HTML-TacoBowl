// Created by: Emma Janani
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

 function displayCost() {
  // declaring variables
  let baseCost = "Please make a selection above.";
   
	// get user input
  let size = document.getElementById('size').value;

  // declaring constants for sizes
  const PEQUENA_COST = 7.45;
  const MEDIANA_COST = 9.35;
  const GRANDE_COST = 11.95;

  // calculating base cost using if statements
  if (size == "pequena") {
  	baseCost = PEQUENA_COST;
	}
	else if (size == "mediana") {
  	baseCost = MEDIANA_COST;
	}
	else if (size == "grande") {		
  	baseCost = GRANDE_COST;
	}    
   
  // determining how many toppings the user selected by counting number of checkboxes checked (code taken from https://www.techiedelight.com/count-number-check-boxes-javascript/)
  let numCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let numToppings = numCheckboxes.length;

  // declaring constant topping price
  const TOPPING_PRICE = 0.50;

  // determing topping cost
  let toppingCost = numToppings * TOPPING_PRICE;

  // declaring variables for side and drink
  let sideCost = 0;
  let sideDrink = 0;

  // declaring constants for side and drink
  const NACHOS_PRICE = 4.25;
  const NO_NACHOS = 0;
  const MARGARITA_PRICE = 8.15;
  const NO_MARGARITA = 0;

  // determining whether user wants chips and salsa or not by determining which radio button is selected (code taken from https://www.geeksforgeeks.org/how-to-check-whether-a-radio-button-is-selected-with-javascript/#:~:text=Using%20Input%20Radio%20checked%20property,id%20is%20check%20or%20not.)
  if(document.getElementById('yes').checked) {
    sideCost = NACHOS_PRICE;
  }
    
  if(document.getElementById('no').checked) {
    sideCost = NO_NACHOS;
  }

  // determining whether user wants a margarita or not by determining which radio button is selected (code taken from https://www.geeksforgeeks.org/how-to-check-whether-a-radio-button-is-selected-with-javascript/#:~:text=Using%20Input%20Radio%20checked%20property,id%20is%20check%20or%20not.)
  if(document.getElementById('yess').checked) {
    sideDrink = MARGARITA_PRICE;
  }
    
  if(document.getElementById('noo').checked) {
    sideDrink = NO_MARGARITA;
  }

  // calculating subtotal
  let subtotal = baseCost + toppingCost + sideCost + sideDrink;

  // calculating tax
  const HST = 0.13;
  let tax = subtotal * HST;

  // calculating total
  let total = subtotal + tax;
  
  // display the message
	document.getElementById('display-results').innerHTML = "Your subtotal is $" + subtotal.toFixed(2) +".<br>Your HST is $" + tax.toFixed(2) + ".<br>Your total is $" + total.toFixed(2) + ".";
}
