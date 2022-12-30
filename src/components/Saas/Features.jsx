import features from '@data/Saas/features.json';
import featuresRTL from '@data/Saas/features-rtl.json';

const Features = ({ isServices, rtl }) => {
  const featuresData = rtl ? featuresRTL : features;

  return (
    <section className={`features  style-5 ${isServices ? 'pt-10':'bg-gray5'}`} data-scroll-index="3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {
              isServices ? 
              (
                <div className="section-head text-center mb-20 style-5">
                  <h2 className="mb-20">{ 'Our' } <span>{'Services' }</span></h2>
                  <p>
                    {'We provide perfect IT Solutions for your business' }
                  </p>
                </div>
              )
              :
              (
                <div className="section-head text-center mb-60 style-5">
                  
                </div>
              )
            }
          </div>
        </div>
        <div className="content">
          <div className="row">
            {
              featuresData.map((feature, i) => (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <a href={feature.link} className="features-card mb-30 style-5">
                    <div className="icon">
                      <img src={feature.image} alt="" />
                    </div>
                    <div className="info">
                      <h5 className="card-title">
                        { feature.title }
                      </h5>
                      <p className="text">
                        { feature.description }
                      </p>
                    </div>
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features