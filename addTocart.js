import { getCartProductFromLS } from "./getCartProductLs.";
import { showToast } from "./showToast";
import { updatedCartValue } from "./updateCartValue";
getCartProductFromLS();
export const addTocart=(event,id,stock)=>{
 let arrlocalstroage=getCartProductFromLS();

const currentCardElement=document.querySelector(`#card${id}`);
let Quantity=currentCardElement.querySelector(".productQuantity").innerText;
let Price=currentCardElement.querySelector(".productPrice").innerText;
Price=Price.replace('₹','');
let existingProd=arrlocalstroage.find((curProd)=>curProd.id===id); 

if(existingProd && Quantity>1){
    Quantity=Number(existingProd.Quantity)+Number(Quantity);
    Price=Number(Price*Quantity);
    let updatedCart={id,Quantity,Price}
updatedCart=arrlocalstroage.map((curProd)=>{
    if(curProd.id===id){
       return updatedCart;
    }
    else{
       return curProd;
    }
})
localStorage.setItem('product',JSON.stringify(updatedCart));
showToast("add",id);
}

if(existingProd){
    return false;
}




Price=Number(Price*Quantity);
let UpdateData={id,Quantity,Price};

arrlocalstroage.push(UpdateData);
localStorage.setItem('product',JSON.stringify(arrlocalstroage));

updatedCartValue(arrlocalstroage);

showToast("add",id);
}