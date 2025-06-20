import { localStorageLoad, localStorageSave } from "./localStorage.js"




// добавлени товара в Корзину:
export const addToCart = async (data) => {  // data исходные товары
  
  let cartList = await localStorageLoad('ski-people-cart'); // получили из сторидж [{},{}]
  const list = document.querySelector('.goods__list');

  if(list){
    list.addEventListener('click', (evt) => { // навешиваем обработчк на родителя(делегирование) чтобы при добавлении новых картчоек  обработчик автоматом навесился
      console.log('попали в обработчик события ')
      const cartButton = evt.target.closest('.card__button') // если нажатый элемент кнопка "В корзину" 
    
        
      if(cartButton) { 
        const id = Number(cartButton.dataset.id);          // получили знач дата атрибута data-id
        const item = data.find((item) => item.id === id);
        console.log('item ', item)

       if(item){
        item.count =+ 1;
       }
        
      
        if(cartList.lendth === 0){
          cartList.push(item);
          item.count = 1; 
          localStorageSave('ski-people-cart', cartList);  // обновляем сторидж
          document.querySelector('.header__link-count').textContent = "(" + localStorageLoad('ski-people-cart').length + ")";
        }
    
        localStorageSave('ski-people-cart', cartList);  // обновляем сторидж
        const cartItem = cartList.find((cartItem) => Number(cartItem.id) === Number(id));
       
        

        if(cartItem){
          cartButton.textContent = cartItem ?  "В Корзине" : "В Корзину";
          cartButton.disabled = true;
          cartButton.classList.add('unActive');
          // вызывать фукнцию пеерисовки
          return; // выход из функции
        }else{
          cartList.push(item);
          localStorageSave('ski-people-cart', cartList);  // обновляем сторидж
          cartButton.textContent = "В Корзине";
          cartButton.disabled = true;
          cartButton.classList.add('unActive');
          // вызывать фукнцию пеерисовки
          document.querySelector('.header__link-count').textContent =  "(" + localStorageLoad('ski-people-cart').length + ")";
        }
      }
    })
  }



}