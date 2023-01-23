import React from "react";

const CollaborativeGovernance = () => {
  return (
    <div className="subject governance">
      <div className="top">
        <div className="image">
          <img
            src="./img/CollaborativeGovernance.png"
            alt="Collaborative governance"
          />
        </div>
        <div className="heading">
          <h1>GOVERNANCE</h1>
          <h2>COLLABORATIVE GOVERNANCE</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Government works with NGOs, corporations, social enterprises,
              citizens and non-state problem solvers.
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
              <h4>2025 - Return of "parastatals"</h4>
              <p>
                Reduced, optimized civil service attracts top talent. Return of
                'parastatals', linking political will and private resources.
              </p>
            </div>
            <div className="col2">
              <h4>2030 - Crowd source policies</h4>
              <p>
                Physical and online innovation spaces - government works with
                citizens and companies to come up with new ideas and
                crowd-source policies.
              </p>
            </div>
          </div>
        </div>

        <div className="bottomRow">
          <div className="leftCols">
            <div className="col1">
              <h4>2040 - "Patient Capitalism"</h4>
              <p>
                Patient Capitalism: Long-term investment in major infrastructure
                projects bring government and businesses together.
              </p>
            </div>
          </div>

          <div className="rightCols">
            <div className="col1">
              <h4>2050 - "Demarchy"</h4>
              <p>
                {" "}
                Demarchy: rulers are randomly chosen from a pool of selected
                decision-makers. Term coined by philosopher John Burnheim
              </p>
            </div>
            <div className="col2">
              <h4>Beyond - Cities are more empowered </h4>
              <p>
                Government allows cities a more active and empowered role,
                including more funding and more authority.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborativeGovernance;
