import React from "react";
import image from "/img/ClimateEngineering.png";
const ClimateEngineering = ({ select }) => {
  return (
    <div className="subject climate">
      <div className="top">
        <div className="image">
          <img src={image} alt="Climate engineering" />
        </div>
        <div className="heading">
          <h1>CLIMATE</h1>
          <h2>CLIMATE ENGINEERING</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Proposals for engineering carbon drawdown systems are scoped and
              budgeted.{" "}
              <a
                href="#"
                onClick={(e) => {
                  select(e, "TripleBottomLineLink");
                }}
              >
                (See Triple Bottom Line)
              </a>
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
              <h4>2030 - Atmospheric sequestration</h4>
              <p>
                First prototypes for atmospheric sequestration of carbon dioxide
                are in operation.
              </p>
            </div>
          </div>
        </div>

        <div className="bottomRow">
          <div className="leftCols">
            <div className="col1">
              <h4 className="faint">2040</h4>
            </div>
          </div>

          <div className="rightCols">
            <div className="col1">
              <h4 className="faint">2050</h4>
            </div>
            <div className="col2">
              <h4>
                Beyond - Massive and costly projects required to drawdown
                surplus CO2{" "}
              </h4>
              <p>
                Massive and costly bio-engineering projects will be implemented
                on a global scale. Projects include carbon capture, land
                weathering and ocean fertilization, costing trillions of
                dollars. This will be required to drawdown gigatons of surplus
                carbon dioxide from the atmosphere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateEngineering;
