


export const paginationCount = (data) => {  // [[{},{}], [], []] по 12 элементов в массивах

  //console.log('data in paginationCount ', data)

  const buttons = document.querySelectorAll('.count-text__button');
 
  const maxCount = data.length; // 9
  
  let currentCount = 0;



  
  const paginationActiveElements = (index) => {
    //console.log('index ', index);

    const paginationElements = document.querySelectorAll('.pagination__item');

    paginationElements.forEach((item) => {
      item.classList.remove('pagination__item--active');
    });

    paginationElements[index].classList.add('pagination__item--active');
  }
  
   


  buttons[0].addEventListener('click', () => {
    
    if(currentCount > 0 && currentCount < maxCount-1){
      currentCount--;
      paginationActiveElements(currentCount);
      //console.log('data[currentCount] левая ', data[currentCount])
    }
  });



  buttons[1].addEventListener('click', () => {

    if(currentCount >= 0 && currentCount < maxCount-1){
      currentCount++;
      paginationActiveElements(currentCount);
      //console.log('data[currentCount] правая ', data[currentCount])
    }
  });
}