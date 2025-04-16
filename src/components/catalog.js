import { layout } from "./layout.js";





let rendered = false;

export const Catalog = (action, parent, data = []) => { // по умолчанию data=[]

  if(action === 'remove'){
    document.querySelector('.catalog').remove(); // удаление элемента
    rendered = false;
    return; // выход из Catalog
  }

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

  // new Set(typeList) вернет коллекцию {} неповторяющихся типов и преобразуем в массив:
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


