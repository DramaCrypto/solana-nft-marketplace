import { useNavigate } from "react-router-dom";
import {
  Autoplay,
  EffectCoverflow,
  FreeMode,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// styles
import styles from "./style.module.css";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation, FreeMode, EffectCoverflow],
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true,
  freeMode: true,
  watchSlidesProgress: true,
  effect: "coverflow",
  grabCursor: true,
  coverflowEffect: {
    rotate: 15,
    stretch: 90,
    depth: 0,
    modifier: 1,
    scale: 0.9,
    slideShadows: false,
  },
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".next-3d",
    prevEl: ".prev-3d",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + +'">' + (index + 1) + "</span>";
    },
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  },
};

// components
import CollectionCard1 from "@/components/sections/CollectionCard1";

export default function TitileSlider1({ collections, loading }) {
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        {...swiperOptions}
        className="swiper swiper-3d-7 swiper-container-horizontal"
      >
        {!loading &&
          collections.map((collection) => (
            <SwiperSlide key={collection.id}>
              <CollectionCard1
                className={styles["collection-card"]}
                collection={collection}
                onImageClicked={() =>
                  navigate("/explore/collections/" + collection.id + "/items")
                }
              />
            </SwiperSlide>
          ))}
        {loading &&
          Array(7)
            .fill(null)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <CollectionCard1 loading={true} />
              </SwiperSlide>
            ))}
      </Swiper>
      <div className="swiper-button-next next-3d over" />
      <div className="swiper-button-prev prev-3d over" />
    </>
  );
}
