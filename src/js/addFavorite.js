import { localStorageLoad, localStorageSave } from "./localStorage.js"




// добавлени товара в Избранное:
export const addFavorite = async (data) => {

  
  const favoriteList = localStorageLoad('ski-people-favorite'); // получили из сторидж [{},{}]

  const list = document.querySelector('.goods__list');

  if(list){
    list.addEventListener('click', (evt) => { // навешиваем обработчк на родителя(делегирование) чтобы при добавлении новых картчоек  обработчик автоматом навесился
      
      const likeButton = evt.target.closest('.card__like-button') // если нажатый элемент  сердечко
        
        
      if(likeButton) { 
        const id = Number(likeButton.dataset.id);          // получили знач дата атрибута data-id
        const item = data.find((item) => item.id === id);

        likeButton.querySelector('svg').classList.toggle('card__like-svg--active');

        if(favoriteList.length === 0){
          favoriteList.push(item);
          localStorageSave('ski-people-favorite', favoriteList);  // обновляем сторидж
        }
        else{
          let thereIs = false;
          favoriteList.forEach((favoriteItem, index )=> {
            if(favoriteItem.id === id){
              thereIs = true;
              favoriteList.splice(index, 1); // удаляем элемент по его индексу из favoriteList
              localStorageSave('ski-people-favorite', favoriteList); 
            }
          });

          if(!thereIs){ // если элемента такого нет в favoriteList
            favoriteList.push(item)
            localStorageSave('ski-people-favorite', favoriteList); // обновляем сторидж
          }
        }
      }
    });
  }



}