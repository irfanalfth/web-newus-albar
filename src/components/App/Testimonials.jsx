import { useState } from 'react';
import ModalVideo from "react-modal-video";
import testimonialsData from '@data/App/testimonials.json';
import testimonialsDataRTL from '@data/App/testimonials-rtl.json';
import "react-modal-video/css/modal-video.css";

const Testimonials = ({ rtl }) => {
  const [isOpen, setOpen] = useState(false);
  const data = rtl ? testimonialsDataRTL : testimonialsData;

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <section className="testimonials style-4 pt-20" data-scroll-index="5">
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-head style-4">
                <small className="title_small">{ 'Testimonials' }</small>
                <h2 className="mb-20">{  'Feedback' } <span>{'Customers' }</span></h2>
              </div>
              <p className="text mb-10">
                {'Sangat bagus dan berpengalaman jika membuat sistem informasi di Cv. Newus Teknologi.' }
              </p>
              <div className="numbs  column-flex justify-content-center">
                {
                  data.numCards.map((card, index) => (
                    <div className="num-card" key={index}>
                      
                      {
                        card.stars &&
                        <div className="stars1 text-center">
                          { Array(card.stars).fill().map((_,i) => <i className="fas fa-star" key={i}></i>) }
                        </div>
                      }
                      <div className="img-testi">
                        <img src={card.image} alt="" />
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testi-cards">
                {
                  data.testiCards.map((card, index) => (
                    <div className="client_card" key={index}>
                      <div className="user_img">
                        <img src={card.userImg} alt="" />
                      </div>
                      <div className="inf_content">
                        <div className="stars mb-2">
                          { Array(card.stars).fill().map((_,i) => <i className="fas fa-star" key={i}></i>) }
                        </div>
                        <h6>
                          { typeof card.title === 'string' ? card.title : (<>{card.title.text1} <br /> {card.title.text2}</>) }
                        </h6>
                        <p>{ card.author.name } <span className="text-muted"> /  { card.author.position } { rtl ? 'في' : 'at' } <span>{ card.author.company }</span> </span></p>
                      </div>
                    </div>
                  ))
                }
                <img src="/assets/img/contact_globe.svg" alt="" className="testi-globe" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        typeof window !== "undefined" && 
          (
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="pGbIOC83-So"
              onClose={() => setOpen(false)}
            />
          )
      }
    </section>
  )
}

export default Testimonials