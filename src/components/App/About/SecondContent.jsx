const SecondContent = ({ accordions, rtl }) => {
  return (
    <div className="content sec-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 order-2 order-lg-0">
            <div className="info">
              <div className="section-head style-4">
                <small className="title_small">
                  {"Mobile Apps Development"}
                </small>
                <h2 className="mb-30">
                  {"build your interesting"} <span> {"application"} </span>
                </h2>
              </div>
              <p className="text mb-40">
                {
                  <>
                    Stay focused and productive with a clean and clutter-free
                    note <br /> space. The flexible ways to organize your notes:
                    hashtags, nested notebooks, pinning notes to the top of the
                    note list, etc
                  </>
                }
              </p>

              <a
                href="https://chrome.google.com/webstore/category/extensions"
                rel="noreferrer"
                className="btn btn-img mt-40 rounded-pill"
                target="_blank"
              >
                <div className="icon img-contain">
                  <img src="/assets/img/icons/chrome_icon.png" alt="" />
                </div>
                <div className="inf">
                  <small>{rtl ? "متاح في" : "Available in the"}</small>
                  <h6>{rtl ? "متجر كروم الالكتروني" : "Chrome Web Store"}</h6>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/2mobiles.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/about/about_s4_bubble2.png"
        alt=""
        className="bubble2"
      />
    </div>
  );
};

export default SecondContent;
