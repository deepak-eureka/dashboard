import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectList.module.css";
import { Card, Container, Row, Col } from "reactstrap";
// import { Progress } from "reactstrap";

export default class ProjectList extends Component {
  render() {
    console.log(this.props);
    return (
      <Container>
        <h1 className={styles.heading}> UK Newspaper Headlines </h1>
        <Link to={this.props.location.pathname + "/dataset"}>
          <Row className={styles.r}>
            <Col>
              <Card className={styles.card}>
                <div>
                  <strong>Dataset: </strong>
                  Collect examples of what you want your computer to recognize.
                </div>
              </Card>
            </Col>
            <div>
              <img
                // className={styles.color}
                src={require("../../assets/projects/dataset.svg")}
                alt=""
              />
            </div>
          </Row>
        </Link>
        <Link to={this.props.location.pathname + "/model"}>
          <Row className={styles.r}>
            <Col>
              <Card className={styles.card}>
                <div>
                  <strong>Model: </strong>
                  Use the examples to train the computer to recognize text.
                </div>
              </Card>
            </Col>
            <div>
              <img src={require("../../assets/projects/model.svg")} alt="" />
            </div>
          </Row>
        </Link>
        <Link to={this.props.location.pathname + "/test"}>
          <Row className={styles.r}>
            <Col>
              <Card className={styles.card}>
                <div>
                  <strong>Test: </strong>
                  Use the examples to train the computer to recognize text.
                </div>
              </Card>
            </Col>
            <div>
              <img src={require("../../assets/projects/test.svg")} alt="" />
            </div>
          </Row>
        </Link>
        <Link to={this.props.location.pathname + "/deploy"}>
          <Row className={styles.r}>
            <Col>
              <Card className={styles.card}>
                <div>
                  <strong>Deploy: </strong>
                  Use the examples to train the computer to recognize text.
                </div>
              </Card>
            </Col>
            <div className="color">
              <img src={require("../../assets/projects/Deploy.svg")} alt="" />
            </div>
          </Row>
        </Link>
      </Container>
    );
  }
}

// <div className="abc">
// <div className={styles.progressBar}>
//   <Progress multi>
//     <Progress value={75}>You're almost there!</Progress>
//   </Progress>
// </div>
// </div>
