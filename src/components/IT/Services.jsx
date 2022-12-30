import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import features from '@data/Saas/features.json';


import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Services = () => {
  return (
    <section className="services_projects mb-10 mt-20 pt-20 pb-10">
      <div className="container">
        <div data-scroll-index="2" data-scroll-internal-section>
          <div className="section-head mb-30 text-center">
            <h2 className="text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70">services</h2>
          </div>
          <div className="services_slider position-relative">
            <Swiper
              className="swiper-container"
              slidesPerView={3}
              spaceBetween={30}
              speed={1000}
              pagination={{
                  el: ".services_slider .swiper-pagination",
                  clickable: true,
              }}
              navigation={{
                  nextEl: '.services_slider .swiper-button-next',
                  prevEl: '.services_slider .swiper-button-prev',
              }}
              mousewheel={false}
              keyboard={true}
              autoplay={{
                  delay: 4000
              }}
              loop={true}
              breakpoints={{
                0:{
                    slidesPerView: 1
                },
                480:{
                    slidesPerView: 2
                },
                787:{
                    slidesPerView: 2
                },
                991:{
                    slidesPerView: 3
                },
                1200:{
                    slidesPerView: 3
                }
              }}
            >
              {
                features.map((feature, index) => (
                  <SwiperSlide key={index}>
                    <div className="service-box text-white text-center px-4 py-2 brd-light border-end style-2">
                      <div className="icon mb-30">
                        <img src={feature.image} alt="" />
                      </div>
                      <div className="info">
                        <h4>{ feature.title }</h4>
                        <p className="op-7 mt-20 mb-30 px-3">{ feature.description }</p>
                        {/* <div className="tags d-flex flex-wrap justify-content-center mt-30 style-2">
                          {
                            feature.tags.map((tag, i) => (<a href="#" key={i}>{ tag }</a>))
                          }
                        </div> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
            <div className="pagination_circle position-relative pagi_white mt-70">
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services