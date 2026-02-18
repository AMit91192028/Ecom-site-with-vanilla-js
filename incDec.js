import { getCartProductFromLS } from "./getCartProductLs.";
import { updatedCartProductTotal } from "./updateCartProductTotal";

export const incDec=(event,id,stock,price)=>{
    const currentCardElement=document.querySelector(`#card${id}`);
    const productQuantity=currentCardElement.querySelector(".productQuantity");
    const productPrice=currentCardElement.querySelector(".productPrice");
    let Quantity=1;
    let localStoragePrice=0;
    let localCartProduct=getCartProductFromLS();
    let existingProd=localCartProduct.find((curProd)=>curProd.id===id)
    

    if(existingProd){
        Quantity=Number(existingProd.Quantity);
        localStoragePrice=Number(existingProd.Price);
    }
    else{
        localStoragePrice=price;
        price=price;
    }

 if(event.target.className==="cartIncrement"){
     if(Quantity<stock){
         Quantity+=1;
     }
     else if(Quantity===stock){
         Quantity=stock;
         localStoragePrice=price*Quantity;
     }
 }
 if(event.target.className==="cartDecrement"){
     if(Quantity>1){
         Quantity-=1;
     }
 }

 localStoragePrice=Number(price*Quantity);
localStoragePrice=localStoragePrice.toFixed(2);

 let updatedCart={id,Quantity,Price:localStoragePrice}
 updatedCart=localCartProduct.map((curProd)=>{
     if(curProd.id===id){
        return updatedCart;
     }
     else{
        return curProd;
     }
 })
 localStorage.setItem('product',JSON.stringify(updatedCart));

 // to refelect it to screen
 productQuantity.innerText=Quantity;
 productPrice.innerText=localStoragePrice;

 updatedCartProductTotal();
 }
 
