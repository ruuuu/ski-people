import { localStorageLoad, localStorageSave } from "./localStorage.js"




// добавлени товара в Избранное:
export const addToCart = async (data) => {
  console.log('data in AddTocart ', data)

  
  const cartList = localStorageLoad('ski-people-cart'); // получили из сторидж [{},{}]
  console.log('cartList ', cartList)

  const list = document.querySelector('.goods__list');

  if(list){
    list.addEventListener('click', (evt) => { // навешиваем обработчк на родителя(делегирование) чтобы при добавлении новых картчоек  обработчик автоматом навесился
      console.log('попали в обработчик события ')
      const cartButton = evt.target.closest('.card__button') // если нажатый элемент кнопка "В корзину" 
      console.log('cartButton ', cartButton)  
        
      if(cartButton) { 
        console.log('наажли на  cartButton')
        const id = Number(cartButton.dataset.id);          // получили знач дата атрибута data-id
        console.log('id ', id)
        const item = data.find((item) => item.id === id);
        console.log('добавляемы в корзину item  ', item )
        cartList.push(item);
        localStorageSave('ski-people-cart', cartList);  // обновляем сторидж

        //likeButton.querySelector('svg').classList.toggle('card__like-svg--active');
      }
    })
  }



}