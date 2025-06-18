import { layout } from "./layout.js";

let rendered = false;


export const Pagination = (action, parent, data, pagination) => { // pagination - индекс страницы
    //console.log('data ', data) // Array(12)
    console.log('pagination in Pagination ', pagination)
    

    const maxPagination = data ? data.flat(Infinity).length : 0;
    // data.slice() - [[],[],[]]
  
    if(action === 'remove'){
      //console.log('зашли гду remove')
      document.querySelector('.pagination').remove(); // удаление элемента
      rendered = false;
      return; // выход 
    }
  
    // if(document.querySelector('.pagination')){
    //   return '';
    // } 
    // или:
    if(rendered){
      console.log('зашли где rendered=true')
      return '';
    }
  
    
    const el = document.createElement('div');
    el.classList.add('pagination');

    const listItems = data.map(() => `<li class="pagination__item"></li>`).join(''); // из массиа сделали строку '<li></li><li></li><li></li>'

   
  
    
    const child = `
        <ul class="pagination__list">
          ${listItems}
        </ul>
        <div class="pagination__count count-text">
          <button class="count-text__button" type="button">&lt;</button>
          <p class="count-text__text">${pagination} из ${maxPagination}</p>
          <button class="count-text__button" type="button">&gt;</button>
        </div> 
    `;
  
  
    el.append(layout(child, "pagination__container")); 
    
    parent.append(el);
    //parent.insertBefore(document.querySelector('.goods'), el);

    document.querySelectorAll('.pagination__item')[pagination].classList.add('pagination__item--active');
  
    rendered = true;
    
    return el;
    
  }
  
  
  
