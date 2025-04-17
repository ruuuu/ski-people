import { ProductList } from "../components/productList.js";
import { main } from "../components/main.js";



export const paginationCount = (data) => {  // [[{},{}], [], []]

  const buttons = document.querySelectorAll('.count-text__button');
  const maxCount = data.length;
  let currentCount = 0;



  const paginationActiveElements = (index) => {

    const paginationElements = document.querySelectorAll('.pagination__item');

    paginationElements.forEach((item) => {
      item.classList.remove('pagination__item--ective');
    });

    paginationElements[index].classList.add('pagination__item--ective');
  }
  
   



  buttons[0].addEventListener('click', (evt) => {

    if(currentCount > 0 && currentCount <= maxCount){
      currentCount--;
      paginationActiveElements(currentCount);
      //ProductList('', data, main());
    }
  });



  buttons[1].addEventListener('click', (evt) => {

    if(currentCount >= 0 && currentCount <= maxCount-1){
      currentCount++;
      paginationActiveElements(currentCount);
      //ProductList('', data, main());
    }
  });
}