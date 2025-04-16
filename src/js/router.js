import Navigo from "navigo";
import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import { Catalog } from "../components/catalog.js";
import { main } from "../components/main.js";
import { Breadcrumbs } from "../components/breadcrumbs.js";
import { ProductList } from "../components/productList.js";
import { getData } from "./api.js";
import { localStorageLoad, localStorageSave } from "./localStorage.js";
import { addFavorite } from "./addFavorite.js";
import { Product } from "../components/product.js";
import { search } from "./search.js";



// создаем роутер:
export const router = new Navigo('/', { linksSelector: 'a[href^="/"]' }); // для всех ссылок начинающихся на /


export const initRouter = () => {  
  router
    .on('/', async () => {  // при прееходе на "/", запустися колбэк
      const goods = await getData();
      Header(); 
      Catalog('', main(), goods); 
      ProductList("Список товаров", goods, main());
      search();
      Footer();
      addFavorite(goods);
      router.updatePageLinks(); // чтоб не было перезагрузки станицы
      },
      {
       leave(done){ // хук сработает когда выходим со '/'
          Catalog('remove');
          ProductList('remove');
          done();
       },
    },)

    .on('/product', () => { 
      console.log('product');
      Header(); 
      Product('Горные лыжи', main()) 
      Footer();
      router.updatePageLinks();
    },
    {
      leave(done){ // хук сработает когда выходим со '/favorite'
        Product('remove');
        //Slider('remove')
        done();
      },
    },)

    .on('/favorite', async() => { 
      const goods = await getData();
      Header(); 
      //main(Breadcrumbs());
      ProductList("Избранное", localStorageLoad('ski-people-favorite'), main());
      search();
      Footer();
      addFavorite(goods);
      router.updatePageLinks();
    },
    {
      leave(done){ // хук сработает когда выходим со '/favorite'
        ProductList('remove');
        done();
      },
    },)

    .on('/search', async (search) => {  // при прееходе на "/search", запустися колбэк
      // console.log('searchParam ', searchParam) // { data, hashString,  params: {search: 'Лыжи'} }
      //console.log('search ', search.params.search);
      const goods = await getData(search.params.search);
      Header(); 
      Catalog('', main(), goods); 
      ProductList("Список товаров", goods, main());
      Footer();
      addFavorite(goods);
      router.updatePageLinks(); // чтоб не было перезагрузки станицы
      },
      {
       leave(done){ // хук сработает когда выходим со '/'
          Catalog('remove');
          ProductList('remove');
          done();
       },
    },)

    .notFound(() => {
      document.body.innerHTML = `<h2>Такой страницы не существует</h2>`;
      console.log('404');
    })

    router.resolve(); // запуск роутера
} 