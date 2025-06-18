import { localStorageLoad, localStorageSave } from "./localStorage.js";
import { renderCartGoods } from "../components/cart.js";
import { router } from "./router.js";
import { Header } from "../components/header.js";


export const cartCount = () => {

  const cartList = localStorageLoad('ski-people-cart'); // [{},{}]  товары корзины
  const list = document.querySelector('.cart__products');

  
  let initPrices = []; // массив  price
  cartList.forEach((cartElem, i) => {
    initPrices[i] = cartElem.price;
  });

 
  

  if(list){
    list.addEventListener('click', (evt) => { // навешиваем на родител чтобы при добавлении новых товаров не вешать обработчик на товар
        const counterButton = evt.target.closest('.counter__button'); // если нажатый элемент кнопка "В корзину" 
        //console.log('counterButton ', counterButton)
         
        if(counterButton) { // если нажатый элемент кнопка "В корзину"
          const id = Number(counterButton.dataset.id); 
         
          cartList.forEach((cartItem, index) => {
            if(cartItem.id === id){
              if(evt.target.textContent === '+'){
                cartList[index].count += 1;
                cartList[index].price += initPrices[index];
              }
              if(evt.target.textContent === '-'){
                if(cartList[index].count <= 0){
                  cartList.splice(index, 1); // удалям Из массива
                }else{
                  cartList[index].count -= 1; 
                  cartList[index].price -= initPrices[index];
                }
              }
              
              localStorageSave('ski-people-cart', cartList);  // обновляем сторидж
              list.innerHTML = '';
              list.innerHTML = renderCartGoods(localStorageLoad('ski-people-cart'), ``);
              document.querySelector('.cart__order-price').textContent = `${(cartList.reduce((acc, item) => acc + item.price, 0)).toLocaleString()}&nbsp;₽`;
              document.querySelector('.cart__order-count').textContent = cartList.length;
            }
          });
        }
      });
  }


  const form = document.querySelector('.form-order'); // форма отправки заказа

  if(form){
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData); // data={ name:'Alsy', address:'Test', tel:'89274435612', email:'tre@mail.ru', delivery:'pickup', payment: "cash" }
      data.orderId = Math.floor(Math.random(0, 5000) * 10)+1;
      data.price = document.querySelector('.cart__order-price').textContent;
      //console.log('data ', data);
      localStorageSave('ski-people-order', data); // сохрнил в localStorage
      router.navigate('/order'); // после нажатия отправка будет переход на урл /order
      localStorageSave('ski-people-cart', []);  // обновляем сторидж
      Header();
    });
  }


};

