import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
   
}

export default function Blank() {
    return (
        <>
            <Swiper {...swiperOptions} className="abc">
                <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper>
        </>
    )
}
