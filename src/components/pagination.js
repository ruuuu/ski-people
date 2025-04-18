import { layout } from "./layout.js";

let rendered = false;


export const Pagination = (action, parent, data) => {
  
  
    if(action === 'remove'){
      document.querySelector('.pagination').remove(); // удаление элемента
      rendered = false;
      return; // выход 
    }
  
    // if(document.querySelector('.pagination')){
    //   return '';
    // } 
    // или:
    if(rendered){
      return '';
    }
  
    
    const el = document.createElement('div');
    el.classList.add('pagination')
  
    
    const child = `
        <ul class="pagination__list">
          <li class="pagination__item pagination__item--active">

          </li>
          <li class="pagination__item">

          </li>
          <li class="pagination__item">

          </li>
        </ul>

        <div class="pagination__count count-text">
          <button class="count-text__button" type="button">&lt;</button>
          <p class="count-text__text">12 из 31</p>
          <button class="count-text__button" type="button">&gt;</button>
        </div> 
    `;
  
  
    el.append(layout(child, "pagination__container")); 
    
    parent.append(el);

    document.querySelector('.pagination__item').classList.add('pagination__item--active')
  
    rendered = true;
    
    return el;
    
  }
  
  
  
