import { useState } from 'react';
import CountTo from '../CountTo';
import numbers from '@data/App/numbers.json';
// import numbersRTL from '@data/Startup/numbers-rtl.json';

const Numbers = ({}) => {
  const [position] = useState({ from: 4300, to: 4650 });
  const Numbers = numbers;

  return (
    <section className="numbers style-6">
      <div className="container">
        {
          
          <div className="section-head mb-70 style-6 text-center">
            <h2 className="mb-20"> Trusted by our
              <span> <small> Clients </small> </span>
            </h2>
            <p className="color-666">More 10 Companies & Partners From Various Circle Trusted With Us</p>
          </div>
        }
        <div className="content">
          <div className="row">
            {
              Numbers.map((number, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="number-card style-6">
                    <h2 className="me-4">
                      <CountTo className="counter" from={0} to={number.value} speed={1500} position={position} /> { number.operator && " +" }
                    </h2>
                    <div className="text">
                      { number.title.part1 } <br /> { number.title.part2 }
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

export default Numbers