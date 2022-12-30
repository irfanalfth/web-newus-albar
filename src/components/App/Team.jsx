import teamMembers from '@data/App/team.json'

const Team = () => {
  return (
    <section className="team section-padding mb-10 style-6">
      <div className="content">
        <div className="container">
          <div className="section-head text-center style-4 mb-20">
            <h2 className="mb-20">Our <span>Teams</span> </h2>
            <p>The Professional Creative Team </p>
          </div>
          <div className="row">
            {
              teamMembers.map((member, index) => (
                <div className="col-lg-3" key={index}>
                  <div className={`team-card ${index !== teamMembers.length - 1 ? 'mb-30 mb-lg-0':''} style-6`}>
                    <div className="img img-cover">
                      <img src={member.picture} alt="" />
                      <div className="social-icons">
                        <a href="#" className="me-1">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="me-1">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="me-1">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                    <div className="info">
                      <a className="d-block" href="#"><h6>{ member.name }</h6></a>
                      <small className="tags">{ member.position }</small>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team