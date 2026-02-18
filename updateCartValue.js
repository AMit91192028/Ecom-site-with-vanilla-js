const cartValue=document.querySelector('#cartValue');
export const updatedCartValue=(product)=>{
          
   return cartValue.innerHTML=`<i class="fa-solid fa-cart-shopping">${product.length}</i>`;
}