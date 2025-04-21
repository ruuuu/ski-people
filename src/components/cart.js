
import { layout } from "./layout.js";





let rendered = false;

export const Cart= (action, parent) => { // по умолчанию data=[]

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

  
  const el = document.createElement('div');
  el.classList.add('cart');

  
  
  const child = `
    <h2 class="cart__title">Корзина</h2>

    <ul class="cart__products">
      <li class="cart__product">
        <img class="cart__item-image" src="/img/ski-mini.jpg" alt="Синие лыжи">
        <h3 class="cart__item-title">Горные лыжи</h3>
        <p class="cart__item-price">5&nbsp;000&nbsp;₽</p>
        <p class="cart__item-id">арт. 84348945757</p>
        <div class="input__item-counter counter">
          <button class="counter__minus" type="button">-</button>
          <p class="counter__number">1</p>
          <button class="counter__plus" type="button">+</button>
        </div>
      </li>
    </ul>

    <div class="cart__order">
      <h3 class="cart__order-title">Оформление</h3>
      <div class="cart__order-info">
        <div class="cart__order-wrapper">
          <p class="cart__order-count"> 4 товар на сумму:</p>
          <p class="cart__order-price">20&nbsp;000&nbsp;₽</p>
        </div>

        <p class="cart__order-delivery">Доставка 0 ₽</p>
        <!--form="cartForm", он нужен чтобы сзявять зту кнопку с формой  у котрой  id="cartForm":-->
        <button class="cart__order-button" type="submit" form="cartForm">Оформить заказ</button>
      </div>
    </div> 

    <!-- <form class="cart__form" id="cartForm" action="#" method="POST"> -->
    <!-- id="cartForm" указали для связки с button class="cart__order-button" -->
    <h3 class="cart__form-title">Данные для доставки</h3>
    <fieldset class="cart__form-inputs">
      <input class="cart__form-input" type="text" name="name">
      <input class="cart__form-input" type="tel" name="tel">
      <input class="cart__form-input" type="email" name="email">
      <input class="cart__form-input" type="text" name="address">
      <textarea name="comment" id="comment"></textarea>
    </fieldset>
    <fieldset class="cart__form-fieldset">
      <legend class="cart__form-legend">Доставка</legend>
      <label class="cart__form-label">
        <input class="cart__form-radio" type="radio" name="delivery" value="delivery"> Доставка
      </label>
      <label class="cart__form-label">
        <input class="cart__form-radio" type="radio" name="delivery" value="pickup"> Самовывоз
      </label>
    </fieldset>
    <fieldset class="cart__form-fieldset">
      <legend class="cart__form-legend">Оплата</legend>
      <label class="cart__form-label">
        <input class="cart__form-radio" type="radio" name="payment" value="card"> Картой при получении
      </label>
      <label class="cart__form-label">
        <input class="cart__form-radio" type="radio" name="payment" value="cash"> Наличными при получении
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








