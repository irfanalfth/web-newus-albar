import Link from 'next/link';
import aboutData from '@data/App/about.json';

const About = () => {
  return (
    <section className="about style-4 mb-20">
      <div className="integration">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-head text-center style-4">
              <small className="title_small">Newus Technology</small>
              <h2 className="mb-30"> <span>VISI & MISI</span> </h2>
            </div>
              <h5 className="mb-20 text-center">Menyediakan Sistem Informasi dan Aplikasi bagi pelaku bisnis yang efektif agar pelaku bisnis dapat mengikuti perkembangan teknologi</h5>
              <h5 className=" text-center">Memperhatikan dengan cermat kebutuhan klien agar dapat memberikan solusi yang terbaik</h5>
          </div>
        </div>
        <div className="container">
          <div className="content mb-20 pb-10 border-1 border-bottom brd-gray">
            {
              aboutData.integrations.map((item, index) => (
                <div className="img" key={index}>
                  <img src={item} alt="" className="mt-20" />
                </div>
              ))
            }
          </div>
        </div>
        <img src="/assets/img/about/intg_back.png" alt="" className="intg-back" />
      </div>
      <div className="content frs-content">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="info">
                <div className="section-head style-4">
                  <h2 className="mb-30">Siapa <span>Kami?</span> </h2>
                </div>
                <p className="text mb-40">
                  Newus Teknologi adalah perusahaan yang bergerak di bidang Teknologi Informasi khususnya dalam pembuatan Website Company Profile, Aplikasi berbasis Smartphone (Android & iOS)
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="info">
                <div className="section-head style-4">
                  <h2 className="mb-30">Kenapa Memilih <span>Kami ?</span> </h2>
                </div>
                <div>
                  <p>Kami bukan hanya vendor IT melainkan setelah anda menjadi klien kami, kami juga menjadi mitra anda dan mendukung Produktivitas bisnis dan Kinerja anda</p>
                  <p>Bisnis kami telah diposisikan untuk membuat dan mencapai hasil yang maksimal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/img/about/about_s4_lines.png" alt="" className="lines" />
        <img src="/assets/img/about/about_s4_bubble.png" alt="" className="bubble" />
      </div>
    </section >
  )
}

export default About