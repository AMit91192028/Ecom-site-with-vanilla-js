import product from "./api/product.json";
import { fetchQuantityFromLS } from "./fetchQuantityFromLS";
import { getCartProductFromLS } from "./getCartProductLs.";
import { incDec } from "./incDec";
import { removeProd } from "./removeProd";
import { updatedCartProductTotal } from "./updateCartProductTotal";
import { updatedCartValue } from "./updateCartValue";
let cardProducts=getCartProductFromLS();
let filterProducts=product.filter((curProd)=>{
return cardProducts.some((curElem)=>curElem.id===curProd.id)
})
// console.log(filterProducts);

const CartElement=document.querySelector("#productCartContainer");
const productTemplate=document.querySelector("#productCartTemplate");
const showCartproduct=()=>{
    filterProducts.forEach((curProd)=>{
        const{category,id,image,name,stock,price}=curProd;
        const lsActualData=fetchQuantityFromLS(id,price);
        let productClone=document.importNode(productTemplate.content,true);
        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
        productClone.querySelector(".category").textContent=category;
        productClone.querySelector(".productImage").src=image;
        productClone.querySelector(".productImage").alt=name;       
        productClone.querySelector(".productName").textContent=name;
        productClone.querySelector(".productPrice").textContent=lsActualData.price;
        productClone.querySelector(".productQuantity").textContent=lsActualData.Quantity;
        productClone.querySelector(".stockElement").addEventListener('click',(event)=>{
            incDec(event,id,stock,price);
        })
        productClone.querySelector(".remove-to-cart-button").addEventListener("click",(e)=>{
                   removeProd(id); 

        });
        CartElement.append(productClone);
        
})
}
showCartproduct();


updatedCartProductTotal();
