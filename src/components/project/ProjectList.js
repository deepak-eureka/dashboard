import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectList.module.css";
import { Card, Container, Row, Col } from "reactstrap";
// import { Progress } from "reactstrap";

export default class ProjectList extends Component {
  state = {
    iconList: [
      {
        link: this.props.location.pathname + "/dataset",
        title: "Dataset",
        desc: "Collect examples of what you want your computer to recognize.",
        img: require("../../assets/projectList/dataset.svg"),
      },
      {
        link: this.props.location.pathname + "/model",
        title: "Model",
        desc: " Use the examples to train the computer to recognize text.",
        img: require("../../assets/projectList/model.svg"),
      },
      {
        link: this.props.location.pathname + "/test",
        title: "Test",
        desc: "Use the examples to train the computer to recognize text.",
        img: require("../../assets/projectList/test.svg"),
      },
      {
        link: this.props.location.pathname + "/deploy",
        title: "Deploy",
        desc: " Use the examples to train the computer to recognize text.",
        img: require("../../assets/projectList/Deploy.svg"),
      },
    ],
  };

  render() {
    console.log(this.props);
    return (
      <Container>
        <h1 className={styles.heading}> UK Newspaper Headlines </h1>
        {this.state.iconList.map((item, idx) => (
          <Link to={item.link} key={idx}>
            <Row className={styles.r}>
              <Col>
                <Card className={styles.card}>
                  <div>
                    <strong>{item.title} : </strong>
                    {item.desc}
                  </div>
                </Card>
              </Col>
              <div className={styles.color}>
                <img className={styles.imgC} src={item.img} alt="" />
              </div>
            </Row>
          </Link>
        ))}
      </Container>
    );
  }
}
