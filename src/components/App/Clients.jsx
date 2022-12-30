import clients from "@data/App/clients.json";

const Clients = ({ rtl }) => {
  return (
    <section className="clients pt-20">
      <div className="container">
        <div className="text-center">
          <h5 className="fw-bold mb-40">
          {"Mitra"}{" "}
            <span className="color-blue4">
              {"Newus"}
            </span>{" "}
            {"Technology"}
          </h5>
        </div>
        <div className="client-logos pb-10">
          <div className="row align-items-center">
            {clients.map((client, index) => (
              <div className="col-6 col-lg-2" key={index}>
                <a href="#" className="img d-block">
                  <img
                    className="mb-4"
                    // width={50}
                    height={60}
                    src={client}
                    alt=""
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
