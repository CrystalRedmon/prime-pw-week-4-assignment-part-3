console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket=[];
console.log(basket);
///
function addItem(item){
    basket.push(item);
    return true;
}

addItem('bananas');
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

////
function listItems(){
    for(let i=0; i<basket.length; i++){
        console.log(basket[i]);
    }
}
addItem('milk'); ///added another item and 
listItems();
////

function empty(){
    basket=[];
}

empty();
console.log(basket)
////////////////////////////////////////////////
//////// Stretch Goals
//Q1
const  maxItems = 5;
//Q2
function isFull(){
if(basket.length<maxItems){
    return false;
}else{
    return true
}
};
console.log("The basket has", basket.length, "items and the basket can hold", maxItems, "items.");
console.log("The basket is empty. (expect false)", isFull());
//Adding items to basket to test the isFull function
basket= ['pie', 'apples', 'greens', 'bread', 'grapes'];
console.log("The basket has", basket.length, "items and the basket can hold", maxItems, "items.");

console.log('Is the basket full? (expect true)', isFull());

///////Q3
///////////////Updated addItems function
function addItems(item){
    if(isFull()===true){    
        return false; 
        }else{
            basket.push(item);
            return true;
        }  
}
    
console.log("Were we able to add the berries to the basket(expect false)?", addItems('berries'));

//Reset basket to empty to test addItem function 
empty();
console.log(basket.length);
console.log("The basket is empty. Can we can add an item now? (expect true)", addItem('apple fritter'));
console.log("I just put something in the basket(expect apple fritter)", basket);

basket.push('bread', 'tissue', 'apples', 'bananas');
console.log("The basket has", basket.length, "items and the basket can hold", maxItems, "items.");
console.log('Can I put candy in the basket? (expect fasle)', addItems('candy'))

//////Q4

function removeItem(item){
    if(basket.indexOf(item)===-1){
        return null
    }else{
       return basket.splice(basket.indexOf(item), 1);
    }
}

basket =['toothpaste', 'soap', 'hairspray', 'deodorant'];
console.log(basket)
console.log("This item was in the basket (expect hairspray)", removeItem("hairspray"));

console.log('This item was not in the basket (expect "null")', removeItem('banana'));
