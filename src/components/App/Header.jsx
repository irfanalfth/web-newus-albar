import { useState } from "react";
import aboutData from "@data/App/header.json";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const data = aboutData;

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <header className="style-4" data-scroll-index="0">
      <div className="content">
        <div className="container mb-40">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 mb-30">
              <div className="info">
                <div className="section-head style-4">
                  <h2 className="mb-20">
                    {"New Experience With"}{" "}
                    <span> {"Newus Technology."} </span>{" "}
                  </h2>
                </div>
                <p className="text">
                  {
                    <>
                      Tujuan kami adalah menyediakan produk dan layanan untuk Goverment (Pemerintahan) dan Corporate (Perusahaan) dalam penerapan teknologi informasi yang efisien.
                    </>
                  }
                </p>
                {/* <a
                  href="page-contact-5.html"
                  className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
                >
                  <small> Get Starterd </small>
                </a> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img mb-40 mb-lg-0">
                <img src="/assets/img/about/ipad.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/img/header/header_4_bubble.png"
          alt=""
          className="bubble"
        />
      </div>
      <img src="/assets/img/header/header_4_wave.png" alt="" className="wave" />
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="pGbIOC83-So"
          onClose={() => setOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
