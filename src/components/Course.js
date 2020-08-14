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
            },
            {
              Title: "This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 0,
            },
            {
              Title: "This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 40,
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
            },
            {
              Title: "This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 80,
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
            },
          ],
        },
      ],
    };
  }

  tog = (ele) => {
    for (let i = 0; i < this.state.courses.length; i++) {
      console.log(this.state.courses[i]);
      if (ele === this.state.courses[i]) {
        ele.toggle = !ele.toggle;
        this.setState({
          courses: [...this.state.courses],
        });
        break;
      }
    }
  };

  render() {
    return (
      <div className="course">
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
                          <DropdownItem>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressbar
                                value={sub.progressVal}
                                text={sub.Title}
                                styles={{
                                  text: {
                                    fill: "#111111",
                                    fontSize: "10px",
                                    fontWeight: 700,
                                  },
                                }}
                                strokeWidth={4}
                              />
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
        <img src={require("../assets/courseBG.png")} alt=""></img>
      </div>
    );
  }
}
