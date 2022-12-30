import communityData from '@data/Contact/community.json';

const Community = () => {
  return (
    <section className="community mb-50 style-5">
      <div className="container">
        <div className="section-head text-center style-4 mb-40">
          <h2 className="mb-20">  <span>Contact Us</span> </h2>
        </div>
        <div className="content rounded-pill">
          {
            communityData.map((card, i) => (
              <div className="commun-card" key={i}>
                <div className="icon icon-45">
                  <img src={card.icon} alt="" />
                </div>
                <div className="inf">
                  <h6>{ card.info }</h6>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Community