import React from "react";
import driverlessVehicles from "/img/DriverlessVehicles.png";
const AutonomousVehicles = ({ select }) => {
  return (
    <div className="subject socialTech">
      <div className="top">
        <div className="image">
          <img src={driverlessVehicles} alt="Driverless vehicles" />
        </div>
        <div className="heading">
          <h1>SOCIAL TECHNOLOGY</h1>
          <h2>DRIVERLESS VEHICLES</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>Driverless cars tested on roads in the UK, the US and China.</p>
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
              <h4>2025 - Small scale services introduced</h4>
              <p>Initial prototypes and small scale services introduced.</p>
            </div>
            <div className="col2">
              <h4>2030 - Driverless vehicles are able to recognize objects</h4>
              <p>
                Driverless vehicles successfully emerge, using a combination of
                deep machine learning and computer vision for object
                recognition. (See{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    select(e, "MachineLearningLink");
                  }}
                >
                  Machine Learning
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    select(e, "RoboticsLink");
                  }}
                >
                  Robotics
                </a>
                )
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
              <h4>2050 - Parking real estate freed up</h4>
              <p>
                Driverless vehicles are ubiquitous. As a result, high-value real
                estate currently used for parking, can be used for other
                purposes.
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

export default AutonomousVehicles;
