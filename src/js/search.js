
import { router } from './router.js';



export const search = () => {

  const searchForm = document.querySelector('.header__search');
  const input = searchForm.querySelector('.header__search-input');

  if(searchForm){
    searchForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      router.navigate(`/search?query=${input.value}#`); // перейдет на этот урл
    });
  }


}