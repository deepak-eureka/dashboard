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

export default class Course extends Component {
  constructor() {
    super();

    this.state = {
      dropdownOpen: false,
      dislayIcons: false,
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  display = () => {
    console.log(this.state.dislayIcons);
    this.setState({
      displayIcons: !this.state.displayIcons,
    });
  };

  render() {
    return (
      <div className="course">
        <h1 className="headings">Information Technology 2020-21</h1>
        <Container className="cont">
          <Row>
            <Col>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle className="dropdown-toogle" caret>
                  1. Introduction to IT: Hello Future!
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu">
                  <Row xs={3}>
                    <Col>
                      <DropdownItem>
                        <div style={{ width: 80, height: 80 }}>
                          <CircularProgressbar
                            value={80}
                            text={"Introduction to IT"}
                            styles={{
                              text: {
                                fill: "#111111",
                                fontSize: "10px",
                                fontWeight: 700,
                              },
                            }}
                            strokeWidth={3}
                          />
                        </div>
                      </DropdownItem>
                    </Col>
                    <Col>
                      <DropdownItem>
                        <div style={{ width: 80, height: 80 }}>
                          <CircularProgressbar
                            value={80}
                            text={"What is IT?"}
                            styles={{
                              text: {
                                fill: "#111111",
                                fontSize: "10px",
                                fontWeight: 700,
                              },
                            }}
                            strokeWidth={3}
                          />
                        </div>
                      </DropdownItem>
                    </Col>
                    <Col>
                      <DropdownItem>
                        <div style={{ width: 80, height: 80 }}>
                          <CircularProgressbar
                            value={80}
                            text={"Applicaiton to IT"}
                            strokeWidth={3}
                            styles={{
                              text: {
                                fill: "#111111",
                                fontSize: "10px",
                                fontWeight: 700,
                              },
                            }}
                          />
                        </div>
                      </DropdownItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <DropdownItem>
                        <div style={{ width: 80, height: 80 }}>
                          <CircularProgressbar
                            value={80}
                            text={"History to IT"}
                            styles={{
                              text: {
                                fill: "#111111",
                                fontSize: "10px",
                                fontWeight: 700,
                              },
                            }}
                            strokeWidth={3}
                          />
                        </div>
                      </DropdownItem>
                    </Col>
                    <Col>
                      <DropdownItem>
                        <div style={{ width: 80, height: 80 }}>
                          <CircularProgressbar
                            value={80}
                            text={"Advantage of IT"}
                            styles={{
                              text: {
                                fill: "#111111",
                                fontSize: "10px",
                                fontWeight: 700,
                              },
                            }}
                            strokeWidth={3}
                          />
                        </div>
                      </DropdownItem>
                    </Col>
                    <Col>
                      <DropdownItem>
                        <div style={{ width: 80, height: 80 }}>
                          <CircularProgressbar
                            value={80}
                            text={"Ethics of IT"}
                            strokeWidth={3}
                            styles={{
                              text: {
                                fill: "#111111",
                                fontSize: "10px",
                                fontWeight: 700,
                              },
                            }}
                          />
                        </div>
                      </DropdownItem>
                    </Col>
                  </Row>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
        <Container className="cont2">
          <Row>
            <Col>
              <Dropdown>
                <DropdownToggle className="dropdown-toogle" caret>
                  2. Dive into IoT
                </DropdownToggle>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col>
              <Dropdown>
                <DropdownToggle className="dropdown-toogle" caret>
                  3. Fidgeting with programming: Python
                </DropdownToggle>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col>
              <Dropdown>
                <DropdownToggle className="dropdown-toogle" caret>
                  4. Basics of Scratch
                </DropdownToggle>
              </Dropdown>
            </Col>
          </Row>
        </Container>
        <img src={require("../assets/courseBG.png")} alt=""></img>
      </div>
    );
  }
}
