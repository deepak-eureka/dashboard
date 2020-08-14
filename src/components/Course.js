
// import React from "react";
// import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

// class Course extends React.Component {
//   constructor(props) {
//     super(props);

//     //this.toggle = this.toggle.bind(this);
//     this.state = {
//       dropdownOpen: false,
//       Courses: [
//         {
//           Title: "1. Introduction to IT",
//           Descriptipn: "This is Description",
//           toggle: false,
//           SubCat: [
//             {
//               Title: "This is title",
//               description: "this is Description",
//               Video: "this is video link",
//               Text: "this is Text Link",
//               sample: "THis is Sample Link",
//               progressVal: 80,
//             },
//             {
//               Title: "This is title",
//               description: "this is Description",
//               Video: "this is video link",
//               Text: "this is Text Link",
//               sample: "THis is Sample Link",
//               progressVal: 0,
//             },
//             {
//               Title: "This is title",
//               description: "this is Description",
//               Video: "this is video link",
//               Text: "this is Text Link",
//               sample: "THis is Sample Link",
//               progressVal: 40,
//             },
//           ],
//         },
//         {
//           Title: "2. Dive into IT",
//           Descriptipn: "This is Description",
//           toggle: false,
//           SubCat: [
//             {
//               Title: "This is title",
//               description: "this is Description",
//               Video: "this is video link",
//               Text: "this is Text Link",
//               sample: "THis is Sample Link",
//               progressVal: 10,
//             },
//           ],
//         },
//         {
//           Title: "3. Fidgeting with programming: Python",
//           Descriptipn: "This is Description",
//           toggle: false,
//           SubCat: [
//             {
//               Title: "This is title",
//               description: "this is Description",
//               Video: "this is video link",
//               Text: "this is Text Link",
//               sample: "THis is Sample Link",
//               progressVal: 40,
//             },
//             {
//               Title: "This is title",
//               description: "this is Description",
//               Video: "this is video link",
//               Text: "this is Text Link",
//               sample: "THis is Sample Link",
//               progressVal: 80,
//             },
//           ],
//         },
//         {
//           Title: "4. Basics of Scratch",
//           Descriptipn: "This is Description",
//           toggle: false,
//           SubCat: [
//             {
//               Title: "This is title",
//               description: "this is Description",
//               Video: "this is video link",
//               Text: "this is Text Link",
//               sample: "THis is Sample Link",
//               progressVal: 40,
//             },
//           ],
//         },
//       ],
//     };



//    }


//     tog = (ele) => {
//     for (let i = 0; i < this.state.Courses.length; i++) {
//       console.log(this.state.Courses[i]);
//       if (ele === this.state.Courses[i]) {
//         ele.toggle = !ele.toggle;
//         this.setState({
//           Courses: [...this.state.Courses],
//         });
//         break;
//       }
//     }
//   };

//   render() {
//     return (
// 			<div className="course">
			
      
//       {this.state.Courses.map((course,index)=>{
//         return(
//           <div key={index}>
//           <Dropdown  isOpen={course.toggle} toggle={() => this.tog(course)}>
//           <DropdownToggle className="dropdown-toogle" caret>
//               {course.Title}
//           </DropdownToggle>
//             <DropdownMenu >
//               <DropdownItem>Dummy 1</DropdownItem>
//               <DropdownItem>Dummy 1</DropdownItem>
//               <DropdownItem divider />
//               <DropdownItem>Dummy 1</DropdownItem>
//               <DropdownItem>Dummy 1</DropdownItem>
//               <DropdownItem>Dummy 1</DropdownItem>
//             </DropdownMenu>
//             </Dropdown>        
//       </div>
//         )
         
//       })
//       }
      

//       <img src={require("../assets/courseBG.png")} alt=""></img>
//     </div>
// 		);
//   }
// }


// export default Course;

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
<<<<<<< HEAD
=======
            {
              Title: "This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 40,
            },

>>>>>>> changes in UI
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
<<<<<<< HEAD
=======


>>>>>>> changes in UI

  render() {
    return (
      <div className="course">
        <h1 className="headings">Information Technology 2020-21</h1>
        <Container>
          {this.state.courses.map((item, index) => (
            <Row key={index}>
              <Col>
                <Dropdown isOpen={item.toggle} toggle={() => this.tog(item)}>
<<<<<<< HEAD
                  <DropdownToggle className="dropdown-toogle" caret>
=======
                  <DropdownToggle   caret>
>>>>>>> changes in UI
                    {item.Title}
                  </DropdownToggle>
                  <DropdownMenu>
                    <Row xs={3}>
                      {item.SubCat.map((sub, i) => (
                        <Col key={i}>
<<<<<<< HEAD
                          <DropdownItem>
=======
                          <DropdownItem >
>>>>>>> changes in UI
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