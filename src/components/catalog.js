import { layout } from "./layout.js";

let rendered = false;

export const Catalog = (parent, data = []) => { // по умолчанию data=[]

 
  // if(document.querySelector('.catalog')){
  //   return '';
  // } 
  // или:
  if(rendered){
    return document.querySelector('.catalog');
  }

  
  const el = document.createElement('div');
  el.classList.add('catalog')

  
  const typesArray = new Set(); // коллекция

  data.forEach((item) => { 
    typesArray.add(item.type)
  });

  console.log('typesArray ', typesArray) // {'Сноуборды', 'Термобельё', 'Лыжи', 'Куртка', 'Штаны'}
  
  


  let newItems = '';

  typesArray.forEach((item) => {

    newItems += `
      <li class="catalog__item">
          <a class="catalog__link catalog__link--active" href="" click={}> ${item} </a>
      </li>
    `
  });
  

  const child = `
       <ul class="catalog__list">
          ${newItems}
      </ul>  
  `;


  el.append(layout(child, "catalog__container")); 
  
  parent.append(el);

  rendered = true;
  
  return el;
  
}


