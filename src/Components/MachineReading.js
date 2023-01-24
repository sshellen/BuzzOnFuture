import React from "react";
import image from "/img/MachineReading.png";
const MachineReading = ({ select }) => {
  return (
    <div className="subject AI">
      <div className="top">
        <div className="image">
          <img src={image} alt="Machine Reading" />
        </div>
        <div className="heading">
          <h1>AI</h1>
          <h2>Machine Reading</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              AI's trained on trillions of English documents can generate text
              in any style of any text, answer questions and analyze content.
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
              <h4>2030 - Automated customer service</h4>
              <p>
                Automated multi-lingual chat AI's provide automated customer and
                information services worldwide.{" "}
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
              <h4 className="faint">2040</h4>
            </div>
          </div>

          <div className="rightCols">
            <div className="col1">
              <h4 className="faint">2050 </h4>
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

export default MachineReading;
