import React from "react";

const AgingPopulation = ({ select }) => {
  return (
    <div className="subject populations">
      <div className="top">
        <div className="image">
          <img src="./img/AgingPopulation.png" alt="Aging population" />
        </div>
        <div className="heading">
          <h1>POPULATIONS</h1>
          <h2>AGING POPULATION</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Policies have to take into account an increasingly large dependent
              segment. Pension reforms strive to reduce intergenerational
              inequality, (e.g. raising the age of retirement).
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
              <h4>2025 - Freelance economy</h4>
              <p>
                Aging workforces and lack of skilled technical talent drives
                freelance economy. Governments work with companies and
                organizations to address skills gap.{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    select(e, "GlobalMigrationLink");
                  }}
                >
                  (See Global Migration)
                </a>
              </p>
            </div>
            <div className="col2">
              <h4>2030 - Pension spending increases</h4>
              <p>
                Population aging pushes healthcare & pension spending up 4.4% of
                GDP by 2030. 13% of the world population is 65+ (versus 8%
                today).
              </p>
            </div>
          </div>
        </div>

        <div className="bottomRow">
          <div className="leftCols">
            <div className="col1">
              <h4>2040 - Longer lifespans pose challenges</h4>
              <p>
                Longer lifespans, higher IQ, restoration of hearing and vision
                pose regulatory and ethical challenges. Older employed saturate
                the jobs market.
              </p>
            </div>
          </div>

          <div className="rightCols">
            <div className="col1">
              <h4>2050 - Aged population</h4>
              <p>Aged Population. Majority of the adult population now.</p>
            </div>
            <div className="col2">
              <h4>Beyond - Gerontocracy</h4>
              <p>
                Gerontocracy: The aging population wields all the power, while
                the young live as outsiders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgingPopulation;
