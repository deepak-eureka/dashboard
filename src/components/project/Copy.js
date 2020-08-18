import React, { Component } from "react";
import styles from "./Copy.module.css";
import { Card, CardTitle, CardText, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export default class CopyTemplate extends Component {
  state = {
    template: [
      {
        Title: "Carts or Dogs",
        Paragraph:
          "Recognizing photos of cats vs dogs. Training a machine learning model to recognize photos of cats and dogs is a good simple introduction to image recognition.",
      },
      {
        Title: "Carts or Dogs",
        Paragraph:
          "Recognizing photos of cats vs dogs. Training a machine learning model to recognize photos of cats and dogs is a good simple introduction to image recognition.",
      },
      {
        Title: "Carts or Dogs",
        Paragraph:
          "Recognizing photos of cats vs dogs. Training a machine learning model to recognize photos of cats and dogs is a good simple introduction to image recognition.",
      },
      {
        Title: "Carts or Dogs",
        Paragraph:
          "Recognizing photos of cats vs dogs. Training a machine learning model to recognize photos of cats and dogs is a good simple introduction to image recognition.",
      },
      {
        Title: "Carts or Dogs",
        Paragraph:
          "Recognizing photos of cats vs dogs. Training a machine learning model to recognize photos of cats and dogs is a good simple introduction to image recognition.",
      },
      {
        Title: "Carts or Dogs",
        Paragraph:
          "Recognizing photos of cats vs dogs. Training a machine learning model to recognize photos of cats and dogs is a good simple introduction to image recognition.",
      },
    ],
  };

  render() {
    return (
      <Container>
        <h1 className={styles.heading}>Copy Template</h1>
        <div className={styles.layout}>
          <Row className={styles.r} xs={3}>
            {this.state.template.map((it, idx) => (
              <Col key={idx}>
                <Card className={styles.card}>
                  <CardTitle className={styles.cardHeader}>
                    {it.Title}
                  </CardTitle>
                  <CardText className={styles.cardText}>
                    {it.Paragraph}
                  </CardText>

                  <h3 className={styles.midText}>
                    Recognized as:{" "}
                    <Link className={styles.linkColor}>Image</Link>
                  </h3>

                  <div className={styles.cardBottom}>
                    <div>
                      <img
                        className={styles.cardImg}
                        src={require("../../assets/copy/promo.png")}
                        alt=""
                      />
                    </div>
                    <div className={styles.imgBG}>
                      <img
                        className={styles.cardImg2}
                        src={require("../../assets/copy/import.svg")}
                        alt=""
                      ></img>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    );
  }
}
