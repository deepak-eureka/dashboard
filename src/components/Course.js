import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
} from "reactstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./course.css";
// import { Link, Route } from "react-router-dom";

export default class Course extends Component {
  constructor() {
    super();

    this.state = {
      iconsAssets: [
        require("../assets/courses/doc.png"),
        require("../assets/courses/pro.png"),
        require("../assets/courses/vid.png"),
      ],
      dislayIcons: false,
      courses: [
        {
          Title: "1. Introduction to IT",
          Descriptipn: "This is Description",
          toggle: false,
          SubCat: [
            {
              Title: "This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 80,
              showAssets: false,
            },
            {
              Title: "This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 0,
              showAssets: false,
            },
            {
              Title: "This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 40,
              showAssets: false,
            },
          ],
        },
        {
          Title: "2. Dive into IT",
          Descriptipn: "This is Description",
          toggle: false,
          SubCat: [
            {
              Title: "This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 10,
              showAssets: false,
            },
          ],
        },
        {
          Title: "3. Fidgeting with programming: Python",
          Descriptipn: "This is Description",
          toggle: false,
          SubCat: [
            {
              Title: "This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 40,
              showAssets: false,
            },
            {
              Title: "This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 80,
              showAssets: false,
            },
          ],
        },
        {
          Title: "4. Basics of Scratch",
          Descriptipn: "This is Description",
          toggle: false,
          SubCat: [
            {
              Title: "This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 40,
              showAssets: false,
            },
          ],
        },
      ],
    };
  }

  tog = (ele) => {
    for (let i = 0; i < this.state.courses.length; i++) {
      // console.log(this.state.courses[i]);
      if (ele === this.state.courses[i]) {
        ele.toggle = !ele.toggle;
        this.setState({
          courses: [...this.state.courses],
        });
        break;
      }
    }
  };

  dispIcon = (s, ind) => {
    console.log("HEllo");
    for (let i = 0; i < this.state.courses.length; i++) {
      if (s === this.state.courses[i]) {
        console.log(this.state.courses[i]);
        s.SubCat[ind].showAssets = !s.SubCat[ind].showAssets;
        s.toggle = !s.toggle;
        this.setState({
          courses: [...this.state.courses],
        });
        break;
      }
    }
  };

  // handleDispIcon = (type) => {
  //   console.log("handle displ icon");
  //   let loc = this.props.location.pathname + "/" + type;

  //   return <Route to={loc} />;
  // };

  render() {
    return (
      <div>
        <h1 className="headings">Information Technology 2020-21</h1>
        <Container>
          {this.state.courses.map((item, index) => (
            <Row key={index}>
              <Col>
                <Dropdown isOpen={item.toggle} toggle={() => this.tog(item)}>
                  <DropdownToggle className="dropdown-toogle" caret>
                    {item.Title}
                  </DropdownToggle>
                  <DropdownMenu>
                    <Row xs={3}>
                      {item.SubCat.map((sub, i) => (
                        <Col key={i}>
                          <DropdownItem onClick={() => this.dispIcon(item, i)}>
                            <div className="align-icons">
                              <div
                                className="menu-item"
                                style={{ width: 100, height: 150 }}
                              >
                                <CircularProgressbar
                                  value={sub.progressVal}
                                  text={sub.Title}
                                  styles={{
                                    text: {
                                      fill: "#111111",
                                      fontSize: "15px",
                                      fontWeight: 700,
                                    },
                                  }}
                                  strokeWidth={6}
                                />
                              </div>
                              <div>
                                {sub.showAssets ? (
                                  <div className="disp-icons">
                                    {/* <Link
                                      className="img-2"
                                      to={this.props.location.pathname + "/vid"}
                                    > */}
                                    <img
                                      className="img-2"
                                      src={require("../assets/courses/vid.png")}
                                      alt=""
                                    ></img>
                                    {/* </Link>
                                    <Link
                                      to={this.props.location.pathname + "/doc"}
                                    > */}
                                    <img
                                      src={require("../assets/courses/doc.png")}
                                      alt=""
                                    ></img>
                                    {/* </Link>
                                    <Link
                                      className="img-2"
                                      to={this.props.location.pathname + "/doc"}
                                    > */}
                                    <img
                                      className="img-2"
                                      src={require("../assets/courses/pro.png")}
                                      alt=""
                                    ></img>
                                    {/* </Link> */}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </DropdownItem>
                        </Col>
                      ))}
                    </Row>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          ))}
        </Container>
        <img
          className="course-img"
          src={require("../assets/courseBG.png")}
          alt=""
        ></img>
      </div>
    );
  }
}
