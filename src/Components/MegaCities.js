import React from "react";
import image from "/img/MegaCities.png";
const MegaCities = ({ select }) => {
  return (
    <div className="subject socialTech">
      <div className="top">
        <div className="image">
          <img src={image} alt="Megacities" />
        </div>
        <div className="heading">
          <h1>SOCIAL TECHNOLOGY</h1>
          <h2>MEGACITIES</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Around 7% of people live in cities with 8-figure populations (10's
              of millions per city).
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
              <h4>2025 - Number of megacities will almost double</h4>
              <p>
                Urbanization and city growth create megacities (near-autonomous
                hubs) where initatives can be tested. Number of megacities (pop
                10m+) will increase from 20 today to 37 in 2025.{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    select(e, "PopulationGrowthEastLink");
                  }}
                >
                  (See Population Growth in the East)
                </a>
              </p>
            </div>
            <div className="col2">
              <h4>2030 - City slum populations double</h4>
              <p>
                Slums continue to grow. Providing infrastructure and amenities
                to poverty-stricken urban areas become important policy points.
                Number of people living in city slums to double by 2030 (from
                1bn to 2bn).
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
              <h4>Beyond - Floating cities</h4>
              <p>
                Seasteading: autonomous modular city states floating on oceans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaCities;
