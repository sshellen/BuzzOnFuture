import React from "react";
import ReactDOM from "react-dom";
import close from "/img/close.png";
import howToRead from "/img/howToRead.png";
class RenderTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  resizeContent() {
    this.lbDiv = document.getElementById("lightbox");
    this.lbDiv.style.width = window.innerWidth + "px";
    this.lbDiv.style.height = window.innerHeight + "px";
  }
  componentDidMount() {
    document.body.classList.add("fixed");
    this.resizeContent();
    document.getElementById("lightbox").focus();
    window.addEventListener("resize", this.resizeContent);
  }

  componentWillUnmount() {
    document.body.classList.remove("fixed");
    window.removeEventListener("resize", this.resizeContent);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, document.body);
  }
}

class InfoBox extends React.Component {
  putFocus() {
    let pageStart = document.getElementById("infoBox");
    pageStart.focus();
  }
  render() {
    const { closeHandler, open } = this.props;

    if (open === true) {
      return (
        <RenderTemplate>
          <div id="lightbox" className="lightbox" tabIndex={0}>
            <div className="close">
              <a onClick={closeHandler} href="#" tabIndex={0}>
                <img src={close} alt="Click to close lightbox" />
              </a>
            </div>

            <div className="content" id="infoBox" tabIndex={0}>
              <div className="header">INFO</div>

              <div className="lightboxRow">
                <div className="leftCol">
                  <h3>How to read labels:</h3>
                </div>
                <div className="rightCol" tabIndex={0}>
                  <div className="rightColRow">
                    <div className="leftCol">
                      <img src={howToRead} />
                    </div>
                    <div className="rightCol">
                      <p>
                        Each subject matter is shown with its respective search
                        results when searching for that particular term on
                        Google.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lightboxRow">
                <div className="leftCol">
                  <h3>Data sources:</h3>
                </div>
                <div className="rightCol" tabIndex={0}>
                  <div className="rightColRow">
                    <div className="leftCol">
                      <ul>
                        <li>Deloitte</li>
                        <li>TheVerge</li>
                        <li>BBC</li>
                        <li>J. Burnheim</li>
                        <li>WEC</li>
                        <li>McKinsey</li>
                        <li>Vladimir Vernadsky</li>
                        <li>Museum of Future Government</li>
                        <li>PwC</li>
                        <li>UK Gov</li>
                        <li>KMPG</li>
                        <li>The Economist</li>
                        <li>UN</li>
                        <li>Business Insider</li>
                        <li>Financial Times</li>
                      </ul>
                    </div>
                    <div className="rightCol">
                      <ul>
                        <li>Forbes</li>
                        <li>Microsoft</li>
                        <li> Verve</li>
                        <li>Kellogg</li>
                        <li>FHI</li>
                        <li>SAS</li>
                        <li>VisionOnline</li>
                        <li>Deloitte</li>
                        <li>CNN</li>
                        <li>Guardian</li>
                        <li>St. Anthony's International Review</li>
                        <li>Arcosanti</li>
                        <li>PWC</li>
                        <li>Humanitarian Practice Network</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lightboxRow">
                <div className="leftCol">
                  <h3>SVG shout-outs:</h3>
                </div>
                <div className="rightCol" tabIndex={0}>
                  <ul>
                    <li>
                      City by Elvedin Gredelj from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/city/"
                        target="_blank"
                        title="City Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      internet of things by supalerk laipawat from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/internet-of-things/"
                        target="_blank"
                        title="internet of things Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      {" "}
                      Blockchain by ProSymbols from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/blockchain/"
                        target="_blank"
                        title="Blockchain Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      {" "}
                      Sharing economy by Bence Bezeredy from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/sharing-economy/"
                        target="_blank"
                        title="Sharing economy Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      {" "}
                      driverless by Eucalyp from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/driverless/"
                        target="_blank"
                        title="driverless Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      {" "}
                      Merging lanes by asianson.design from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/merging-lanes/"
                        target="_blank"
                        title="Merging lanes Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      {" "}
                      Machine Learning by Vectors Market from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/machine-learning/"
                        target="_blank"
                        title="Machine Learning Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      {" "}
                      Machine Learning by monkik from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/machine-learning/"
                        target="_blank"
                        title="Machine Learning Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      {" "}
                      smart energy by Fabio Rinaldi from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/smart-energy/"
                        target="_blank"
                        title="smart energy Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      {" "}
                      climate system by M. Oki Orlando from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/climate-system/"
                        target="_blank"
                        title="climate system Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      {" "}
                      climate by One Pleasure from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/climate/"
                        target="_blank"
                        title="climate Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      population by Nithinan Tatah from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/population/"
                        target="_blank"
                        title="population Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      {" "}
                      Business Woman by b farias from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/business-woman/"
                        target="_blank"
                        title="Business Woman Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      {" "}
                      aging population by Chanut is Industries from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/aging-population/"
                        target="_blank"
                        title="aging population Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      {" "}
                      Employee by Kamin Ginkaew from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/employee/"
                        target="_blank"
                        title="Employee Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      esg by Rubem Hojo from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/esg/"
                        target="_blank"
                        title="esg Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      {" "}
                      Transparency by WiStudio from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/transparency/"
                        target="_blank"
                        title="Transparency Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      {" "}
                      union by Nithinan Tatah from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/union/"
                        target="_blank"
                        title="union Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      {" "}
                      online bank by Alfredo @ IconsAlfredo.us from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/online-bank/"
                        target="_blank"
                        title="online bank Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      digital banking by Kittijaroon Panjasuparuk from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/digital-banking/"
                        target="_blank"
                        title="digital banking Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      {" "}
                      inequality by mungang kim from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/inequality/"
                        target="_blank"
                        title="inequality Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                    <li>
                      Robot by iconcheese from{" "}
                      <a
                        href="https://thenounproject.com/browse/icons/term/robot/"
                        target="_blank"
                        title="Robot Icons"
                      >
                        Noun Project
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="buttonRow">
                <button className="pinkButton" onClick={closeHandler}>
                  <span className="visuallyHidden">
                    Click to close light-box.
                  </span>
                  CLOSE
                </button>
              </div>
              <div tabIndex={0} onFocus={this.putFocus} />
            </div>
          </div>
        </RenderTemplate>
      );
    } else {
      return null;
    }
  }
}

export { InfoBox };
