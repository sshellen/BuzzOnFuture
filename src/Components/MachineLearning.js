import React from "react";
import image from "/img/MachineLearning.png";
const MachineLearning = ({ select }) => {
  return (
    <div className="subject AI">
      <div className="top">
        <div className="image">
          <img src={image} alt="Machine Learning" />
        </div>
        <div className="heading">
          <h1>AI</h1>
          <h2>Machine Learning</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Machine learning is being used to gain competitive insights into
              financial services, healthcare, oil & gas, marketing & sales, and
              transport.
            </p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="bottomRow rowHeading">
          <div className="leftCols">
            <div className="col1"></div>
          </div>

          <div className="rightCols">
            <div className="col1">
              <h3>FUTURE</h3>
            </div>
            <div className="col2"></div>
          </div>
        </div>

        <div className="bottomRow">
          <div className="leftCols">
            <div className="col1"></div>
          </div>

          <div className="rightCols">
            <div className="col1">
              <h4 className="faint">2025</h4>
            </div>
            <div className="col2">
              <h4>2030 - Machines used to perform admin tasks</h4>
              <p>
                Intelligent, learning machines mimick human thought process.
                This is used to automate administrative tasks and assist in
                problem solving.{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    select(e, "IncomeInequalityLink");
                  }}
                >
                  (See Income Inequalization)
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bottomRow">
          <div className="leftCols">
            <div className="col1">
              <h4>2040 - Guided surgeries are the norm</h4>
              <p>
                Security cameras conduct marketing research on passing
                consumers, healthcare scanners help technicians, guided
                surgeries are the norm and Farm equipment is increasingly
                autonomous.
              </p>
            </div>
          </div>

          <div className="rightCols">
            <div className="col1">
              <h4>2050 - Highly individualized medical treatments</h4>
              <p>
                Machine learning + geonomics result in highly individualized
                medical treatments.
              </p>
            </div>
            <div className="col2">
              <h4 className="faint">Beyond </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;
