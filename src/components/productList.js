import { layout } from "./layout.js";
import { localStorageLoad } from "../js/localStorage.js";


// Вывод товаров
let rendered = false;



export const ProductList = (title, data, parent) => { // data= [{},{}}] =12 шт

 
  if(title === 'remove'){
    document.querySelector('.goods').remove(); // удаление элемента
    rendered = false;
    return ''; // выход из ProductList
  }


  if(rendered){ // если уже отобразили
    return ''; // выход из функции
  }


  const favoriteList = localStorageLoad('ski-people-favorite'); // [{},{}]  товара в Избранное
  const cartList = localStorageLoad('ski-people-cart'); // [{},{}]  товары корзины


  

  const renderGoods = (data) => {
    let goodsItem = ``;

    data.forEach(({ name, price, img, id }) => {
      let inCart = cartList.find((cartItem) => cartItem.id === id);
      

      goodsItem += `
        <li class="goods__item">
              <article class="goods__card card">
                <a class="card__link" href="/product?id=${id}">
                  <img class="card__img" src="/img/${img}" alt="фото изображения лыж">
                </a>
                <button class="card__like-button" type="button" data-id="${id}">        <!-- добавили дата атрибут data-id чтоб при добавлениив Избранное  знать какой товар -->
                  <svg class="card__like-svg ${favoriteList.find((item) => item.id === id) ? "card__like-svg--active" : ""}  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                      fill="currentColor" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round" />      <!--указали  fill="currentColor"  чтоб черз css задать цвет -->
                  </svg>
                </button>
                <div class="card__info">
                  <h3 class="card__info-title"> ${name} </h3>
                  <p class="card__info-price">${price.toLocaleString()} ₽</p>
                </div>
                                           <!-- ${inCart ? 'disabled' : ''}  ${inCart ? 'В корзине' : 'В корзину'}-->
                <button class="card__button"  data-id="${id}"> В корзину </button> <!-- добавили дата атрибут data-id чтоб при добавлениив В Корзину  знать какой товар -->
              </article>
        </li>
      `
    });

    return goodsItem; 
  };





  const goodsItems = renderGoods(data);

  const el = document.createElement('section');
  el.classList.add('goods');

  const child = `
      <h2 class="goods__title">${title}</h2>
      <ul class="goods__list">
        ${goodsItems}
      </ul>
  `;


  el.append(layout(child, "goods__container")); 
  
  parent.append(el);

  rendered = true; 

  




  const catalogButtons = document.querySelector('.catalog');
  
  if(catalogButtons){
    const links = catalogButtons.querySelectorAll('.catalog__link'); // [a,a,a]
    
    catalogButtons.addEventListener('click', (evt) => { // навешиваем событие на родителя(делегироваие)
      
      links.forEach((item) => item.classList.remove('catalog__link--active')); 
      if(evt.target.closest('a')){ // если элемент/его родителя есть ссылка
        evt.target.classList.add('catalog__link--active')
      }

   
      const refreshList = data.filter((item) => item.type === evt.target.textContent); // [{},{}] отфильрованный

      // console.log('refreshList ', refreshList)
      const list = document.querySelector('.goods__list');
      list.textContent = '';
     
      const goodsItems = renderGoods(refreshList, '') // отфильрованные товары

      list.innerHTML = goodsItems;
    });
  }

  
  return el;
}


