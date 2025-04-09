import Navigo from "navigo";
import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import { Catalog } from "../components/catalog.js";
import { Favorite } from "../components/favorite.js";
import { main } from "../components/main.js";
import { Breadcrumbs } from "../components/breadcrumbs.js";




const router = new Navigo('/', { linksSelector: 'a[href^="/"]' }); // для всех ссылок начинающихся на /

export const initRouter = () => {  
  router
    .on('/', () => {  // при прееходе на "/", запустися колбэк
      document.body.append(Header(), main(Catalog()), Footer())
    })

    .on('/product', () => { 
      console.log('product')
    })

    .on('/favorite', () => { 
      document.body.append(Header(), main(Breadcrumbs()), main(Favorite()),  Footer()) // 
    })

    .notFound(() => {
      document.body.innerHTML = `Такой страницы не существует`;
      console.log('404')
    })

    router.resolve(); // запуск роутера
} 