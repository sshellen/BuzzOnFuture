import React from "react";
import image from "/img/DataTransparency.png";
const DataTransparency = ({ select }) => {
  return (
    <div className="subject governance">
      <div className="top">
        <div className="image">
          <img src={image} alt="Data transparency" />
        </div>
        <div className="heading">
          <h1>GOVERNANCE</h1>
          <h2>DATA TRANSPARENCY</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Policies and norms around privacy in age of data breaches & IoT
              becomes a regulatory and ethical issue for government.{" "}
              <a
                href="#"
                onClick={(e) => {
                  select(e, "BlockChainLink");
                }}
              >
                (See Blockchain)
              </a>
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
              <h4>2025 - Targeted transparency</h4>
              <p>
                Public demands government and corporate disclosure.
                Easily-accessible data is made available.
              </p>
            </div>
            <div className="col2">
              <h4>2030 - Radical transparency</h4>
              <p>
                Maximally increased openness in process and data access becomes
                the norm.
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
              <h4>Beyond</h4>
              <p>Radical transparency becomes the law</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTransparency;
