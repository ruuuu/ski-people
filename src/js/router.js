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
import { slider } from './slider.js';
import { Cart } from "../components/cart.js";
import { addToCart } from "./addToCart.js";
import { cartCount } from "./cartCount.js";
import { Order } from "../components/order.js";




// создаем роутер:
export const router = new Navigo('/', { linksSelector: 'a[href^="/"]' }); // для всех ссылок начинающихся на /


export const initRouter = () => {  
  router
    .on('/', async () => {  // при прееходе на "/", запустися колбэк
      const goods = await getData(); //  [Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(12), Array(4)]
      //console.log('goods[0] ', goods[0]);
      Header(); 
      Catalog('', main(), goods[0]); 
      ProductList("Список товаров", goods[0], main());
      Pagination('', main(), goods);
      paginationCount(goods);
      Footer();
      addFavorite(goods[0]);
      addToCart(goods[0]); // наешивае обработчик клика на кнопку Корзина
      
      router.updatePageLinks(); // чтоб не было перезагрузки станицы(отслеживает новые роуты в урле)
      },
      {
       leave(done){ // хук сработает когда выходим со '/'
          Catalog('remove');
          ProductList('remove');
          Pagination('remove');
          done();
       },
    },)

    .on('/product', async (id) => {  // id товара получаем пр переходе на урл /product?id=${id}
      const goods = await getData(); 
      const obj = goods.flat(Infinity).find((item) => item.id === Number(id.params.id)); //  из массива масивов [[],[],[]] делаем один большой массив
      //console.log('obj ', obj);

      Header(); 
      Breadcrumbs('', main(), 
        [{ 'text': 'Главная', 'href': '/' }, 
         { 'text': obj.type, 'href':  '/favorite'}, // ProductList("Список товаров", goods.flat(Infinity).filter((item) => item.type === obj.type), main())
         { 'text': obj.name, 'href': '#' }
        ]
      );
      Product(obj.name, main(), goods, id.params.id); 
      slider();
      Footer();
      router.updatePageLinks();
    },
    {
      leave(done){ // хук сработает когда выходим со '/product'
        Product('remove');
        Breadcrumbs('remove');
        done();
      },
    },)

    .on('/favorite', async() => { 
      const goods = await getData();
      Header(); 
      Breadcrumbs('', main(), 
        [{ 'text': 'Главная', 'href': '/' }, 
         { 'text': 'Избранное', 'href': '/favorite' },
        ]
     );
      ProductList("Избранное", localStorageLoad('ski-people-favorite'), main());
      Pagination('', main(), goods);
      paginationCount(goods);
      Footer();
      addFavorite(goods[0]);
      router.updatePageLinks();
    },
    {
      leave(done){ // хук сработает когда выходим со '/favorite'
        Breadcrumbs('remove');
        ProductList('remove');
        Pagination('remove');
        done();
      },
    },)

    .on('/search', async (query) => {  // при прееходе на "/search", запустися колбэк
      console.log('query.params.search ', query.params.search);

      const goods = await getData(query.params.search);
      console.log('goods in /seach router ', goods);

      Header(); 
      Catalog('', main(), goods); 
      ProductList("Список товаров", goods, main());
      Footer();
      addFavorite(goods);
      router.updatePageLinks(); // чтоб не было перезагрузки станицы
      },
      {
       leave(done){ // хук сработает когда выходим со '/search'
          Catalog('remove');
          ProductList('remove');
          done();
       },
    },)


    .on('/cart', async () => {  
      const cartGoods = await localStorageLoad('ski-people-cart'); // спсиок товаров Корзины
      Header(); 
      Cart('Корзина', main(), cartGoods);
      cartCount();
      Footer();
      router.updatePageLinks(); // чтоб не было перезагрузки станицы
      },
      {
       leave(done){ // хук сработает когда выходим со '/cart'
          Cart('remove');
          done();
       },
    },)

    .on('/order', async () => {  
      const dataOrder = await localStorageLoad('ski-people-order'); // данные заказа
      Header(); 
      // функия рендера модалки и передать туда:
      Order('', main(), dataOrder); 
      Footer();
      router.updatePageLinks(); // чтоб не было перезагрузки станицы
      },
      {
       leave(done){ // хук сработает когда выходим со '/cart'
          Order('remove');
          done();
       },
    },)

    .notFound(() => {
      document.body.innerHTML = `<h2>Такой страницы не существует</h2>`;
      console.log('404');
    })

    router.resolve(); // запуск роутера
} 