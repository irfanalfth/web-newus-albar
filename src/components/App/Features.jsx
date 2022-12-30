import features from '@data/App/features.json';

const Features = ({ }) => {
  const featuresData = features;

  return (
    <section className="features pt-20 style-4" data-scroll-index="1">
      <div className="container">
        <div className="section-head text-center style-4">
          <h2 className="mb-0">{'Our' } <span> { 'Clients' } </span> </h2>
        </div>
      </div>
      <img src="/assets/img/feat_circle.png" alt="" className="img-circle" />
    </section>
  )
}

export default Features