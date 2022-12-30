import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";
import slides from "@data/Blog/slides.json";
import slidesRTL from "@data/Blog/slides-rtl.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const BlogSlider = ({ style = "4" }) => {
  const data = slides;

  return (
    <section className="blog-slider pt-10 pb-0 style-1">
      <div className="container">
        <div className={`section-head text-center style-${style}`}>
          <h2 className="mb-10"><span>{"Blog Newus Tech."}</span>
            {/* {"Newus Teknologi"}  */}
          </h2>
          {/* <div className="text color-666">
            {
              "Get the latest articles from our blog, writing, discuss and share"
            }
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
