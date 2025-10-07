import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    direction: 'vertical',
    spaceBetween: 45,
    grabCursor: false,
    speed: 10000,
    centeredSlides: false,
    loop: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true
    }
}

export default function TitileSlider7() {
    return (
        <>

            <Swiper {...swiperOptions} className="swiper-container autoslider1reverse swiper-container-initialized swiper-container-vertical swiper-container-pointer-events">
                <SwiperSlide>
                    <img src="/assets/images/item-background/bg-home7-item3.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/item-background/bg-home7-item4.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
