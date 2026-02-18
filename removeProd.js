import { getCartProductFromLS } from "../cart/getCartProductLs."
import { showToast } from "./showToast";
import { updatedCartProductTotal } from "../cart/updateCartProductTotal";
import { updatedCartValue } from "../cart/updateCartValue";

export const removeProd=(id)=>{
    let lsd=getCartProductFromLS();
   lsd= lsd.filter((curProd)=>curProd.id!=id);
    localStorage.setItem("product",JSON.stringify(lsd));

    //to remove div on click
    let removeDiv=document.getElementById(`card${id}`);
        if(removeDiv){
            removeDiv.remove();
            showToast("delete",id);
        }
updatedCartValue(lsd);
updatedCartProductTotal();

}