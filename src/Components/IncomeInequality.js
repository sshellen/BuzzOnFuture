import React from "react";
import image from "/img/IncomeInequality.png";
const IncomeInequality = ({ select }) => {
  return (
    <div className="subject economy">
      <div className="top">
        <div className="image">
          <img src={image} alt="Income inequalization" />
        </div>
        <div className="heading">
          <h1>ECONOMY</h1>
          <h2>INCOME INEQUALIZATION</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Global income inequality rising. Governments prioritize access to
              healthcare and education for the poorest segments.
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
              <h4>2025 - Payment-for-results models</h4>
              <p>
                Performance-related salaries. Payment-for-results models become
                mainstream. Financial risk is shifted from government to
                investors.
              </p>
            </div>
            <div className="col2">
              <h4>2030 - Universal basic income</h4>
              <p>
                As robotics and automation replace jobs, nations experiment with
                giving their citizens flat-rate salaries, instead of benefits.{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    select(e, "RoboticsLink");
                  }}
                >
                  (See Robotics)
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bottomRow">
          <div className="leftCols">
            <div className="col1">
              <h4>2040 - Expanding middle class</h4>
              <p>
                60% of the global population are middle class, up from 27% in
                2009. Knowledge workers dominate the market, but who performs
                all the manual labor?
              </p>
            </div>
          </div>

          <div className="rightCols">
            <div className="col1">
              <h4 className="faint">2050</h4>
            </div>
            <div className="col2">
              <h4 className="faint">Beyond</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeInequality;
