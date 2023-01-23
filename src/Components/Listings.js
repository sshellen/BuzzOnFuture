import React from "react";

const Listings = ({ select, highlight, unHighlight, openBox }) => {
  return (
    <div>
      <div className="infoButton">
        <img
          src="/svg/infoButton.svg"
          alt="Info on data sources and SVGs"
          onClick={openBox}
        />
      </div>
      <div id="listings">
        <div className="left">
          <div className="listing">
            <h2 className="top socialTech">SOCIAL TECHNOLOGY</h2>
            <ul role="menu">
              <li className="description">
                <span className="left">SUBJECT</span>
                <span className="right">GOOGLE RESULTS</span>
              </li>
              <li
                id="IOTLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "IOTLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Internet of Things</span>
                <span className="right">309,000,000</span>
              </li>
              <li
                id="BlockChainLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "BlockChainLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Blockchain</span>
                <span className="right">188,000,000</span>
              </li>
              <li
                id="SmartCitiesLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "SmartCitiesLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Smart Cities</span>
                <span className="right">14,500,000</span>
              </li>
              <li
                id="SharingEconomyLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "SharingEconomyLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Sharing Economy</span>
                <span className="right">5,530,000</span>
              </li>
              <li
                id="MegaCitiesLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "MegaCitiesLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Megacities</span>
                <span className="right">2,130,000</span>
              </li>
              <li
                id="AutonomousVehiclesLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "AutonomousVehiclesLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Driverless Vehicles</span>
                <span className="right">510,000</span>
              </li>
              <li
                id="InfrastructureBottlenecksLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "InfrastructureBottlenecksLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Infrastructure Bottlenecks</span>
                <span className="right">112,000</span>
              </li>
            </ul>
          </div>

          <div className="listing">
            <h2 className="top AI">AI</h2>
            <ul role="menu">
              <li className="description">
                <span className="left">SUBJECT</span>
                <span className="right">GOOGLE RESULTS</span>
              </li>
              <li
                id="MachineLearningLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "MachineLearningLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Machine Learning</span>
                <span className="right">67,000,000</span>
              </li>
              <li
                id="RoboticsLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "RoboticsLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Robotics</span>
                <span className="right">953,000</span>
              </li>
              <li
                id="MachineReadingLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "MachineReadingLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Machine Reading and Comprehension</span>
                <span className="right">175,000</span>
              </li>
            </ul>
          </div>

          <div className="listing">
            <h2 className="top climate">CLIMATE</h2>
            <ul role="menu">
              <li className="description">
                <span className="left">SUBJECT</span>
                <span className="right">GOOGLE RESULTS</span>
              </li>
              <li
                id="SustainableEnergyLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "SustainableEnergyLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Smart and Sustainable Energy</span>
                <span className="right">5,460,000</span>
              </li>
              <li
                id="ClimateEngineeringLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "ClimateEngineeringLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Climate Engineering</span>
                <span className="right">459,000</span>
              </li>
              <li
                id="ClimateLegislationLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "ClimateLegislationLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Climate Legislation</span>
                <span className="right">143,000</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="listing">
            <h2 className="top populations">POPULATIONS</h2>
            <ul role="menu">
              <li className="description">
                <span className="left">SUBJECT</span>
                <span className="right">GOOGLE RESULTS</span>
              </li>
              <li
                id="WomenStatusLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "WomenStatusLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Socio-Economic Status of Women</span>
                <span className="right">7,340,000</span>
              </li>
              <li
                id="AgingPopulationLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "AgingPopulationLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Aging Population</span>
                <span className="right">4.650,000</span>
              </li>

              <li
                id="PopulationDeclineWestLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "PopulationDeclineWestLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Population Decline in West</span>
                <span className="right">1,400,000</span>
              </li>
              <li
                id="PopulationGrowthEastLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "PopulationGrowthEastLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Population Growth in East</span>
                <span className="right">1,400,000</span>
              </li>
              <li
                id="GlobalMigrationLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "GlobalMigrationLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Global Migration</span>
                <span className="right">838,000</span>
              </li>
            </ul>
          </div>

          <div className="listing">
            <h2 className="top governance">GOVERNANCE</h2>
            <ul role="menu">
              <li className="description">
                <span className="left">SUBJECT</span>
                <span className="right">GOOGLE RESULTS</span>
              </li>
              <li
                id="TripleBottomLineLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "TripleBottomLineLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Triple Bottom Line</span>
                <span className="right">1,420,000</span>
              </li>

              <li
                id="DataTransparencyLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "DataTransparencyLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Data Transparency</span>
                <span className="right">381,000</span>
              </li>
              <li
                id="CollaborativeGovernanceLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "CollaborativeGovernanceLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Collaborative Governance</span>
                <span className="right">263,000</span>
              </li>
              <li
                id="GovDotComLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "GovDotComLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Government Dot Com</span>
                <span className="right">149,000</span>
              </li>
            </ul>
          </div>

          <div className="listing">
            <h2 className="top economy">ECONOMY</h2>
            <ul role="menu">
              <li className="description">
                <span className="left">SUBJECT</span>
                <span className="right">GOOGLE RESULTS</span>
              </li>
              <li
                id="DigitalBankingLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "DigitalBankingLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Digital Banking</span>
                <span className="right">1,220,000</span>
              </li>
              <li
                id="IncomeInequalityLink"
                onMouseOver={highlight}
                onClick={(e) => {
                  select(e, "IncomeInequalityLink");
                }}
                onMouseOut={unHighlight}
              >
                <span className="left">Income Inequalization</span>
                <span className="right">799,000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
