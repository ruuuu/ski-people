import { layout } from "./layout.js";



let rendered = false;

export const Breadcrumbs = (action, parent, data) => {


  if(action === 'remove'){
    document.querySelector('.breadcrumb').remove(); 
    rendered = false;
    return; // выход 
  }

  if(rendered){
    return '';
  }

  
  const el = document.createElement('div');
  el.classList.add('breadcrumb')

  const listItems = data.map((item) => 
    ` <li class="breadcrumb__item">
        <a class="breadcrumb__link" href="/">Главная</a>
      </li>
    `
)
  
  const child = `
        <nav class="breadcrumb__navigation">
          <ul class="breadcrumb__list">
            ${listItems}
          </ul>
        </nav>
      </div>
  `;


  el.append(layout(child, "breadcrumb__container")); 

  parent.append(el);
  
  rendered = true;
  
  return el;
  
}


