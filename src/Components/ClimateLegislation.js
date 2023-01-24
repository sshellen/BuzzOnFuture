import React from "react";
import image from "/img/ClimateLegislation.png";
const ClimateLegislation = ({ select }) => {
  return (
    <div className="subject climate">
      <div className="top">
        <div className="image">
          <img src={image} alt="Climate legislation" />
        </div>
        <div className="heading">
          <h1>CLIMATE</h1>
          <h2>CLIMATE LEGISLATION</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Supranational and national bodies further legislate on emissions.
              Single use plastic bans and new ecological building standards are
              put in place.
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
              <h4>2030 - Bottom-up approach</h4>
              <p>
                Adaptive GAction. Policy on climate change switches from
                ineffective top-down system of IPCC initiatives to a bottom-up
                approach, engaging all levels of power and acting locally.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="bottomRow">
          <div className="leftCols">
            <div className="col1">
              <h4>2040 - Net zero commitments</h4>
              <p>
                The First "netzero" commitments are enacted by governments and
                corporations.{" "}
              </p>
            </div>
          </div>

          <div className="rightCols">
            <div className="col1">
              <h4>2050 - Growth within limits</h4>
              <p>
                "Growth within limits" is the inward developmental mindset
                necessary to reduce our ecological footprint.
              </p>
            </div>
            <div className="col2">
              <h4>Beyond - Businesses must be fully sustainable</h4>
              <p>
                Businesses cannot operate unless they are fully sustainable at
                their core.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateLegislation;
