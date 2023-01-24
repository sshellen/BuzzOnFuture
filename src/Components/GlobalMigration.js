import React from "react";
import image from "/img/GlobalMigration.png";
const GlobalMigration = ({ select }) => {
  return (
    <div className="subject populations">
      <div className="top">
        <div className="image">
          <img src={image} alt="Global migration" />
        </div>
        <div className="heading">
          <h1>POPULATIONS</h1>
          <h2>GLOBAL MIGRATION</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Global nomadic citizens, using sharing economy, locate themselves
              anywhere in the world. (See{" "}
              <a
                href="#"
                onClick={(e) => {
                  select(e, "AgingPopulationLink");
                }}
              >
                Aging Population
              </a>{" "}
              and{" "}
              <a
                href="#"
                onClick={(e) => {
                  select(e, "WomenStatusLink");
                }}
              >
                Socio-Economic Status of Women
              </a>
              )
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
              <h4>2025 - Increase of refugees</h4>
              <p>
                Immigration policies are somewhat relaxed as a result of
                globalization, improved education and shortage of local talent.
                Refugees further increase as resources grow scarce in parts of
                the world.
              </p>
            </div>
            <div className="col2">
              <h4 className="faint">2030</h4>
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
              <h4>2050 - Major city populations to increase by 20.6%</h4>
              <p>
                Major cities will increase in population by 20.6% as
                urbanization continues. Non-city populations will increase by
                12.3% with general population growth.
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

export default GlobalMigration;
