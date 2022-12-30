
const Blog = ({ style = "4", data = {} }) => {

  return (
    <section className="all-news section-padding pt-0 blog bg-transparent style-3">
      <div className="container">

        <div className="blog-details-slider mb-10">
          <div className="section-head text-center mb-20 style-5">
           
            <small className="d-block date text">
              <a href="#" className={`text-uppercase border-end brd-gray pe-3 me-3 color-blue${style} fw-bold`}>{data.type}</a>
              <i className="bi bi-clock me-1"></i>
              <span className="op-8 ms-1">{'Posted on'} {data.time} </span>

            </small>
            <h5 className="mb-10 color-000">{data.title}</h5>
          </div>
          <div className="content-card">
            <div className="img">
              <img src={data.img} alt="" />
            </div>

          </div>
        </div>
        <div className="row gx-4 gx-lg-5">
          <div className={"text-justify"} dangerouslySetInnerHTML={{ __html: data.content }} >

          </div>
         
        </div>
      </div>
    </section>
  )
}


export default Blog