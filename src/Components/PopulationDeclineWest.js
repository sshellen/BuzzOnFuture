import React from "react";

const PopulationDeclineWest = ({ select }) => {
  return (
    <div className="subject populations">
      <div className="top">
        <div className="image">
          <img
            src="./img/AgingPopulation.png"
            alt="Population decline in the west"
          />
        </div>
        <div className="heading">
          <h1>POPULATIONS</h1>
          <h2>POPULATION DECLINE IN WEST</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
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
              <h4>2030 - Decline of working age population</h4>
              <p>
                Decline of the working age population impacts economic policy.{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    select(e, "AgingPopulationLink");
                  }}
                >
                  (See Aging Population)
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

export default PopulationDeclineWest;
