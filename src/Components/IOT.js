import React from "react";

const IOT = ({ select }) => {
  return (
    <div className="subject socialTech">
      <div className="top">
        <div className="image">
          <img src="./img/IOT.png" alt="Internet of things" />
        </div>
        <div className="heading">
          <h1>SOCIAL TECHNOLOGY</h1>
          <h2>INTERNET OF THINGS</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Smart objects have been increasingly and effectively used in
              industry and consumer settings.
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
              <h4>2030 - Governments use IoT to improve infrastructure</h4>
              <p>
                Governments attempt to integrate IoT tech, using data to improve
                healthcare, transport, security, defense and infrastructure.{" "}
                (See{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    select(e, "TripleBottomLineLink");
                  }}
                >
                  Triple Bottom Line
                </a>{" "}
                or{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    select(e, "GovDotComLink");
                  }}
                >
                  Government Dot Com
                </a>
                )
              </p>
            </div>
          </div>
        </div>

        <div className="bottomRow">
          <div className="leftCols">
            <div className="col1">
              <h4>2040 - IoT used to mitigate traffic accidents</h4>
              <p>
                Connecting objects with infrastructure (e.g. cars and roads)
                drastically reduce traffic accidents and deaths. It also helps
                empower rapid disaster response for natural disasters.
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

export default IOT;
