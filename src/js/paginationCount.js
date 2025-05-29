import { ProductList } from "../components/productList.js";
import { main } from "../components/main.js";
import { Pagination } from "../components/pagination.js";




export const paginationCount = (data) => {  // [[{},{}], [{},{}], [{},{}]] по 12 элементов в массивах

  console.log('data in paginationCount ', data)

  const buttons = document.querySelectorAll('.count-text__button');
 
  const maxCount = data.length; // 9 массивов
  console.log('maxCount ', maxCount)
  
  let currentCount = 0;



  
  const paginationActiveElements = (index) => {
    //console.log('index ', index);

    const paginationElements = document.querySelectorAll('.pagination__item');

    paginationElements.forEach((item) => {
      item.classList.remove('pagination__item--active');
    });

    paginationElements[index].classList.add('pagination__item--active');
  }
  
   


  buttons[0].addEventListener('click', () => { // левая кнопка
    
    if(currentCount > 0 && currentCount < maxCount){
      currentCount--;
      console.log('currentCount посл нажатия стал равным ', currentCount)
      console.log('data[currentCount] левая ', data[currentCount])

      paginationActiveElements(currentCount);
      
      ProductList('remove', data[currentCount], main());
      document.querySelector('main').append(ProductList("Список товаров", data[currentCount], main()), Pagination('', main(), data));

      
    }
  });



  buttons[1].addEventListener('click', () => { // правая кнопка

    if(currentCount >= 0 && currentCount < maxCount-1){
      currentCount++;
      console.log('currentCount стал ', currentCount)
      console.log('data[currentCount] правая ', data[currentCount])

      paginationActiveElements(currentCount);
      
      
      ProductList('remove', data[currentCount], main());
      Pagination('remove', main(), data, currentCount);  // [Array(12),Array(12),Array(12)]
      document.querySelector('main').append(ProductList("Список товаров", data[currentCount], main()), Pagination('', main(), data, currentCount));
      //document.querySelector('main').append(Pagination('', main(), data));
      
    }
  });
}