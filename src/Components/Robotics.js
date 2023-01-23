import React from "react";

const Robotics = ({ select }) => {
  return (
    <div className="subject AI">
      <div className="top">
        <div className="image">
          <img src="./img/Robotics.png" alt="Robotics" />
        </div>
        <div className="heading">
          <h1>AI</h1>
          <h2>ROBOTICS</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Hundreds of thousands of robots and collaborative "co-bots"
              already in operation in retail and manufacturing.
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
              <h4>2030 - Robot friends </h4>
              <p>
                Robots which can read emotions and converse will become our
                friends.
              </p>
            </div>
          </div>
        </div>

        <div className="bottomRow">
          <div className="leftCols">
            <div className="col1">
              <h4>2040 - Robots help elders</h4>
              <p>
                Home robots help elders with everyday tasks, predict when they
                need to use the toilet, detect falls and more.
              </p>
            </div>
          </div>

          <div className="rightCols">
            <div className="col1">
              <h4>2050 - Robots replace over 800 million workers</h4>
              <p>
                800+ million global workers are replaced by robots.{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    select(e, "AutonomousVehiclesLink");
                  }}
                >
                  (See Driverless Vehicles)
                </a>
              </p>
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

export default Robotics;
