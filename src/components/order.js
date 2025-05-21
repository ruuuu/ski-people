import { layout } from "./layout.js";

let rendered = false;



export const Order = (action, parent, dataOrder = []) => { // если в  data ничего не передадим то передастся []
  
   if(action === 'remove'){
    document.querySelector('.order').remove(); // удаление элемента
    rendered = false;
    return; // выход из Order
  }

  // if(document.querySelector('.order')){
  //   return '';
  // } 
  // или:
  if(rendered){
    return document.querySelector('.order');
  }
 
  const el = document.createElement('div');
  el.classList.add('order');

  const child = `
       <div class="order__wrapper">
          <h2 class="order__title">Заказ успешно размещен</h2>
          <p class="order__price">${dataOrder.price}</p>
        </div>

        <p class="order__good-id">№&nbsp${dataOrder.orderId}</p>
        <div class="order__characteristics">
          <h3 class="order__info-title">Данные доставки</h3>
          <table class="order__info-table product__table">
            <tr class="order__table-row">
              <td class="order__table-item">Получатель</td>
              <td class="order__table-item">${dataOrder.name}</td>
            </tr>
            <tr class="order__table-row">
              <td class="order__table-item">Телефон</td>
              <td class="order__table-item">${dataOrder.tel}</td>
            </tr>
            <tr class="order__table-row">
              <td class="order__table-item">E-mail</td>
              <td class="order__table-item">${dataOrder.email}</td>
            </tr>
            <tr class="order__table-row">
              <td class="order__table-item">Адрес доставки</td>
              <td class="order__table-item">${dataOrder.address}</td>
            </tr>
            <tr class="order__table-row">
              <td class="order__table-item">Способ оплаты</td>
              <td class="order__table-item">${dataOrder.payment}</td>
            </tr>
            <tr class="order__table-row">
              <td class="order__table-item">Способ получения</td>
              <td class="order__table-item">${dataOrder.delivery}</td>
            </tr>
          </table>
          <a class="order__button" href="/">На главную</a>
        </div>
  `;

  el.append(layout(child, "order__info")); 
   
  parent.append(el);
 
  rendered = true;
   
  return el;
};