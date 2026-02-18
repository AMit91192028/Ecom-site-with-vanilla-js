import { getCartProductFromLS } from "./getCartProductLs."

export const updatedCartProductTotal=()=>{
    let ProductSubTotal=document.querySelector(".productSubTotal");
    let ProductFinalTotal=document.querySelector(".productFinalTotal");
let lsp=getCartProductFromLS();
let initialValue=0;
let totalProductPrice=lsp.reduce((a,v)=>{
let productPrice=Number(v.Price)||0;
return a+productPrice;
},initialValue)

ProductSubTotal.innerText=`₹${totalProductPrice}`;
ProductFinalTotal.textContent=`₹${totalProductPrice+50}`;
}