import React from "react";
import image from "/img/SharingEconomy.png";
const SharingEconomy = ({ select }) => {
  return (
    <div className="subject socialTech">
      <div className="top">
        <div className="image">
          <img src={image} alt="Sharing economy" />
        </div>
        <div className="heading">
          <h1>SOCIAL TECHNOLOGY</h1>
          <h2>SHARING ECONOMY</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Rideshares, food sharing and skills sharing change the way cities
              operate and reduce pressure on government services and
              infrastructure.{" "}
              <a
                href="#"
                onClick={(e) => {
                  select(e, "SustainableEnergyLink");
                }}
              >
                (See Sustainable Energy)
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
              <h4>2050 - Reputation economy</h4>
              <p>
                Reputation Economy. Ebay style ratings of workers and employers.{" "}
              </p>
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

export default SharingEconomy;
