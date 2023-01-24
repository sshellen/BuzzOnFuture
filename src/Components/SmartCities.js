import React from "react";
import image from "/img/BlockChain.png";
const SmartCities = ({ select }) => {
  return (
    <div className="subject socialTech">
      <div className="top">
        <div className="image">
          <img src={image} alt="Block chain" />
        </div>
        <div className="heading">
          <h1>SOCIAL TECHNOLOGY</h1>
          <h2>SMART CITIES</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4 className="faint">2023</h4>
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
              <h4>2025 - Apps deployed in at least 50 cities</h4>
              <p>
                Smart city applications deployed in at least 50 cities globally.
                Key sectors include security, utilities, healthcare, economic
                development, housing and community.{" "}
              </p>
            </div>
            <div className="col2">
              <h4>2030 - Tech companies build smart cities</h4>
              <p>
                Major tech companies build experimental smart cities, which
                include things like heated roads, modular housing, clean energy,
                autonomous vehicles and high-speed networks.
              </p>
            </div>
          </div>
        </div>

        <div className="bottomRow">
          <div className="leftCols">
            <div className="col1">
              <h4>2040 - Speaking streets</h4>
              <p>
                The streets will speak, literally, offering information and
                services.{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    select(e, "MachineReadingLink");
                  }}
                >
                  (See Machine Reading)
                </a>
              </p>
            </div>
          </div>

          <div className="rightCols">
            <div className="col1">
              <h4>2050 - Cost of living lowered</h4>
              <p>
                Cost of living is lowered, crime reduced 30-40%, first
                responders arrive 2-17 minutes faster, commute times cut 15-20%,
                impact of air pollution reduced 8-15%, emissions lowered 10-15%,
                solid waste and water use are cut. The public reports problems
                and weigh in on planning.
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

export default SmartCities;
