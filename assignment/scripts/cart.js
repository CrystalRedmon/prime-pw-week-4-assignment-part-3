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

////
///
/* //////////////////This one was kicking my tail. Will return to this one////////////
const  maxItems = 5;

function isFull(){
if(basket>=maxItems){
    return true;
}else{
    return false;
}
};

console.log(basket);
console.log("The basket is empty. (expect false)", isFull());
//Adding items to basket to test the isFull function
basket= ['pie', 'apples', 'greens', 'bread', 'grapes'];
console.log('Added five items (expect true)', isFull());



function addItems(item){
    if(isFull()===true){
    return false;
    }else{
    basket.push(item);
    return true;
    }  
    
}


console.log("The basket already has", basket.length, "items (expect false)", addItems('berries'));

//Reset basket to empty to test addItem function 
empty();
console.log(basket);
console.log("The basket is empty and we can add an item (expect true)", addItem('apple fritter'));

*/

function removeItem(item){
    if(basket.indexOf(item)===-1){
        return null
    }else{
       return basket.splice(basket.indexOf(item), 1);
    }
}

basket =['toothpaste', 'soap', 'hairspray', 'deodorant'];
console.log(basket)
console.log("This item was in the basket (expect removed item", removeItem("hairspray"));

console.log('This item was not in the basket (expect "null")', removeItem('banana'))


