import 'normalize.css';
import './style.scss';

// import Swiper from 'swiper';
// import { Navigation, Pagination, Thumbs } from 'swiper/modules';
// import 'swiper/css/navigation';
// import 'swiper/css';
import { initRouter } from './js/router.js';
import { slider } from './js/slider.js';



const init = () => {
  initRouter()
  slider();
};

init(); // начало отсюда




