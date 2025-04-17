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
import { Pagination } from "../components/pagination.js";
import { paginationCount } from "./paginationCount.js";
import { paginationData } from "./paginationData.js";



// создаем роутер:
export const router = new Navigo('/', { linksSelector: 'a[href^="/"]' }); // для всех ссылок начинающихся на /


export const initRouter = () => {  
  router
    .on('/', async () => {  // при прееходе на "/", запустися колбэк
      const goods = await getData();
      paginationData(goods, 12);    // [ [{},{}], [] ]
      Header(); 
      Catalog('', main(), goods); 
      ProductList("Список товаров", goods, main());
      Pagination('', main());
      //search();
      Footer();
      addFavorite(goods);
      paginationCount(paginationData(goods, 12));
      router.updatePageLinks(); // чтоб не было перезагрузки станицы
      },
      {
       leave(done){ // хук сработает когда выходим со '/'
          Catalog('remove');
          ProductList('remove');
          Pagination('remove');
          done();
       },
    },)

    .on('/product', () => { 
      Header(); 
      Breadcrumbs('', main(), '');
      Product('Горные лыжи', main()) 
      Footer();
      router.updatePageLinks();
    },
    {
      leave(done){ // хук сработает когда выходим со '/favorite'
        Product('remove');
        Breadcrumbs('remove', main());
        done();
      },
    },)

    .on('/favorite', async() => { 
      const goods = await getData();
      const array = paginationData(goods, 12);  
      Header(); 
      Breadcrumbs('', main(), '');
      ProductList("Избранное", localStorageLoad('ski-people-favorite'), main());
      Pagination('', main());
      Footer();
      addFavorite(goods);
      paginationCount(array);
      router.updatePageLinks();
    },
    {
      leave(done){ // хук сработает когда выходим со '/favorite'
        Breadcrumbs('remove', main());
        ProductList('remove');
        Pagination('remove');
        done();
      },
    },)

    .on('/search', async (query) => {  // при прееходе на "/search", запустися колбэк
      // console.log('searchParam ', searchParam) // { data, hashString,  params: {search: 'Лыжи'} }
      console.log('query in router ', query.params.search);

      const goods = await getData(query.params.search);
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