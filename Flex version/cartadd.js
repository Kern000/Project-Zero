const foodIDs = {
    
"m1": 4.79, 
"m2": 1.69,
"m3": 4.69, 
"m4": 3.39, 
"m5": 4.39, 
"m6": 3.39, 
"m7": 3.69, 
"m8": 4.29, 
"m9": 2.29, 
"m10": 2.69, 
"m11": 3.39, 
"m12": 4.29, 
"m13": 2.69, 
"m14": 3.29, 
"m15": 3.29, 
"m16": 2.69, 
"m17": 4.39, 
"m18": 3.39

}

let inStock = {
    
    "m1": true, 
    "m2": true,
    "m3": true, 
    "m4": true, 
    "m5": true, 
    "m6": true, 
    "m7": true, 
    "m8": true, 
    "m9": true, 
    "m10": true, 
    "m11": true, 
    "m12": true, 
    "m13": true, 
    "m14": true, 
    "m15": true, 
    "m16": true, 
    "m17": true, 
    "m18": true
    
    }
    
let addedToCart = []
let total = 0


const toastSelected1 = document.getElementById('toast1st');
const toastInstance1 = new bootstrap.Toast(toastSelected1);

const toastSelected2 = document.getElementById('toast2nd');
const toastInstance2 = new bootstrap.Toast(toastSelected2);


document.getElementById("m1").addEventListener("click", function() {

    let key = "m1"
    let value = foodIDs["m1"]

    if (inStock["m1"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m1"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

document.getElementById("m2").addEventListener("click", function() {

    let key = "m2"
    let value = foodIDs["m2"]

    if (inStock["m2"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m2"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

document.getElementById("m3").addEventListener("click", function() {

    let key = "m3"
    let value = foodIDs["m3"]

    if (inStock["m3"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m3"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

document.getElementById("m4").addEventListener("click", function() {

    let key = "m4"
    let value = foodIDs["m4"]

    if (inStock["m4"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m4"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

document.getElementById("m5").addEventListener("click", function() {

    let key = "m5"
    let value = foodIDs["m5"]

    if (inStock["m5"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m5"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

document.getElementById("m6").addEventListener("click", function() {

    let key = "m6"
    let value = foodIDs["m6"]

    if (inStock["m6"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m6"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

document.getElementById("m7").addEventListener("click", function() {

    let key = "m7"
    let value = foodIDs["m7"]

    if (inStock["m7"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m7"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

document.getElementById("m8").addEventListener("click", function() {

    let key = "m8"
    let value = foodIDs["m8"]

    if (inStock["m8"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m8"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

document.getElementById("m9").addEventListener("click", function() {

    let key = "m9"
    let value = foodIDs["m9"]

    if (inStock["m9"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m9"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

document.getElementById("m10").addEventListener("click", function() {

    let key = "m10"
    let value = foodIDs["m10"]

    if (inStock["m10"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m10"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

document.getElementById("m11").addEventListener("click", function() {

    let key = "m11"
    let value = foodIDs["m11"]

    if (inStock["m11"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m11"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

document.getElementById("m12").addEventListener("click", function() {

    let key = "m12"
    let value = foodIDs["m12"]

    if (inStock["m12"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m12"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

document.getElementById("m13").addEventListener("click", function() {

    let key = "m13"
    let value = foodIDs["m13"]

    if (inStock["m13"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m13"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

document.getElementById("m14").addEventListener("click", function() {

    let key = "m14"
    let value = foodIDs["m14"]

    if (inStock["m14"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m14"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

document.getElementById("m15").addEventListener("click", function() {

    let key = "m15"
    let value = foodIDs["m15"]

    if (inStock["m15"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m15"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

document.getElementById("m16").addEventListener("click", function() {

    let key = "m16"
    let value = foodIDs["m16"]

    if (inStock["m16"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m16"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

document.getElementById("m17").addEventListener("click", function() {

    let key = "m17"
    let value = foodIDs["m17"]

    if (inStock["m17"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m17"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

document.getElementById("m18").addEventListener("click", function() {

    let key = "m18"
    let value = foodIDs["m18"]

    if (inStock["m18"] == true){
        addedToCart.push({key, value});

        toastInstance1.show()
        
        total += foodIDs["m18"]

        console.log(addedToCart);
        console.log(total)}
    else {
        toastInstance2.show()    }
});

