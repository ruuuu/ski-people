import { layout } from "./layout.js";


export const Catalog = () => {

 
  if(document.querySelector('.catalog')){
    return '';
  } 

  

  const el = document.createElement('div');
  el.classList.add('catalog')

 
 
  
  const child = `
  
       <ul class="catalog__list">
          <li class="catalog__item">
            <a class="catalog__link catalog__link--active" href="">Все</a>
          </li>
          <li class="catalog__item">
            <a class="catalog__link" href="">Лыжи</a>
          </li>
          <li class="catalog__item">
            <a class="catalog__link" href="">Сноуборды</a>
          </li>
          <li class="catalog__item">
            <a class="catalog__link" href="">Экипировка</a>
          </li>
          <li class="catalog__item">
            <a class="catalog__link" href="">Ботинки</a>
          </li>
      </ul>  
   
  `;

  //console.log('layout: ', layout(child, "catalog__container").innerHTML) // <div class="container catalog__container">

  el.append(layout(child, "catalog__container")); 
  
  if(document.querySelector('main')){
    document.querySelector('main').append(el);
    return document.querySelector('main')
  }
  else{
    const main = document.createElement('main');
    main.append(el);
    return main; 
  }
  
  
}


