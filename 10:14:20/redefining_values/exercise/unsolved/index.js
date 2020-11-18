/*
  I bought 5 more apples. Re-assign the value of the variable
*/
console.log("connected");
var applesOwned = 5;
console.log(applesOwned);

if(applesOwned > 0) 
{applesOwned = 10};
console.log(applesOwned);

applesOwned = 5;
applesOwned += 5;
console.log("plus equals" + applesOwned);

/*
  Re-assign all the values of the names in the array to have capital first letters
*/
var names = ["jared", "john", "joe", "jim"];
var capitalizedNames = []
for(var i = 0; i < names.length; i++){
  if(names[i].length > 0){
    capitalizedNames.push((names[i][0].toUpperCase()) + (names[i].substring(1,names[i].length)))
  }
};
console.log(capitalizedNames);

for(var i = 0; i < names.length; i++){
  if(names[i].length > 0){
    names[i] = (names[i][0].toUpperCase()) + (names[i].substring(1,names[i].length))
  }
};
console.log(names);



/*
  employeeOne has been promoted to full time and the salary is now
  update the employee
*/
var employeeOne = {
  name: "Jill Bonaventure",
  age: 42,
  gender: "Female",
  salary: 32000,
  fullTime: false
}

employeeOne.salary = 45000;
console.log(employeeOne.salary);
console.log(employeeOne);

/*
  1. Dwight added 5000 to his savings and also moved all of his checking to his savings
  2. Michael opened up a savings account and moved 1000 from his check to his savings
  3. Pamela withdrew 200 from her checking
  4. Phyllis's stock account rose by 2%
*/
var bankAccounts = [
  {
    name: "Dwight Schrute",
    checking: 1000,
    savings: 25000
  },
  {
    name: "Michael Scott",
    checking: 2000
  },
  {
    name: "Pam Beasley",
    checking: 1252
  },
  {
    name: "Phyllis Vance",
    stocks: 86000
  }
]
bankAccounts[1] = {
  name: "Dwight Schrute",
  checking: 0,
  savings: 26000
};
console.log(bankAccounts[1]);

bankAccounts[2] = {
  name: "Michael Scott",
  checking: 1000,
  savings: 1000
}
console.log(bankAccounts[2]);

bankAccounts[3] = {}