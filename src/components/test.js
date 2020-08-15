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
              showAssets:true
            },
            {
              Title: "This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 0,
              showAssets:false
            },
            {
              Title: "This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 40,
              showAssets:false
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
              showAssets:false
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
              showAssets:false
            },
            {
              Title: "This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 80,
              showAssets:false
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
              showAssets:false
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
      <div >
        
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
                          <DropdownItem onClick={<h5>This Bar is Clicked</h5>}>
                            <div className="menu-item" style={{ width: 100, height: 150 }}>
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
                              {sub.showAssets?<div>
                                  <div>
                                   {/* 3 ICONS SHOULD BE GOING HERE*/
                                   //place them here and Style Them
                                   }
                                   </div>   
                              </div>:""}
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
        <img className="course-img" src={require("../assets/courseBG.png")} alt=""></img>
      </div>
    );
  }
}