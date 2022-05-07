// Created by: Emma Janani
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

 function displayCost() {
  // declaring variables
  let baseCost = "Please make a selection above."
   
	// get user input
  let size = document.getElementById('size');

  // determining the number of checkboxes checked (number of toppings selected)
  let checkboxes =
document.querySelectorAll('input[type="checkbox"]:checked');
  let numToppings = checkboxes.length;

  // declaring constant price
  const TOPPING_PRICE = 0.50

  toppingCost = numToppings * TOPPING_PRICE

  // if statements
  if (size == "pequena") {
	baseCost = "The cost is 7.45"
	}
	else if (size == "mediana") {
	baseCost = "The cost is 9.35"
	}
	else if (size == "grande") {		
	baseCost = "The cost is 11.95"
	}

  const TOPPINGPRICE = 0.50
  toppingNumber = 
  topping cost = 
   
  // display the greeting
	document.getElementById('display-results').innerHTML = baseCost
}
   
