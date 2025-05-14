import { localStorageLoad, localStorageSave } from "./localStorage.js";



export const cartCount = () => {

  const cartList = localStorageLoad('ski-people-cart'); // [{},{}]  товары корзины
  const list = document.querySelector('.cart__products');
  
  if(list){
    list.addEventListener('click', (evt) => { // навешиваем на родител чтобы при добавлении новых товаров не вешать обработчик на товар
        const counterButton = evt.target.closest('.counter__button'); // если нажатый элемент кнопка "В корзину" 
        console.log('counterButton ', counterButton)
         
        if(counterButton) { // если нажатый элемент кнопка "В корзину"
          const id = Number(counterButton.dataset.id); 
          console.log('id of counterButton ', id);

          const counterText = evt.target.closest('.counter').querySelector('.counter__number');
          console.log('counterText ', counterText)

          const priceElems = list.querySelectorAll('.cart__item-price');

          cartList.map((cartItem, index) => {
            if(cartItem.id === id){
              console.log('evt.target ', evt.target)
              if(evt.target.textContent === '+'){
                cartList[index].count += 1;
                cartList[index].price += cartList[index].price;
                priceElems[index].innerHTML = `${cartList[index].price.toLocaleString()}&nbsp;₽`;
                
              }
              if(evt.target.textContent === '-'){
                cartList[index].count -= 1; 
                cartList[index].price -= cartList[index].price;
                priceElems[index].innerHTML = `${cartList[index].price.toLocaleString()}&nbsp;₽`;
                if(cartList[index].count <= 0){
                  cartList.splice(index, 1); // удалям Из массива
                }
               
                // list.querySelectorAll('.counter__number')[index].textContent = cartList[index].count;
                // list.querySelectorAll('.cart__item-price')[index].innerHTML = `${cartList[index].price.toLocaleString()}&nbsp;₽`; // цена
              }
              counterText.textContent = cartList[index].count;
              localStorageSave('ski-people-cart', cartList);  // обновляем сторидж
              
            }
          });

        //localStorageSave('ski-people-cart', cartList);  // обновляем сторидж
        }
      });
  }

  

};