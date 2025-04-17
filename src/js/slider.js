import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';



// swiper2- большой слайдер
// swiper -малнткий слайдер

export const slider = () => {

    const swiper = new Swiper(".slider-thumbnails", { 
      spaceBetween: 10,
      slidesPerView: 4,
      modules: [Navigation, Pagination],
    });
    
    const  swiper2 = new Swiper(".product__slider", { 
      spaceBetween: 10,
      navigation: {
        nextEl: ".product__slider-arrow--next",
        prevEl: ".product__slider-arrow--prev",
      },
      thumbs: {
        swiper: swiper,
      },
      modules: [ Navigation, Thumbs]
    });


}