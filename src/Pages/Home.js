import React from "react";
import "/css/styles.css";
import BubbleChart from "../Components/BubbleChart";
import ChordChart from "../Components/ChordChart";
import Listings from "../Components/Listings";
import { InfoBox } from "../Components/LightboxTemplates";
import SubjectLoader from "../Components/SubjectLoader";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import buzzTitle from "/img/BuzzTitle.png";
gsap.registerPlugin(ScrollToPlugin);
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subject: "Slug", openState: false };
  }

  clearSelections = () => {
    let circles = document
      .getElementById("BubbleChart")
      .getElementsByTagName("g");
    Array.prototype.slice.apply(circles).map((circle) => {
      circle.classList.remove("outline");
      circle.removeAttribute("style");
    });

    let listings = document
      .getElementById("listings")
      .getElementsByTagName("li");
    Array.prototype.slice.apply(listings).map((listing) => {
      listing.classList.remove("selected");
      listing.removeAttribute("style");
    });

    let chordLinks = document
      .getElementById("ChordChartSVG")
      .getElementsByTagName("a");
    Array.prototype.slice.apply(chordLinks).map((link) => {
      link.classList.remove("selectChordLink");
    });
  };

  selectBubble = (event, name) => {
    event.preventDefault();
    this.clearSelections();
    document.getElementById(name).classList.add("selected");
    let circle = name.substr(0, name.length - 4);
    document.getElementById(circle).classList.add("outline");
    let chordLinkName = circle + "ChordLink";
    let chordLink = document.getElementById(chordLinkName);
    chordLink.classList.add("selectChordLink");
    this.setState({ subject: circle }, () =>
      gsap.to(window, { duration: 0.5, scrollTo: { y: 1100 } })
    );
  };

  highLightBubble = (el) => {
    let link = el.target.id || el.target.parentNode.id;
    let circle = link.substr(0, link.length - 4);
    let circleObj = document.getElementById(circle);
    circleObj.style.stroke = "#666";
    circleObj.style.strokeWidth = "4";
  };

  unHighlightBubble = (el) => {
    let link = el.target.id || el.target.parentNode.id;
    let circle = link.substr(0, link.length - 4);
    let circleObj = document.getElementById(circle);
    if (!circleObj.classList.contains("outline")) {
      circleObj.style.stroke = "none";
      circleObj.style.strokeWidth = "0";
    }
  };

  selectSubject = (event, name) => {
    event.preventDefault();
    this.clearSelections();
    document.getElementById(name).classList.add("outline");
    let link = name + "Link";
    document.getElementById(link).classList.add("selected");
    let chordLinkName = name + "ChordLink";

    let chordLink = document.getElementById(chordLinkName);
    chordLink.classList.add("selectChordLink");
    this.setState({ subject: name }, () =>
      gsap.to(window, { duration: 0.5, scrollTo: { y: 1100 } })
    );
  };

  highlightSubject = (el) => {
    let circle = el.target.id || el.target.parentNode.id;
    let linkName = circle + "Link";
    let link = document.getElementById(linkName);

    link.style.backgroundColor = "#ccc";
    link.style.color = "#000";
  };

  unHighlightSubject = (el) => {
    let circle = el.target.id || el.target.parentNode.id;
    let linkName = circle + "Link";
    let link = document.getElementById(linkName);

    link.removeAttribute("style");
  };

  openBox = () => {
    this.setState({ openState: true });
  };

  closeHandler = () => {
    this.setState({ openState: false });
  };

  showTip = (e) => {
    let y = e.clientY + (window.pageYOffset || document.body.scrollTop) + 5;
    let x = e.clientX;
    if (!this.attached) {
      let text = document.createElement("p");
      text.id = "textNode";
      text.append(e.target.id);
      this.box.append(text);
      this.box.style.display = "block";
      this.attached = true;
    }
    this.box.style.left = x + "px";
    this.box.style.top = y + "px";
  };

  hideTip = () => {
    this.attached = false;
    this.box.removeChild(document.getElementById("textNode"));
    this.box.style.display = "none";
  };

  componentDidMount() {
    this.box = document.createElement("div");
    this.box.classList.add("tip");
    document.body.append(this.box);
    this.attached = false;
    this.arcs = document
      .getElementById("ChordChartSVG")
      .getElementsByClassName("arc");

    Array.prototype.slice.apply(this.arcs).map((arc) => {
      arc.addEventListener("mouseover", this.showTip);
      arc.addEventListener("mouseout", this.hideTip);
    });
  }

  render() {
    return (
      <div className="body">
        <div className="headingWrapper">
          <div className="heading">
            <div className="headingCols">
              <div className="left">
                <img src={buzzTitle} />
              </div>
              <div className="right">
                <p>
                  The dashboard below contains subject matters (key words) that
                  have a return of at least 100,000 results when searched on
                  Google. They have been placed under 6 different categories.
                </p>

                <p>
                  <strong>
                    Click on a subject matter or it's respective bubble
                  </strong>{" "}
                  to see its present state and its future expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="top">
          <BubbleChart
            select={this.selectSubject}
            highlight={this.highlightSubject}
            unHighlight={this.unHighlightSubject}
          />
          <Listings
            select={this.selectBubble}
            highlight={this.highLightBubble}
            unHighlight={this.unHighlightBubble}
            openBox={this.openBox}
          />
        </div>

        <div id="subjectArea">
          <SubjectLoader
            subject={this.state.subject}
            select={this.selectBubble}
          />
        </div>
        <div id="ChordChart">
          <div>
            <h2>SUBJECT RELATIONSHIPS</h2>
            <p>
              The diagram at the right shows relationships between the different
              subjects.
            </p>
            <p>
              There appears to be a lot of dependency on Governance and
              Technology (Social and AI) from other groups. Also, there appears
              to be a lot of inter-depencency among Population groups.
            </p>
            <p>
              <strong>Click on any of the subjects</strong> to find out more
              about their present state and future expectations.
            </p>
          </div>
          <ChordChart select={this.selectBubble} />
        </div>
        <div className="footer">
          <div className="footerContent">
            <div className="leftCol">
              Visualization by <strong>Steinar Shellenberger</strong>
            </div>
            <div className="rightCol">
              <a href="#" onClick={this.openBox}>
                Info on data sources and SVGs
              </a>
            </div>
          </div>
        </div>
        <InfoBox open={this.state.openState} closeHandler={this.closeHandler} />
      </div>
    );
  }
}

export default Home;
