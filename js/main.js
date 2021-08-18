//shorthand for getting elements
let $ = function(id) { 
    return document.getElementById(id); 
};

//get the values from the interface
//starts or controller function
function getValues(){
    //get values from the page
    let startValue = $('startValue').value;
    let endValue = $('endValue').value;

    //attempt to parse values into ints
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //validation that input is an int
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        
        //call displayNumbers
        displayNumbers(numbers);
    }
    else alert("You must enter a number.")
}

//generate numbers from startvalue to the endvalue
//logic function(s)
function generateNumbers(sValue, eValue){

    let numbers = [];

    //we want to get all numbers from start to end
    for(let index = sValue; index <= eValue; index++){
        //this will execute in a loop until index = eValue
        numbers.push(index);
    } 
    return numbers;
}

//display numbers with even numbers in bold
//display or view function
function displayNumbers(numbers){

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {

        let className = "even";
        let number = numbers[index];

        //checking to see if the remainder of the number is equal to 0.
        if(number % 2 == 0){
            className = "even";
        }
        else {
            className = "odd";
        }
        
        //creates rows in table
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    $('results').innerHTML = templateRows;
}