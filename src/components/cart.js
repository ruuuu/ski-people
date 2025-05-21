import { layout } from "./layout.js";
import { localStorageLoad } from "../js/localStorage.js";



export const renderCartGoods = (cartProducts, result) => {
    
    cartProducts.forEach(({ name, price, img, id, count }) => {
      result += `
        <li class="cart__product">
          <img class="cart__item-image" src="/img/${img}" alt="Синие лыжи">
          <h3 class="cart__item-title">${name}</h3>
          <p class="cart__item-price">${price} ₽</p> 
          <p class="cart__item-id">арт. ${id}</p>
          <div class="input__item-counter counter">
            <button class="counter__button counter__minus" type="button" data-id=${id}>-</button>
            <p class="counter__number">${count}</p>
            <button class="counter__button counter__plus" type="button" data-id=${id}>+</button>
          </div>
      </li>
      `
    });

    return result; 
};







// Отображение товаров Корзины(страница Корзина)
let rendered = false;

export const Cart = (action, parent, data = []) => { // по умолчанию data=[]

  if(action === 'remove'){
    document.querySelector('.cart').remove(); // удаление элемента
    rendered = false;
    return; // выход 
  }

  // if(document.querySelector('.cart')){
  //   return '';
  // } 
  // или:
  if(rendered){
    return document.querySelector('.cart');
  }


  const cartList = localStorageLoad('ski-people-cart'); // [{},{}]  товары корзины
  const sum = cartList.reduce((acc, item) => acc + item.price, 0);


  const el = document.createElement('section');
  el.classList.add('cart');

  const cartsItems = renderCartGoods(cartList, ``); // '<li></li> <li></li> <li></li> <li></li>'

  const child = `
    <h2 class="cart__title">${action}</h2>
    <ul class="cart__products">
     ${cartsItems}
    </ul>

    <div class="cart__order">
      <h3 class="cart__order-title">Оформление</h3>
      <div class="cart__order-info">
        <div class="cart__order-wrapper">
          <p class="cart__order-count"> ${cartList.length} товар на сумму:</p>
          <p class="cart__order-price">${sum.toLocaleString()}&nbsp;₽</p>
        </div>

        <p class="cart__order-delivery">Доставка 0 ₽</p>
        <!--form="cartForm", он нужен чтобы сзявять зту кнопку с формой  у котрой  id="cartForm":-->
        <button class="cart__order-button" type="submit" form="cartForm">Оформить заказ</button>
      </div>
    </div> 

    <form class="cart__form form-order" id="cartForm" action="#" method="POST"> 
      <!-- id="cartForm" указали для связки с button class="cart__order-button" -->
      <h3 class="cart__form-title">Данные для доставки</h3>
      <fieldset class="form-order__fieldset form-order__fieldset--input">
        <input class="form-order__input" type="text" name="name" placeholder="ФИО">
        <input class="form-order__input" type="tel" name="tel" placeholder="Телефон">
        <input class="form-order__input" type="email" name="email" placeholder="Email">
        <input class="form-order__input" type="text" name="address" placeholder="Адрес доставки">
        <textarea class="form-order__textarea" name="comment" id="comment" placeholder="Комментарий"></textarea>
      </fieldset>

      <fieldset class="form-order__fieldset form-order__fieldset--radio">
        <legend class="form-order__legend">Доставка</legend>
        <label class="form-order__label radio">
          <input class="radio__input" type="radio" name="delivery" value="delivery"> Доставка
        </label>
        <label class="form-order__label radio">
          <input class="radio__input" type="radio" name="delivery" value="pickup"> Самовывоз
        </label>
      </fieldset>

      <fieldset class="form-order__fieldset form-order__fieldset--radio">
        <legend class="form-order__legend">Оплата</legend>
        <label class="form-order__label radio">
          <input class="radio__input" type="radio" name="payment" value="card"> Картой при получении
        </label>
        <label class="form-order__label radio">
          <input class="radio__input" type="radio" name="payment" value="cash"> Наличными при получении
        </label>
      </fieldset>
  </form>
 </div>
  `;


  el.append(layout(child, "cart__container")); 
  
  parent.append(el);

  rendered = true;
  
  return el;
  
}








