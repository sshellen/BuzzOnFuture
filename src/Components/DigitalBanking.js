import React from "react";
import image from "/img/DigitalBanking.png";
const DigitalBanking = ({ select }) => {
  return (
    <div className="subject economy">
      <div className="top">
        <div className="image">
          <img src={image} alt="Digital Banking" />
        </div>
        <div className="heading">
          <h1>ECONOMY</h1>
          <h2>DIGITAL BANKING</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Lightweight financial and banking services offered, without the
              need to maintain heavy banking infrastructure nor comply with
              complex regulations. Traditional banking under threat.
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
              <h4>2030 - Digital currencies are fully mainstream</h4>
              <p>
                Digital currencies are fully mainstream. Digital theft
                protection is a primary concern for governments.{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    select(e, "BlockChainLink");
                  }}
                >
                  (See Blockchain)
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

export default DigitalBanking;
