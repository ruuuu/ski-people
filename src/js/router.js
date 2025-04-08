import Navigo from "navigo";
import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import { Catalog } from "../components/catalog.js";
import { Favorite } from "../components/favorite.js";


const router = new Navigo('/', { linksSelector: 'a[href^="/"]' }); // для всех ссылок начинающихся на /

export const initRouter = () => {  
  router
    .on('/', () => {  // при прееходе на "/", запустися колбэк
      document.body.append(Header(), Catalog(), Footer())
    })

    .on('/favorite', () => { 
      document.body.append(Header(), Catalog(), Favorite(),  Footer()) // 
    })

    .notFound(()=>{
      console.log('404')
    })

    router.resolve(); // запуск роутера
} 