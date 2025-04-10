import { layout } from "./layout.js";

let rendered = false;

export const Breadcrumbs = () => {

 
  // if(document.querySelector('.breadcrumb')){
  //   return '';
  // } 
  // или:
  if(rendered){
    return '';
  }

  
  const el = document.createElement('div');
  el.classList.add('breadcrumb')

  
  const child = `
        <nav class="breadcrumb__navigation">
          <ul class="breadcrumb__list">
            <li class="breadcrumb__item">
              <a class="breadcrumb__link" href="/">Главная</a>
            </li>
            <li class="breadcrumb__item">
              <a class="breadcrumb__link" href="">Лыжи</a>
            </li>
            <li class="breadcrumb__item">
              <a class="breadcrumb__link" href="">Горные лыжи</a>
            </li>
          </ul>
        </nav>
      </div>
  `;


  el.append(layout(child, "breadcrumb__container")); 
  
  rendered = true;
  
  return el;
  
}


