import { localStorageLoad, localStorageSave } from "./localStorage.js"
import { ProductList } from "../components/productList.js";



// добавлени товара в Корзину:
export const addToCart = async (data) => {
  
  let cartList = await localStorageLoad('ski-people-cart'); // получили из сторидж [{},{}]
 

  const list = document.querySelector('.goods__list');

  if(list){
    list.addEventListener('click', (evt) => { // навешиваем обработчк на родителя(делегирование) чтобы при добавлении новых картчоек  обработчик автоматом навесился
      console.log('попали в обработчик события ')
      const cartButton = evt.target.closest('.card__button') // если нажатый элемент кнопка "В корзину" 
    
        
      if(cartButton) { 
        
        const id = Number(cartButton.dataset.id);          // получили знач дата атрибута data-id
        const item = data.find((item) => item.id === id);
        

        if(cartList.lendth === 0){
          cartList.push(item);
          localStorageSave('ski-people-cart', cartList);  // обновляем сторидж
        }

      
        
        localStorageSave('ski-people-cart', cartList);  // обновляем сторидж
        const cartItem = cartList.find((cartItem) => Number(cartItem.id) === Number(id));
       
        

        if(cartItem){
         
          cartButton.textContent = cartItem ?  "В Корзине" : "В Корзину";
          cartButton.disabled = true;
          cartButton.classList.add('unActive');
          return; // выход из функции
        }else{
          cartList.push(item);
          cartButton.textContent = "В Корзине";
          cartButton.disabled = true;
          cartButton.classList.add('unActive');
          localStorageSave('ski-people-cart', cartList);  // обновляем сторидж
        }
      }
    })
  }



}