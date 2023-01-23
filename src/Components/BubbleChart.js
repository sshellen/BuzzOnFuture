import React from "react";
const BubbleChart = ({ select, highlight, unHighlight }) => {
  return (
    <div className="bubbleChart">
      <svg id="BubbleChart" viewBox="0 0 673.2 1200.3">
        <g id="SocialTech">
          <g
            id="IOT"
            onClick={(e) => {
              select(e, "IOT");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle cx="322" class="cls-6" cy="880.1" r="314.9" />
          </g>
          <g
            id="SmartCities"
            onClick={(e) => {
              select(e, "SmartCities");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <ellipse
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -243.5318 565.2601)"
              cx="560.6"
              cy="576.6"
              rx="68.2"
              ry="68.2"
              class="cls-6"
            />
          </g>
          <g
            id="SharingEconomy"
            onClick={(e) => {
              select(e, "SharingEconomy");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-6" cx="604.6" cy="472.3" r="42.1" />
          </g>
          <g
            id="MegaCities"
            onClick={(e) => {
              select(e, "MegaCities");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <ellipse
              transform="matrix(0.1602 -0.9871 0.9871 0.1602 11.2457 851.6556)"
              cx="506.1"
              cy="419.2"
              rx="26.1"
              ry="26.2"
              class="cls-6"
            />
          </g>
          <g
            id="AutonomousVehicles"
            onClick={(e) => {
              select(e, "AutonomousVehicles");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-6" cx="547.9" cy="419.7" r="12.8" />
          </g>
          <g
            id="InfrastructureBottlenecks"
            onClick={(e) => {
              select(e, "InfrastructureBottlenecks");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-6" cx="402.6" cy="467.2" r="6" />
          </g>
          <g
            id="BlockChain"
            onClick={(e) => {
              select(e, "BlockChain");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-6" cx="445.9" cy="195.7" r="189" />
          </g>
        </g>
        <g>
          <g
            id="MachineLearning"
            onClick={(e) => {
              select(e, "MachineLearning");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-4" cx="201.7" cy="431.5" r="146.6" />
          </g>
          <g
            id="MachineReading"
            onClick={(e) => {
              select(e, "MachineReading");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-4" cx="618.1" cy="523" r="7.5" />
          </g>
          <g
            id="Robotics"
            onClick={(e) => {
              select(e, "Robotics");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-4" cx="615.4" cy="410.7" r="17.5" />
          </g>
        </g>
        <g id="Populations">
          <g
            id="WomenStatus"
            onClick={(e) => {
              select(e, "WomenStatus");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-7" cx="409" cy="524.2" r="48.5" />
          </g>
          <g
            id="AgingPopulation"
            onClick={(e) => {
              select(e, "AgingPopulation");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
            on
          >
            <circle class="cls-7" cx="441.9" cy="440.4" r="38.6" />
          </g>
          <g
            id="PopulationGrowthEast"
            onClick={(e) => {
              select(e, "PopulationGrowthEast");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-7" cx="481.5" cy="529" r="21.2" />
          </g>
          <g
            id="GlobalMigration"
            onClick={(e) => {
              select(e, "GlobalMigration");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-7" cx="529.5" cy="494.8" r="16.4" />
          </g>
          <g
            id="PopulationDeclineWest"
            onClick={(e) => {
              select(e, "PopulationDeclineWest");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-7" cx="540.5" cy="455.8" r="21.2" />
          </g>
        </g>
        <g id="Government">
          <g
            id="DataTransparency"
            onClick={(e) => {
              select(e, "DataTransparency");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-5" cx="466.4" cy="486.9" r="11.1" />
          </g>
          <g
            id="GovDotCom"
            onClick={(e) => {
              select(e, "GovDotCom");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-5" cx="483.9" cy="498.1" r="6.9" />
          </g>
          <g
            id="CollaborativeGovernance"
            onClick={(e) => {
              select(e, "CollaborativeGovernance");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-5" cx="502.3" cy="503.1" r="9.2" />
          </g>
          <g
            id="TripleBottomLine"
            onClick={(e) => {
              select(e, "TripleBottomLine");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-5" cx="497.3" cy="470" r="21.4" />
          </g>
        </g>
        <g id="Economy">
          <g
            id="IncomeInequality"
            onClick={(e) => {
              select(e, "IncomeInequality");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-3" cx="579.5" cy="416.7" r="16" />
          </g>
          <g
            id="DigitalBanking"
            onClick={(e) => {
              select(e, "DigitalBanking");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-3" cx="566.6" cy="380.2" r="19.8" />
          </g>
        </g>
        <g id="Climate">
          <g
            id="ClimateEngineering"
            onClick={(e) => {
              select(e, "ClimateEngineering");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-8" cx="639.8" cy="517.3" r="12.1" />
          </g>
          <g
            id="ClimateLegislation"
            onClick={(e) => {
              select(e, "ClimateLegislation");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-8" cx="592.3" cy="394.5" r="6.8" />
          </g>
          <g
            id="SustainableEnergy"
            onClick={(e) => {
              select(e, "SustainableEnergy");
            }}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
          >
            <circle class="cls-8" cx="624.8" cy="349.2" r="41.9" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default BubbleChart;
