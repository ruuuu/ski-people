import Navigo from "navigo";
import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import { Catalog } from "../components/catalog.js";
import { Favorite } from "../components/favorite.js";
import { main } from "../components/main.js";
import { Breadcrumbs } from "../components/breadcrumbs.js";
import { ProductList } from "../components/productList.js";
import { getData } from "./api.js";
import { localStorageLoad, localStorageSave } from "./localStorage.js";
import { addFavorite } from "./addFavorite.js";




// создаем роутер:
const router = new Navigo('/', { linksSelector: 'a[href^="/"]' }); // для всех ссылок начинающихся на /


export const initRouter = () => {  
  router
    .on('/', async () => {  // при прееходе на "/", запустися колбэк
      const goods = await getData();
      Header(); 
      Catalog(main(), goods); 
      ProductList("Список товаров", goods, main());
      Footer();
      addFavorite(goods)
    })

    .on('/product', () => { 
      console.log('product')
    })

    .on('/favorite', async() => { 
      const goods = await getData();
      Header(); 
      //main(Breadcrumbs());
      ProductList("Избранное", localStorageLoad('ski-people-favorite'), main());
      addFavorite(goods)
      Footer();
    })

    .notFound(() => {
      document.body.innerHTML = `<h2>Такой страницы не существует</h2>`;
      console.log('404')
    })

    router.resolve(); // запуск роутера
} 