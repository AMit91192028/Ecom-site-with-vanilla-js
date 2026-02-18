import { updatedCartValue } from "./updateCartValue";

export const getCartProductFromLS=()=>{
let cardProduct=localStorage.getItem('product');
if(!cardProduct){
    return [];
}
cardProduct=JSON.parse(cardProduct);
updatedCartValue(cardProduct);
return cardProduct;
}