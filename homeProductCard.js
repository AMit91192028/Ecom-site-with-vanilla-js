import { addTocart } from "./addTocart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer=document.querySelector("#productContainer");
const productTemplate=document.querySelector("#productTemplate");

export const showProductContainer=(product)=>{
    if(!product){
        return true;  
    }
    product.forEach((curProd)=>{
        const{category,brand,description,id,image,name,price,stock}=curProd;
        const productClone=document.importNode(productTemplate.content,true);
        productClone.querySelector('#cardValue').setAttribute("id",`card${id}`);
        productClone.querySelector(".category").textContent=category;
        productClone.querySelector(".productName").textContent=name;
        productClone.querySelector(".productImage").src=image;
        productClone.querySelector(".productImage").alt=name;
        productClone.querySelector(".productStock").textContent=stock;
        productClone.querySelector(".productDescription").textContent=description;
        productClone.querySelector(".productPrice").textContent=`₹${price}`;
        productClone.querySelector(".productActualPrice").textContent=`₹${price*4}`;
        
        productClone.querySelector(".stockElement").addEventListener('click',(e)=>{
            homeQuantityToggle(e,id,stock);
        })
        productClone.querySelector(".add-to-cart-button").addEventListener('click',(event)=>{
             addTocart(event,id,stock);
        })
        productContainer.append(productClone);

    })
}