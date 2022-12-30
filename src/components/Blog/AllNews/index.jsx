import { useEffect } from "react";
// import Link from "next/link";
import allNewsData from '@data/Blog/all-news.json';

const AllNews = ({ style = "4" }) => {
  const data = allNewsData;
  useEffect(() => {
    setTimeout(() => {
      if (!mixitup) return;
      mixitup(".all-news");
    }, 0);
  }, []);

  return (
    <section
      className={`all-news blog section-padding pt-50 style-3 ${style === "5" ? "" : "bg-white"
        }`}
    >
      <div className="container">

        <div className="controls pb-50 text-center">
          {data.filters.map((filter, index) => (
            <button
              key={index}
              type="button"
              className="control"
              data-filter={filter.filter}
            >
              {filter.title}
            </button>
          ))}
        </div>
        <section className={'col-lg-12'}>
          <div className="content">

            <div className="row mix-container">
              {
                data.blogs.map((blog, index) => (
                  <div className={`mix ${blog.filter}`} key={index}>
                    <div 
                    className={`card border-0 ${
                      index !== data.blogs.length - 10 ? "border-bottom brd-gray" : ""} pb-30 mb-30`}>
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="img img-cover">
                            <img src={blog.cover} className="radius-7" alt="..." />
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="card-body p-0">
                            <small className="d-block date text">
                              <a href="#" className={`text-uppercase border-end brd-gray pe-3 me-3 color-blue${style} fw-bold`}>{blog.type}</a>
                              <i className="bi bi-clock me-1"></i>
                              <a href="#" className="op-8">{blog.time}</a>
                            </small>
                            <a href={blog.link}>
                              <a className="card-title mb-10">{blog.title}</a>
                            </a>
                            <p className="fs-13px color-666">{blog.desc} [...]</p>
                            <div className="auther-comments d-flex small align-items-center justify-content-between op-9">
                              <div className="l_side d-flex align-items-center">
                                <span className={`icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue${style} p-2 me-2 text-white`}>
                                  {blog.userImgLetter}
                                </span>
                                <a href="#">
                                  <small className="text-muted">{'By'}</small> {blog.username}
                                </a>
                              </div>
                              <div className="r-side mt-1">
                                <i className="bi bi-chat-left-text me-1"></i>
                                <a href="#">{blog.comments}</a>
                                <i className="bi bi-eye ms-4 me-1"></i>
                                <a href="#">{blog.views}</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }

              {/* <div className={`pagination style-5 color-${style} justify-content-center mt-60`}>
        <a href="#" className="active">
          <span>1</span>
        </a>
        <a href="#">
          <span>2</span>
        </a>
        <a href="#">
          <span>3</span>
        </a>
        <a href="#">
          <span>4</span>
        </a>
        <a href="#">
          <span>...</span>
        </a>
        <a href="#">
          <span>20</span>
        </a>
        <a href="#">
          <span className="text">{ rtl ? "التالي" : "next" } <i className="fas fa-chevron-right"></i> </span>
        </a>
      </div> */}

            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default AllNews