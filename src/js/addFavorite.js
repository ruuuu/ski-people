import { localStorageLoad, localStorageSave } from "./localStorage.js"

// добавлени товара в Избранное:
export const addFavorite = async (data) => {

  console.log('koad localStorage')
  const favoriteList = localStorageLoad('ski-people-favorite'); // [{},{}]

  const list = document.querySelector('.goods__list');

  if(list){
    list.addEventListener('click', (evt) => {
      if(evt.target.closest('.card__like-button')) { // если нажали на сердечко
        const id = Number(evt.target.parentNode.parentNode.dataset.id)          // получили знач дата атрибута data-id
        const item = data.find((item) => item.id === id)

        if(favoriteList.length === 0){
          favoriteList.push(item);
          localStorageSave('ski-people-favorite', favoriteList); 
        }
        else{
          let thereIs = false;
          favoriteList.forEach((favoriteItem, ind )=> {
            if(favoriteItem.id === id){
              thereIs = true;
              favoriteList.splice(ind, 1); // удаляем из favoriteList
              localStorageSave('ski-people-favorite', favoriteList); 
            }
          });

          if(!thereIs){ // если элемента такого нет в favoriteList
            favoriteList.push(item)
          }

        }
      }
    })
  }



}