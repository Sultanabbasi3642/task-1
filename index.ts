// was using chalk at the smae time with prompt but getting error
console.log("welcome to our online store WYSA");

interface product{
name:string,
price:number     }
/////ourproducts
let ourProducts:product[]=[
    {name:"book",price:1000},
    {name:"toy",price:500},
    {name:"glass",price:800},
    {name:"bottle",price:400},
    {name:"pillow",price:5000}]
//display
// import chalk from 'chalk'
import { log } from 'console';
    function displayProduct (){
        return   ourProducts.forEach((product,index) => {
            console.log(`${(index +1)}: Product name=${(product.name)} Product Price=${(product.price)}`);   
        })}
        displayProduct()
    /////////////////
    console.log("let us khow what u want");
 let cart :product[] = []


 function calculatetotalbill(cart:product[]):number{
    let total=0
    cart.forEach((product)=>{
        total += product.price
    })
    return total
 }
 function cartitems(indexofproduct:number){
    const selecteditems=ourProducts[indexofproduct -1]
    cart.push(selecteditems)
 };


 let prompt=require("prompt-sync")()
cartitems(prompt("Please select your products"))
 console.log("Your cart is:");
 cart.forEach((product,index) => {
    console.log(`${index +1},Product name:${product.name},Product price:${product.price}`);
 });


 console.log("your product has been added to cart....");


 while(true){
   console.log(`Do you want to add more product: (yes/no?)`);
 const useroutput=prompt().toLowerCase();
 if(useroutput === 'yes'){
    console.log('here are available products');
    displayProduct()
    cartitems(prompt("Please select your products::"))
    console.log("Your cart is:");
    cart.forEach((product,index) => {
       console.log(`${index +1},Product name:${product.name},Product price:${product.price}`);
    })  
 };
 if(useroutput=== 'no'){
   
   
    console.log("here is your total bill::",);
    break;
 }else{console.log("Invalid selection. Please select yes or no")}
}
 let totalbill =calculatetotalbill(cart)
 console.log(totalbill);
 
 console.log("thanks for shopping ");
 
 


