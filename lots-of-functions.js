console.log("---------------------------------------------------");

// sayHi
console.log("1. sayHi\n");
myName = "Bradley";
function sayHi(name){
    
    let newStr = console.log(`Hi, ${name}.\n`);
    return newStr;
}
sayHi(myName);

console.log("---------------------------------------------------");

// bigString
console.log("2. bigString\n");
let myString1 = "hi"
let myString2 = "hello"
let myString3 = "12345"
function bigString(str1, str2){
    if(str1.length == str2.length){
        console.log(`String1 and String2 are of equal size!\nString1: ${str1}\nString2: ${str2}\n`);
    }
    else if(str1.length > str2.length){
        console.log(`String1 is larger than String2!\nString1: ${str1}\nString2: ${str2}\n`);

    }
    else if(str1.length < str2.length){
        console.log(`String2 is larger than String1!\nString1: ${str1}\nString2: ${str2}\n`);

    }
}

bigString(myString2,myString3);
bigString(myString2,myString1);
bigString(myString1,myString2);

console.log("---------------------------------------------------");

// bigNumber
console.log("3. bigNumber\n");
let myNum1 = 100
let myNum2 = 200

function bigNumber(num1, num2){
    if(num1 === num2){
        console.log(`num1 and num2 are equal!\nnum1: ${num1}\nnum2: ${num2}\n`);
    }
    else if(num1 > num2){
        console.log(`num1 is greater than num2!\nnum1: ${num1}\nnum2: ${num2}\n`);

    }
    else if(num1 < num2){
        console.log(`num2 is greater than num1!\nSnum1: ${num1}\nnum2: ${num2}\n`);

    }
}

bigNumber(myNum1, 100);
bigNumber(myNum2, myNum1);
bigNumber(myNum1, myNum2);

console.log("---------------------------------------------------");

// fiveMore
console.log("4. fiveMore\n")
const myArray = [1,2,3,4,5,6,7,8,9,10];

function fiveMore(anArray){
    const newArray = [];
    let i = 0;
    for(let i = 0; i < anArray.length; i ++){
        if(anArray[i] % 2 != 0){
            newArray[i] = anArray[i] + 5;

        }
        else{
            newArray[i] = anArray[i];
        }
    }

    return newArray;
}

console.log(fiveMore(myArray)+ "\n");

console.log("---------------------------------------------------");

// arraySummer
console.log("5. arraySummer\n")

function arraySummer(anArray){
    let sum = 0;
    for(let i = 0; i < anArray.length; i ++){
     
        sum = sum + anArray[i] ;

    }

    return sum;
}

console.log(arraySummer(myArray) + "\n");


console.log("---------------------------------------------------");

// everyDivisible
console.log("6. everyDivisible\n")

let n = 7;
function everyDivisible(num){
    
    if(num < 10){
        for(let i = 1; i < 101; i ++){
        
            if(i % num == 0 ){
                console.log(i);
            }
        }

    }
    else{
        console.log("Your number is equal to or greater than 10!");
    }
    

}
everyDivisible(n);
everyDivisible(10);
everyDivisible(11);




