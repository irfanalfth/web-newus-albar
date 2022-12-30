import Link from "next/link";
import footerData from "@data/Startup/footer.json";

const Footer = () => {
  const FooterData = footerData;
  return (
    <footer className=" style-7 border-top pt-40">
      <div className="container">
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-3 col-sm-6">
            <div className="items">
              <div className="title fw-bold">
                {"NewusTech - New Experience with Us"}
              </div>
              <ul>
                <li className="color-666 mb-2">
                  <small>{FooterData.address}</small>
                </li>
                <li className="color-666 mb-2">
                  <small>{FooterData.phone}</small>
                </li>
                <li className="color-666 mb-2">
                  <small>{FooterData.email}</small>
                </li>
              </ul>
              <div className="socail-icons">
                <a
                  href="https://www.twitter.com/newus_teknologi/"
                  className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="facebook.com"
                  className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/alinapps.id/"
                  className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-2">
            <div className="items">
              <div className="title fw-bold">{"Services"}</div>
              <ul>
                {FooterData.services.map((service, index) => (
                  <li key={index}>
                    <a href={service.link}>{service.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="items">
              <div className="title fw-bold">{"Information"}</div>
              <ul>
                {FooterData.information.map((information, index) => (
                  <li key={index}>
                    <Link href={information.link}>
                      <a>{information.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="logo">
                <img src="/assets/img/newus.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-6 float-right">
              <small className="small">
                {"© 2022 Copyrights by"}{" "}
                <small className="fw-bold text-decoration-underline">
                  NewusTech.
                </small>{" "}
                {"All Rights Reserved."}
              </small>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
