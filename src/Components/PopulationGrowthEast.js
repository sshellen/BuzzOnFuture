import React from "react";
import image from "/img/PopulationGrowthEast.png";
const PopulationGrowthEast = () => {
  return (
    <div className="subject populations">
      <div className="top">
        <div className="image">
          <img src={image} alt="Population growth in the east" />
        </div>
        <div className="heading">
          <h1>POPULATIONS</h1>
          <h2>POPULATION GROWTH IN EAST</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Nations with young populations, e.g. India, see economic growth
              stem from large working-age segment.
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
              <h4>2030 - 35% of world population is in the east</h4>
              <p>
                By 2030 China and India will account for 35% of world
                population.
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

export default PopulationGrowthEast;
