import React from "react";

const InfrastructureBottlenecks = ({ select }) => {
  return (
    <div className="subject socialTech">
      <div className="top">
        <div className="image">
          <img
            src="./img/InfrastructureBottlenecks.png"
            alt="Infrastructure bottlenecks"
          />
        </div>
        <div className="heading">
          <h1>SOCIAL TECHNOLOGY</h1>
          <h2>INFRASTRUCTURE BOTTLENECKS</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Many governments need to modernize existing infrastructure, but
              struggle with cost and vision.{" "}
              <a
                href="#"
                onClick={(e) => {
                  select(e, "GovDotComLink");
                }}
              >
                (See Government Dot Com)
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
              <h4 className="faint">2025 </h4>
            </div>
            <div className="col2">
              <h4>2030 - Flexible working arrangements</h4>
              <p>
                Government investment in connectivity tech encourages flexible
                working arrangements (e.g. telecommuting). This helps to reduce
                pressure on congested cities and overloaded transport systems.
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
              <h4 className="faint">Beyond</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureBottlenecks;
