import React from "react";
import image from "/img/WomenStatus.png";
const WomenStatus = ({ select }) => {
  return (
    <div className="subject populations">
      <div className="top">
        <div className="image">
          <img src={image} alt="Socio-economic status of women" />
        </div>
        <div className="heading">
          <h1>POPULATIONS</h1>
          <h2>SOCIO-ECONOMIC STATUS OF WOMEN</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Women expand the global workforce, influencing political and
              economic policy worldwide.{" "}
              <a
                href="#"
                onClick={(e) => {
                  select(e, "GlobalMigrationLink");
                }}
              >
                (See Global Migration)
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
              <h4 className="faint">2030 </h4>
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

export default WomenStatus;
