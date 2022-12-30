import React from 'react'

const Details = () => {
  return (
    <section className="ser-details section-padding overflow-hidden">
      <div className="container">
        <div className="content">
          <div className="row gx-5">
            <div className="col-lg-8">
              <div className="main-info">
                <div className="main-img img-cover">
                  <img src="/assets/img/services/services2.png" alt="" />
                </div>
                <h3 className="text-capitalize mb-20"> Website Development </h3>
                <p className="mb-10">
                Pengembangan web atau web development adalah sebuah proses untuk pemeliharaan sekaligus pembangunan sebuah situs.Dalam hal ini, tugas web development adalah untuk menciptakan situs yang menarik, kinerjanya cepat dengan sesuai kebutuhan pelanggan. Proses pengembangan web ini dilakukan melalui mulai dari desain, konten, pembuatan skrip, persiapan server hingga pengaturan keamanan jaringan.Spesialisasi yang perlu ada dalam melakukan web development adalah meliputi pembuatan kode halaman situs menggunakan editor teks, menciptakan web memakai dreamweaver, pembaruan blog, dan lain sebagainya.                </p>
                <p className="pb-50">
                Jadi kesimpulannya, apa itu web development? Secara sederhana, web development adalah layanan yang meliputi setiap pembuatan, pemeliharaan dan pembaruan situs agar kinerjanya optimal dan sesuai kebutuhan pelanggan.Dalam sebuah industri, web development adalah sesuatu yang sangat penting karena berperan dalam memperkenalkan dan mempromosikan produk serta layanan kepada calon pelanggan supaya mudah mengenalnya dan membuat sebuah produk dapat mempunyai nilai lebih.
                </p>
                <div className="last-next-serv d-flex align-items-center justify-content-between mt-60">
                  <a href="#" className="item">
                    <p> Prev Service </p>
                    <h5 className="fw-bold"> Product Design </h5>
                  </a>
                  <a href="#" className="item text-end">
                    <p> Next Service </p>
                    <h5 className="fw-bold"> Web Development </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/* <div className="side-links mt-5 mt-lg-0">
                <div className="links-card mb-40">
                  <h5> Service Category </h5>
                  <ul>
                    <li>
                      <Link href="/services-details/bootcamp/"> <i className="far fa-angle-right icon"></i> Bootcamp </Link>
                    </li>
                    <li>
                      <Link href="/services-details/mobile-app/"> <i className="far fa-angle-right icon"></i> Mobile App Development </Link>
                    </li>
                    <li>
                      <Link href="/services-details/website/"> <i className="far fa-angle-right icon"></i> Web Development </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details