//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order

// function reversedStringsInArray(){
//     const words = (['Hey',"there","Wangesha",'Dan']);
//     constreversedWords = arr.map(str => [...str].reverse().join(''));
//     console.log(reversedwords);
//     //console.log(words.reverse());
// }
function reversedStringsInArray(arr){
const reversedStrings = arr.map(str => [...str].reverse().join(''));
console.log(reversedStrings);}
reversedStringsInArray(["Kitui","Nairobi","Machakos","Nakuru"]);

//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.

function sortBySalary(employees){
    return employees.sort((a,b) => a.salary - b.salary);
}

const employees = [
    {id: 1, name:'Agnes', salary: 50000},
    {id: 2, name:'Wangesha',salary: 80000},
    {id: 3, name:'Redempta',salary:20000}
]
const sortedEmployees = sortBySalary(employees);
console.log(sortedEmployees);



//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function checkElements(array,index){
const number = array[index]
    if(number>0){
        return number + "is positive";
    }else if(number<0){
        return number + "is negative";
    }else{
        return number + "is zero";
    }  
}
const numbers = [10, -10, 0, 5, -60];
console.log(checkElements(numbers, 1));


//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function multiplication(numbers){
    numbers.forEach((number) =>{
    console.log(number*2);
    });
}
multiplication([20,30,40,50]);

//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function changeArray(arr){
 const firstFour= arr.slice(0,4).map(item=>item*8); 
 const lastTwo= arr.slice(-2).map(item=> item+5);
 const newArr = firstFour.concat(lastTwo);
 console.log(newArr);
}
changeArray([numbers]);
