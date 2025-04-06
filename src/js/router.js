import Navigo from "navigo";
import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";


const router = new Navigo('/', { linksSelector: 'a[href^="/"]' }); // для всех ссылок начинающихся на /

export const initRouter = () => {  
  router
    .on('/', () => {  // при прееходе на "/"", запустися колбэк
      document.body.append(Header(), Footer())
    })

    .on('/favorite', () => { 
      console.log('favorite')
    })

    .notFound(()=>{
      console.log('404')
    })

    router.resolve(); // запуск роутера
} 