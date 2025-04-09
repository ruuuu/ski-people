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

  
  
  const typeList = [];

  data.map(({ type }) => {
    typeList.push(type);
  })
  


  let catalogItem = ``;

  // new Set(typeList) вернет {} неповторяющихся типов и преобращуем в массив:
  [...new Set(typeList)].forEach((type) => {
    catalogItem += `
        <li class="catalog__item">
          <a class="catalog__link" href="#">${type}</a>
        </li>
    `
  });



  const child = `
       <ul class="catalog__list">
          ${catalogItem}
      </ul>  
  `;


  el.append(layout(child, "catalog__container")); 
  
  parent.append(el);

  rendered = true;
  
  return el;
  
}


