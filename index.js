// Review: Declare a Function Using a Function Expression
const foo = function() {
    return 'bar';
  };
  
  console.log(foo()); // bar
  
  // Declare a Function Using an Arrow Function
  const add = (parameter1, parameter2) => parameter1 + parameter2;
  console.log(add(2, 3)); // 5
  
  const twoAdder = x => x + 2;
  console.log(twoAdder(3)); // 5
  
  const sum = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
  };
  console.log(sum(1, 2)); // 3
  
  // Describe Situations Where Arrow Functions Are Used
  const nums = [1, 2, 3];
  const squares = nums.map(x => x ** 2);
  console.log(squares); // [1, 4, 9]
  console.log(nums); // [1, 2, 3]
  
  // Additional Functions
  const divide = () => 2000 / 100;
  console.log(divide()); // 20
  
  const square = num => num * num;
  console.log(square(5)); // 25
  