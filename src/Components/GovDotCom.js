import React from "react";

const GovDotCom = ({ select }) => {
  return (
    <div className="subject governance">
      <div className="top">
        <div className="image">
          <img src="./img/GovernmentDotCom.png" alt="Government dot com" />
        </div>
        <div className="heading">
          <h1>GOVERNANCE</h1>
          <h2>GOVERNMENT DOT COM</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Governments use social media and other data-driven media to engage
              citizens.
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
              <h4>2025 - Social media tracking</h4>
              <p>
                Social media provides constant stream of localized data for
                governments to analyse sentiment and track the effectiveness of
                their services.{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    select(e, "IOTLink");
                  }}
                >
                  (See Internet of Things)
                </a>
              </p>
            </div>
            <div className="col2">
              <h4>2030 - "Beta Government"</h4>
              <p>
                Beta Government: Policy makers apply the 'agile software
                development model' to policy(prototypes, pilots, trials, etc.).
              </p>
            </div>
          </div>
        </div>

        <div className="bottomRow">
          <div className="leftCols">
            <div className="col1">
              <h4>2040 - Government-built platforms</h4>
              <p>
                Governments build platforms, hold partners accountable, and
                manage crowdsourced campaigns.
              </p>
            </div>
          </div>

          <div className="rightCols">
            <div className="col1">
              <h4>2050 - One online space for all services</h4>
              <p>
                Operational shortcomings addressed using tech and citizen input.
                One online space for all services, and one physical space in
                each locale, helps streamline government.
              </p>
            </div>
            <div className="col2">
              <h4>Beyond - Alternatives to GDP</h4>
              <p>
                Alternatives to GDP take hold. Holistic yardsticks for national
                progress(e.g. sustainability, health, inclusion and personal
                freedom) replace GDP as primary measure.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovDotCom;
