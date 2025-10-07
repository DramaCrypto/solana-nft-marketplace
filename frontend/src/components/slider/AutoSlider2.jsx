import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 14,
    direction: 'vertical',
    speed: 10000,
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true
    }


}

export default function AutoSlider2() {
    return (
        <>
            {/* <Swiper {...swiperOptions} className="abc">
                <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper> */}


            <Swiper {...swiperOptions} className="swiper-container autoslider4reverse swiper-container-vertical">
                <SwiperSlide>
                    <img src="/assets/images/item-background/bg-action-1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/item-background/bg-action-1.png" alt="" />
                </SwiperSlide>
            </Swiper>

        </>
    )
}
