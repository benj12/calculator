// ===================================================================
// DO NOT MODIFY THE CODE BELOW - Call or reference them in your code as needed
// ===================================================================


let firstOperand;
let secondOperand;
let operatorClicked = false;
let operatorClicked2 = false;
let equalButtonActive = false;
let shouldResetDisplay = false;
let twoTimes;
let operator;
// Takes in a number and updates the readonly display input
function setDisplay(value) {
  const display = document.getElementById("display");
  display.value = String(parseFloat(value));
}

// Gets the value from the readonly display input
// Returns a number
// Doesn't need to be used but can help you verify
// the current value on the display
function getDisplay() {
  const display = document.getElementById("display");
  //parseFloat changes the string into a number we can use
  return display.value;
}

//Set up display to show zero when starting
setDisplay(0);

console.log("Initial value of display: ", getDisplay());

// ===================================================================
// DO NOT MODIFY THE CODE Above - Call or reference them in your code as needed
// ===================================================================

/**
 * Main input handler called from HTML buttons
 * This function receives ALL button clicks and routes them to the appropriate handler
 * @param {string} input - The input value from button clicks
 *
 * HINT: This function should:
 * 1. Check if input is a number (0-9) and handle number input
 * 2. Check if input is an operator (+, -, *, /) and handle operator input
 * 3. Check if input is a decimal point (.) and handle decimal input( )
 * 4. Check if input is equals (=) and execute the operation
 * 5. Check if input is clear (C) and reset the calculator
 * 6. Don't forget to call setDisplay() at the end to refresh the screen!
 */
function handleInput(input) {
  console.log(`Button clicked: ${input}`);
  // Your code here
  // Use if statements to check what type of input was received
  // Then call the appropriate helper function
  // you may need to use parseFloat
  // use typeof to check data types
  console.log(firstOperand);
  if(input === "0" || input === "1" || input === "2" || input === "3" || input === "4" || input === "5" || input === "6" || input === "7" || input === "8" || input === "9" ) {
    handleNumber(input);
  } else if(input === "+" || input === "-" || input === "*" || input === "/" || input === "=") {
    handleOperator(input);
  } else if(input === "C") {
    resetCalculator();
  }

  // Don't forget to call setDisplay() at the end!
}

// TODO: Create your arithmetic operation functions here
// You will need: add, subtract, multiply, and divide functions
// Each should take two parameters (first, second) and return the result
// Don't forget to add console.log statements for debugging!
// Remember: division should check for division by zero and return "Error"


/**
 * 
 * @param {double} firstOperand 
 * @param {double} secondOperand 
 */

function add() {
  console.log("firstOperand and secondOperand added together is ", firstOperand + secondOperand);
  return firstOperand + secondOperand;
}


/**
 * 
 * @param {double} firstOperand 
 * @param {double} secondOperand 
 * @returns 
 */
function subtract() {
  console.log(`${secondOperand} subtracted from ${firstOperand} is ${firstOperand-secondOperand}`);
  return firstOperand-secondOperand;
}

/**
 * 
 * @param {double} firstOperand 
 * @param {double} secondOperand 
 */

function multiply() {
  console.log(`${firstOperand} multiplied by ${secondOperand} is ${firstOperand*secondOperand}`);
  return firstOperand*secondOperand;
}

/**
 * 
 * @param {double} firstOperand 
 * @param {double} secondOperand 
 * @returns 
 */

function divide () {
  if(secondOperand === 0) {
    console.warn("WARNING: Can't divide by 0");
    console.error("Can't divide by 0!");
    setDisplay("Error");
    shouldResetDisplay = true;
    return "Error";
  } else {
    return firstOperand/secondOperand;
  }
}

/**
 * Handles number input (0-9)
 * @param {string} number - The number that was clicked
 */
function handleNumber(number) {
  // Your code here
  twoTimes = 0;
  let tempNum = getDisplay();

  //commented out || equalButtonActive || operatorClicked
  if (tempNum === "Error") {
    shouldResetDisplay = true;
  }
  if(parseFloat(tempNum) == 0 || operatorClicked || equalButtonActive) {
    if(equalButtonActive) {
      firstOperand = null;
      operator = null;
    }
    setDisplay(number);
    operatorClicked = false;
    equalButtonActive = false;
  } else {
    setDisplay(tempNum + number);
  }
  // This function should update the display with setDisplay
  // for example, if we have the number 9 already and are adding another 9
  // Consider: Are we starting fresh? Continuing a number?
}

/**
 * Handles decimal point input - This is an Optional Stretch
 */
function handleDecimal() {
  // Your code here
  // Make sure you don't add multiple decimal points to one number
}



/**
 * Handles operator input (+, -, *, /)
 * @param {string} nextOperator - The operator that was clicked
 */
function handleOperator(nextOperator) {
  // Your code here
  // Store the operator

  // Prepare for the second number input

  if(getDisplay() === "Error" || shouldResetDisplay) {
    resetCalculator();
    return;
  }
  if(twoTimes >= 2){
    firstOperand = parseFloat(getDisplay());

    operatorClicked=true;
    operatorClicked2=true;
    if(nextOperator == "=") {
      equalButtonActive = true;
    }
    else {
      equalButtonActive = false;
      operator = nextOperator;
    }
  }
  else if((!firstOperand && nextOperator !== "=") || equalButtonActive) {
    firstOperand = parseFloat(getDisplay());
    operatorClicked = true;
    operatorClicked2 = true;
    operator = nextOperator;
    twoTimes++;
    equalButtonActive = false;
  } else if(firstOperand && operatorClicked2 && twoTimes < 2) {
    secondOperand = parseFloat(getDisplay());
    executeOperation(operator);
    twoTimes++;
    operatorClicked = true;
    if(nextOperator === "=") {
      equalButtonActive = true;
      operatorClicked2 = false;
      operator = null;
    } else {
      operator = nextOperator;

      operatorClicked2 = true;
    }
  }

  
}

/**
 * Executes the calculation when = is pressed
 */
function executeOperation(operator) {
  // Your code here
  // Use if/else statements to call the right operation function
  switch (operator) {
    case "+":
      firstOperand = add();
      break;
    case "-":
      firstOperand = subtract();
      break;
    case "*":
      firstOperand = multiply();
      break;
    case "/":
      firstOperand = divide();
      break;
  }
  setDisplay(firstOperand);
  // Handle the result and any errors
}

/**
 * Resets the calculator (C button)
 */
function resetCalculator() {
  // Your code here
  // Reset all state variables and display
  firstOperand = null;
  secondOperand = null;
  equalButtonActive = false;
  operatorClicked = false;
  operatorClicked2 = false;
  twoTimes = 0;
  operator = null;
  setDisplay(0);
}
