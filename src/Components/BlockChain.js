import React from "react";

const BlockChain = ({ select }) => {
  return (
    <div className="subject socialTech">
      <div className="top">
        <div className="image">
          <img src="./img/BlockChain.png" alt="Block chain" />
        </div>
        <div className="heading">
          <h1>SOCIAL TECHNOLOGY</h1>
          <h2>BLOCK CHAIN</h2>
          <div className="present">
            <h3>PRESENT</h3>
            <h4>2023</h4>
            <p>
              Despite substantial shocks and reputational collapse, blockchain
              tech stands as a developing and credible addition to finanicial
              and trading services.{" "}
              <a
                href="#"
                onClick={(e) => {
                  select(e, "DigitalBankingLink");
                }}
              >
                (See Digital Banking)
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
              <h4 className="faint">2025</h4>
            </div>
            <div className="col2">
              <h4>2030 - Blockchain is used against cybercrime</h4>
              <p>
                Blockchain acts a bulwark against cybercrime. Decentralized,
                distributed systems create more robust defenses against data
                breaches.
              </p>
            </div>
          </div>
        </div>

        <div className="bottomRow">
          <div className="leftCols">
            <div className="col1">
              <h4>
                2040 - Healthcare industry uses blockchain to secure records
              </h4>
              <p>
                Hospitals and other healthcare organizations create centralized
                and secure blockchain databases. Medical records are shared only
                with patients and authorized custodians.
              </p>
            </div>
          </div>

          <div className="rightCols">
            <div className="col1">
              <h4>2050 - Blockchain used to assure voting legitimacy</h4>
              <p>
                Enhanced blockchain increases security, efficiency and
                transparency in government. Welfare and unemployment benefits
                more easily verified and distributed. Electoral votes could be
                counted and verified for legitimacy.
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

export default BlockChain;
