import { localStorageLoad, localStorageSave } from "./localStorage.js"
import { ProductList } from "../components/productList.js";



// добавлени товара в Избранное:
export const addToCart = async (data) => {
  console.log('data in AddTocart ', data)

  
  let cartList = await localStorageLoad('ski-people-cart'); // получили из сторидж [{},{}]
  console.log('cartList ', cartList)

  const list = document.querySelector('.goods__list');

  if(list){
    list.addEventListener('click', (evt) => { // навешиваем обработчк на родителя(делегирование) чтобы при добавлении новых картчоек  обработчик автоматом навесился
      console.log('попали в обработчик события ')
      const cartButton = evt.target.closest('.card__button') // если нажатый элемент кнопка "В корзину" 
      console.log('cartButton ', cartButton)  
        
      if(cartButton) { 
        console.log('нашли нажатую  кнопку cartButton')
        const id = Number(cartButton.dataset.id);          // получили знач дата атрибута data-id
        console.log('id ', id)
        const item = data.find((item) => item.id === id);
        console.log('добавляемы в корзину item  ', item)

        if(cartList.lendth === 0){
          cartList.push(item);
          localStorageSave('ski-people-cart', cartList);  // обновляем сторидж
        }

        console.log('cartList ', cartList)
        
        localStorageSave('ski-people-cart', cartList);  // обновляем сторидж
        const cartItem = cartList.find((cartItem) => cartItem.id === id);
        console.log('cartItem ', cartItem);
        

        if(cartItem){
          cartButton.textContent = cartItem ?  "В Корзине" : "В Корзину";
          cartButton.disabled = true;
          return; // выход из функции
        }else{
          cartList.push(item);
          cartButton.textContent =  "В Корзине";
          cartButton.disabled = true;
          localStorageSave('ski-people-cart', cartList);  // обновляем сторидж
        }
      }
    })
  }



}