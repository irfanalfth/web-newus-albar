import challengeData from '@data/SingleProject/challenge.json'

const Challenge = ({ style = "4", rtl }) => {
  const data = rtl ? challengeDataRTL : challengeData;
  return (
    <div className="challenge section-padding style-5 overflow-hidden">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-4">
            <div className={`section-head style-${style}`}>
              <h2>{ 'Our' } <br /> <span>{ 'Challenge' }</span> </h2>
            </div>
          </div>
          
        </div>
        <div className="imgs mt-60 mb-100">
          <div className="row">
            <div className="col-lg-6">
              <div className="img img-cover rounded-3 overflow-hidden mb-30 mb-lg-0">
                <img src="/assets/img/single_project/ch_1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img img-cover rounded-3 overflow-hidden">
                <img src="/assets/img/single_project/ch_2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Challenge