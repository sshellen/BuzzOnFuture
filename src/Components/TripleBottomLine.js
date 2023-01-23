import React from "react";

const TripleBottomLine = ({ select }) => {
  return (
    <div className="subject governance">
      <div className="top">
        <div className="image">
          <img src="./img/TripleBottomLine.png" alt="Triple bottom line" />
        </div>
        <div className="heading">
          <h1>GOVERNANCE</h1>
          <h2>TRIPLE BOTTOM LINE</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Environmental, social and governance(ESG) accounting is
              commonplace. Divestment of fossil fuel assets is encouraged.
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
              <h4>2025 - Triple bottom line businesses are encouraged</h4>
              <p>
                Government encourages 'triple-bottom line' businesses. The focus
                is on social and environmental goals in addition to financial
                ones. Multi-trillion-dollar capital markets emerge for social
                outcomes.{" "}
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
              <h4>2030 -Triple sector state</h4>
              <p>
                Triple sector state - government, business and citizens
                collaborate to shape the state.{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    select(e, "CollaborativeGovernanceLink");
                  }}
                >
                  (See Collaborative Governance)
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bottomRow">
          <div className="leftCols">
            <div className="col1">
              <h4>2040 - Triple sector democracy</h4>
              <p>
                Triple sector democracy - citizens work at solving problems
                through social, mobile and cloud tech(e.g. micro-tasking and
                peer-to-peer models).
              </p>
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

export default TripleBottomLine;
