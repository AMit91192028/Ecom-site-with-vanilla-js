import { getCartProductFromLS } from "./getCartProductLs."

export const fetchQuantityFromLS=(id,price)=>{
let lsd=getCartProductFromLS();
let existingProduct=lsd.find((curProd)=>curProd.id===id);
let Quantity=1;
if(existingProduct){
    Quantity=existingProduct.Quantity;
    price=existingProduct.Price;

}
return {Quantity,price};
}