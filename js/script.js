// Created by: Emma Janani
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

 function displayCost() {
  // declare constants
  let cost = "Please make a selection above."
   
	// get user input
  let size = document.getElementById('size');
  let toppings = document.getElementById('day');

  // if statements
  if (size == pequena) {
	cost = "7.45"
	}
	else if (size == mediana) {
	cost = "9.35"
	}
	else if (size == grande) {		
	cost = "11.95"
	}
	
  	// display the greeting
  	document.getElementById('display-results').innerHTML = cost
}
   
