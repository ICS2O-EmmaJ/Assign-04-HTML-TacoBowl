// Created by: Emma Janani
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

 function displayCost() {
  // declare variables
  let baseCost = "Please make a selection above."
   
	// get user input
  let size = document.getElementById('size');
  let topping1 = document.getElementById('topping1');
  let topping2 = document.getElementById('topping2');
  let topping3 = document.getElementById('topping3');
  let topping4 = document.getElementById('topping4');
  let topping5 = document.getElementById('topping5');

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
   
