
import { router } from './router.js';



export const search = () => {

  const searchForm = document.querySelector('.header__search');
  const input = searchForm.querySelector('.header__search-input');

  if(searchForm){
    searchForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      //console.log('input.value in search.js ', input.value)
      router.navigate(`/search?search=${input.value}`); // после отправки формы перейдет на этот урл
    });
  }


}