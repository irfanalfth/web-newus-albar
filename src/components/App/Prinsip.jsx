import prinsip from '@data/App/prinsip.json';

const Prinsip = () => {
    const title = prinsip.title;
    const icon = prinsip.icon;
    return (
        <section className=" style-3 ">
            <div className="container">
                {
                    <div className="section-head mb-20 style-6 text-center">
                        <h2 className="mb-20"> Prinsip & Nilai
                            <span> <small>Perusahaan </small> </span>
                        </h2>
                    </div>
                }
            </div>
            <div className="content frs-content ">
                <div className="container ">
                    <div className="row text-center ">
                        <div className="col-6 col-lg-4 mb-40 d-flex flex-column align-items-center">
                            <div className="icon-150 slide_up_down">
                                <img src={icon.icon1} alt="" />
                            </div>
                            <h4 >{title.title1}</h4>
                        </div>
                        <div className="col-6 col-lg-4 mb-40 d-flex flex-column align-items-center">
                            <div className="icon-150 slide_up_down">
                                <img src={icon.icon2} alt="" />
                            </div>
                            <h4 >  {title.title2}</h4>
                        </div>
                        <div className="col-6 col-lg-4 mb-40 d-flex flex-column align-items-center">
                            <div className="icon-150 slide_up_down">
                                <img src={icon.icon3} alt="" />
                            </div>
                            <h4 >  {title.title3}</h4>
                        </div>
                        <div className="col-6 col-lg-4 mb-40 d-flex flex-column align-items-center">
                            <div className="icon-150 slide_up_down">
                                <img src={icon.icon4} alt="" />
                            </div>
                            <h4 >  {title.title4}</h4>
                        </div>
                        <div className="col-6 col-lg-4 mb-40 d-flex flex-column align-items-center">
                            <div className="icon-150 slide_up_down">
                                <img src={icon.icon5} alt="" />
                            </div>
                            <h4 >  {title.title5}</h4>
                        </div>
                        <div className="col-6 col-lg-4 mb-40 d-flex flex-column align-items-center">
                            <div className="icon-150 slide_up_down">
                                <img src={icon.icon6} alt="" />
                            </div>
                            <h4 >  {title.title6}</h4>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Prinsip