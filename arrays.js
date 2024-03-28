//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order

function sorting(){
    const words = ['Hey',there,"Wangesha",'Dan'];
    console.log(words.sort());
    console.log(words.reverse());
}

//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
let employee = [{id:1}, {name:"Agnes"}, {salary:[1000,2500,500,200]}];
employee.sort(function(a,b){
    return a.salary - (b.salary);
});
employee.forEach((person)=> console.log(employee.salary));

////Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function checkElements(){
    let arr=arr.forEach(element =>{
        if(element>0){
            console.log("positive");
        }else if(element<0){
            console.log("negative");
    }else{
        console.log("zero");
    }
    })
    
}