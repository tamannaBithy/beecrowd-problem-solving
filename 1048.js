// The company ABC decided to give a salary increase to its employees, according to the following table:

// Salary	Readjustment Rate
// 0 - 400.00
// 400.01 - 800.00
// 800.01 - 1200.00
// 1200.01 - 2000.00
// Above 2000.00

// 15%
// 12%
// 10%
// 7%
// 4%

// Read the employee's salary, calculate and print the new employee's salary, as well the money earned and the increase percentual obtained by the employee, with corresponding messages in Portuguese, as the below example.
// Input
// The input contains only a floating-point number, with 2 digits after the decimal point.

// Output
// Print 3 messages followed by the corresponding numbers (see example) informing the new salary, the among of money earned (both must be shown with 2 decimal places) and the percentual obtained by the employee.

const salary = 800.01;

function calculate(increment) {
  const earnedMoney = (salary * increment) / 100;
  const newSalary = earnedMoney + salary;

  console.log(newSalary.toFixed(2));
  console.log(earnedMoney.toFixed(2));
  console.log(increment + " %");
}

if (0 <= salary && salary <= 400) {
  calculate(15);
} else if (400 < salary && salary <= 800) {
  calculate(12);
} else if (800 < salary && salary <= 1200) {
  calculate(10);
} else if (1200 < salary && salary <= 2000) {
  calculate(7);
} else {
  calculate(4);
}
