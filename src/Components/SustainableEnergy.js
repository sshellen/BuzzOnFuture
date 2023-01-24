import React from "react";
import image from "/img/SustainableEnergy.png";
const SustainableEnergy = ({ select }) => {
  return (
    <div className="subject climate">
      <div className="top">
        <div className="image">
          <img src={image} alt="Sustainable energy" />
        </div>
        <div className="heading">
          <h1>CLIMATE</h1>
          <h2>SUSTAINABLE ENERGY</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              The drive to pioneer efficient and affordable energy solutions
              drives innovation in the energy, technology and industry sectors.
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
              <h4>2030 - High performance recycling technology</h4>
              <p>
                Passive climate control systems, innovative water/sewage
                treatment flows, green building materials and high-performance
                recycling technology
              </p>
            </div>
          </div>
        </div>

        <div className="bottomRow">
          <div className="leftCols">
            <div className="col1">
              <h4>2040 - Shared participation in renewable energy</h4>
              <p>
                The sharing economy meets renewables, propelling the growth of
                community solar, crowd-funding, and other forms of shared
                participation in renewable energy deployment.{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    select(e, "SharingEconomyLink");
                  }}
                >
                  (See Sharing Economy)
                </a>
              </p>
            </div>
          </div>

          <div className="rightCols">
            <div className="col1">
              <h4>2050 - Smart and micro grids</h4>
              <p>
                A full-scale “grid independence” could be underway with
                smart-grids and micro-grids able to store and modulate the
                viable energy output from renewables.{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    select(e, "SmartCitiesLink");
                  }}
                >
                  (See Smart Cities)
                </a>
              </p>
            </div>
            <div className="col2">
              <h4>Beyond - Global electrification of power systems</h4>
              <p>Global electrification of power systems progressing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainableEnergy;
