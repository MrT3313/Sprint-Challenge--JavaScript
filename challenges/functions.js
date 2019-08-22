// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

  const HOC = (a,b, CALLBACK) => {
    CALLBACK(a,b)
  }

  const printCallback = (item1, item2) => {
    console.log(`i ate ${item1} & ${item2} today`)
    return `i ate ${item1} & ${item2} today`
  }
  HOC('taco', 'jelly', printCallback)

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns 
  *     "Hello first-name last-name, nice to meet you!"
*/

  const sum_callback = (a,b) => {
    console.log(a + b)
    return a + b
  }
  // HOC(2,5, sum_callback)

  const multiply_callback = (a,b) => {
    console.log(a * b) 
    return a * b 
  }
  // HOC(2,5, multiply_callback)

  const greeting = (f_name, l_name) => {
    console.log(`Hello ${f_name} ${l_name}, nice to meet you!`)  
    return `Hello ${f_name} ${l_name}, nice to meet you!`
  }

/* Step 3: Check your work by un-commenting the following calls to consume(): */
HOC(2,2,sum_callback); // 4
HOC(10,16,multiply_callback); // 160
HOC("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!

// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

  // -- the nested function is declared @ or below the nested scope of `ìnternal` variable declaration 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();