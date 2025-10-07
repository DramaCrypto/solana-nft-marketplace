import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// components
import ItemCard2 from "@/components/sections/ItemCard2";
import BidModal from "../elements/BidModal";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  loop: false,
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  spaceBetween: 30,
  navigation: {
    clickable: true,
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};

export default function Seller3({ items, loading }) {
  const [isBidModal, setBidModal] = useState(false);

  const navigate = useNavigate();

  const handleBidModal = () => setBidModal(!isBidModal);

  return (
    <>
      <div className="tf-section-1 seller ">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section">
                <h2 className="tf-title pb-20">Featured Items</h2>
              </div>
            </div>
            <div className="col-md-12">
              <Swiper
                {...swiperOptions}
                className="featured pt-10 swiper-container carousel"
              >
                <div className="swiper-wrapper">
                  {!loading &&
                    items.map((item) => (
                      <SwiperSlide key={"item_" + item.id}>
                        <ItemCard2
                          item={item}
                          onImageClicked={() => {
                            navigate("/item/" + item.id);
                          }}
                        ></ItemCard2>
                      </SwiperSlide>
                    ))}
                  {loading &&
                    Array(5)
                      .fill(null)
                      .map((_, index) => (
                        <SwiperSlide key={"loading_item_" + index}>
                          <ItemCard2 loading={true}></ItemCard2>
                        </SwiperSlide>
                      ))}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
    </>
  );
}
