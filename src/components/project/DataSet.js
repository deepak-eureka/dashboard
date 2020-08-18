import React, { Component } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import styles from "./DataSet.module.css";

export default class Projects extends Component {
  state = {
    dataset: [
      {
        Name: "Name",
        question: [
          "What is your name?",
          "What is your name?",
          "What is your name?",
          "What is your name?",
          "What is your name?",
          "What is your name?",
        ],
      },
      {
        Name: "Name",
        question: [
          "What is your name?",
          "What is your name?",
          "What is your name?",
          "What is your name?",
          "What is your name?",
          "What is your name?",
        ],
      },
      {
        Name: "Name",
        question: [
          "What is your name?",
          "What is your name?",
          "What is your name?",
          "What is your name?",
          "What is your name?",
          "What is your name?",
        ],
      },
    ],
  };

  render() {
    return (
      <Container className={styles.main}>
        <h1 className={styles.heading}>UK Newspaper Headlines: Dataset</h1>

        <div className={styles.addBtn}>
          <Button className={styles.add}>Add New Class</Button>
        </div>

        <Container style={{ margin: "0" }}>
          <Row>
            {this.state.dataset.map((item, idx) => (
              <Col xs={6} md={4} key={idx}>
                <Card className={styles.card}>
                  <CardBody>
                    <CardTitle className={styles.card_title}>
                      {item.Name}
                    </CardTitle>
                    <CardText>
                      {item.question.map((i, ind) => (
                        <div className={styles.name}>
                          <div className={styles.question}>{i}</div>
                          <button className={styles.btn}>x</button>
                        </div>
                      ))}

                      <form className={styles.form}>
                        <input
                          type="text"
                          placeholder="Enter Here!"
                          className={styles.input}
                        />
                        <button type="submit" className={styles.submit_btn}>
                          =
                        </button>
                      </form>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img
            src={require("../../assets/dataset/dataset.png")}
            style={{ width: "20%", height: "20%" }}
            alt=""
          />
        </div>
      </Container>
    );
  }
}
