import clients from '@data/App/clients.json';

const ClientsAbout = ({ rtl }) => {
  return (
    <section className="clients section-padding style-5" data-scroll-index="6">
      <div className="container">
        {
          
          <div className="section-head mb-70 style-6 text-center">
            <h2 className="mb-20"> Our Optimized
              <span> <small> Clients </small> </span>
            </h2>
            <p className="color-666">More 15,000 Companies & partners trusted & choice Itekseo</p>
          </div>
        }
        <div className="content d-flex flex-wrap">
          {
            clients.map((client, index) => (
              <a className="img img-card" key={index}>
                <img src={client} alt="" />
              </a>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ClientsAbout