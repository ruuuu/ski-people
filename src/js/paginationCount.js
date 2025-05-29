import { ProductList } from "../components/productList.js";
import { main } from "../components/main.js";
import { Pagination } from "../components/pagination.js";
import { router } from "./router.js";



export const paginationCount = (data, currentCount) => {  // data=[[{},{}], [{},{}], [{},{}]] по 12 элементов в массивах

  //console.log('data in paginationCount ', data)
  console.log('currentCount ', currentCount)

  const maxPagination = data.flat(Infinity).length;
    // data.slice() - [[],[],[]]
  const currentPagination = (data, currentCount) => data.slice(0, currentCount + 1).reduce((acc, item) => acc + item.length, 0)


  const buttons = document.querySelectorAll('.count-text__button');
 
  const maxCount = data ? data.length : 0; // 9 массивов
  console.log('maxCount ', maxCount)
  
  



  
  const paginationActiveElements = (index) => {
    //console.log('index ', index);

    const paginationElements = document.querySelectorAll('.pagination__item');

    paginationElements.forEach((item) => {
      item.classList.remove('pagination__item--active');
    });

    paginationElements[index].classList.add('pagination__item--active');
  }
  
   


  buttons[0].addEventListener('click', () => { // левая кнопка
    buttons.forEach((button) => button.classList.remove('pagination-button'));
    
    buttons[0].classList.add('pagination-button')
    
    if(currentCount > 0 && currentCount < maxCount){
      currentCount--;
  
      paginationActiveElements(currentCount);
    }
  });



  buttons[1].addEventListener('click', () => { // правая кнопка
    buttons.forEach((button) => button.classList.remove('pagination-button'));
    buttons[1].classList.add('pagination-button');
    
    if(currentCount >= 0 && currentCount < maxCount-1){
      currentCount++;

      paginationActiveElements(currentCount);
      
    }
  });
}