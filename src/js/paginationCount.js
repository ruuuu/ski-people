import { ProductList } from "../components/productList.js";
import { main } from "../components/main.js";
import { Pagination } from "../components/pagination.js";
import { router } from "./router.js";



export const paginationCount = (data, currentCount, url) => {  // data=[[{},{}], [{},{}], [{},{}]] по 12 элементов в массивах

  const buttons = document.querySelector('.pagination__count');

  const maxCount = data ? data.length : 0; // 9 массивов
  //console.log('maxCount ', maxCount)

  

  
  const paginationActiveElements = (index) => {
    //console.log('index ', index);

    const paginationElements = document.querySelectorAll('.pagination__item');

    paginationElements.forEach((item) => {
      item.classList.remove('pagination__item--active');
    });

    paginationElements[index].classList.add('pagination__item--active');
  };


  const changePagination = ({ target }) => {
    if(target.matches('button')){ // если это кнопка
      if(target.textContent == '<'){
        if(currentCount > 0 && currentCount <= maxCount){
          currentCount--;
        }
        else{
          return; // выход из фукнции
        }
      }

      if(target.textContent == '>'){
        if(currentCount >= 0 && currentCount <= maxCount-1){
          currentCount++;
        }
        else{
          return;
        }
      }
    }

    
    ProductList('remove');
    paginationActiveElements(currentCount);
    router.navigate(`${url}?pagination=${currentCount}`);    // переход на эту страницу
    Pagination('remove', main(), data[currentCount], currentCount);
    buttons.removeEventListener('click', changePagination);
  }

  buttons.addEventListener('click', changePagination); // делегирование, обработчик навесили не на кнопку, а на ее родителя
};


  