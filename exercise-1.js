/**
 * Basic JavaScript
 * Official documentation:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript
 * 
 * Author: Bilal Wani
 * Date: 15-Jan-2022
 * 
 * Company: BlazeClan Technologies Pvt Ltd
 */

function GetStarted() {
    console.log("Getting started ");
    let sum = 0;
    for (i = 0; i < 10; i++) {
        sum += i;
    }

    console.log("Sum = " + sum);

    //Array
    let fruits = ['mango', 'apple', 'pineapple', 'organge', 'banana'];

    fruits.shift();

    //Remove an item by index position
    fruits.splice(0, 2);

    //loop thourgh array elements
    fruits.forEach(element => {
        console.log("Index = " + fruits.indexOf(element) + "   Name: " + element);
    });

    console.log("Keys \r\n" + Object.keys(fruits));

}

function RegExp() {
    const myRe = /d(b+)(d)/i
    const myArray = myRe.exec('cdbBdbsbz')

    console.log(myArray);
}

//execution thread
// GetStarted();
RegExp();