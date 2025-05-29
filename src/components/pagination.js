import { layout } from "./layout.js";

let rendered = false;


export const Pagination = (action, parent, data, pagination) => {
    //console.log('data ', data) // [Array(12), Array(12), Array(12), Array(12), Array(12), Array(12)]
    console.log('pagination ', pagination)

    const maxPagination = data.flat(Infinity).length;
    // data.slice() - [[],[],[]]
    const currentPagination = (data, currentCount) => data.slice(0, currentCount + 1).reduce((acc, item) => acc + item.length, 0)

  
    if(action === 'remove'){
      console.log('зашли гду remove')
      document.querySelector('.pagination').remove(); // удаление элемента
      rendered = false;
      return; // выход 
    }
  
    // if(document.querySelector('.pagination')){
    //   return '';
    // } 
    // или:
    if(rendered){
      console.log('зашли гду rendered=true')
      return '';
    }
  
    
    const el = document.createElement('div');
    el.classList.add('pagination');

    const listItems = data.map(() => `<li class="pagination__item"></li>`).join(''); // '<li></li><li></li><li></li>'

   
  
    
    const child = `
        <ul class="pagination__list">
          ${listItems}
        </ul>
        <div class="pagination__count count-text">
          <button class="count-text__button" type="button">&lt;</button>
          <p class="count-text__text">${currentPagination(data, Number(pagination))} из ${maxPagination}</p>
          <button class="count-text__button" type="button">&gt;</button>
        </div> 
    `;
  
  
    el.append(layout(child, "pagination__container")); 
    
    parent.append(el);

    document.querySelector('.pagination__item').classList.add('pagination__item--active');
  
    rendered = true;
    
    return el;
    
  }
  
  
  
