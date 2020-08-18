import React, { Component } from "react";
import styles from "./Addproject.module.css";
import { Card, Input, Container, Row, Col } from "reactstrap";

export default class Addproject extends Component {
  state = {
    img: [
      require("../../assets/addproject/images.svg"),
      // require("../../assets/addproject/Number.svg"),
      require("../../assets/addproject/sound.svg"),
      require("../../assets/addproject/Text.svg"),
    ],
  };

  render() {
    return (
      <Container className={styles.layout}>
        <h1>Add Projects</h1>
        <div className={styles.alignItems}>
          <div className={styles.mar}>
            <h4 className={styles.subHeader}>Project Name: </h4>
          </div>
          <div className={styles.mar}>
            <Card className={styles.card}>
              <Input
                className={styles.inputField}
                type="text"
                placeholder="Add new project"
              ></Input>
            </Card>
          </div>
        </div>

        <div className={styles.alignItems}>
          <div className={styles.mar}>
            <h4 className={styles.subHeader}>Project Name: </h4>
          </div>
        </div>

        <div className={styles.alignItems}>
          <div className={styles.alignRow}>
            {this.state.img.map((it, idx) => (
              <div className={styles.borderImg}>
                <div className={styles.BgImg} key={idx}>
                  <img src={it} alt=""></img>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.subContainer}>
          <img
            className={styles.imgBG}
            src={require("../../assets/addproject/addproject.png")}
            alt=""
          ></img>
        </div>
      </Container>
    );
  }
}
