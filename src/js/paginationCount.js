

export const paginationCount = () => {

  const buttons = document.querySelectorAll('.count-text__button');
  let currentCount = 0;


  buttons[0].addEventListener('click', (evt) => {
    currentCount--;
    // const filterArray = array.slice(n, n+9);
    // ProductList('', filterArray, main());
  });


  buttons[1].addEventListener('click', (evt) => {
    currentCount++;
    // const filterArray = array.slice(n-9, n);
    // ProductList('', filterArray, main());
  });
}