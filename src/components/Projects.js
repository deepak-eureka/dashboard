import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import styles from "./Project.module.css";
import Switch from "react-ios-switch";

export default class Projects extends Component {
  state = {
    projectList: [
      {
        Title: "UK Newspaper Headlines",
        Text: "TEXT",
        Content: "Daily_Mail, Daily_Telegraph pr 2 other classes",
      },
      {
        Title: "UK Newspaper Headlines",
        Text: "TEXT",
        Content: "Daily_Mail, Daily_Telegraph pr 2 other classes",
      },
      {
        Title: "UK Newspaper Headlines",
        Text: "TEXT",
        Content: "Daily_Mail, Daily_Telegraph pr 2 other classes",
      },
    ],
  };

  render() {
    return (
      <div className={styles.main}>
        <h1>Projects</h1>
        <div>
          <div className={styles.img}>
            <img
              style={{ width: "30%", float: "left" }}
              src={require("../assets/projects/main.png")}
              alt=""
            />
            <div className={styles.add}>
              <button className={styles.add_btn}>
                <h3>+</h3>
              </button>
            </div>
          </div>
        </div>

        {this.state.projectList !== null
          ? this.state.projectList.map((item, index) => (
              <Card className={styles.card} key={index}>
                <CardBody>
                  <div className="align-card">
                    <div>
                      <CardTitle className={styles.card_title}>
                        {item.Title}
                      </CardTitle>
                      <CardText>
                        <div>
                          <div className={styles.text}>{item.Text}</div>
                          <div className={styles.content}>{item.Content}</div>
                        </div>
                      </CardText>
                    </div>

                    <div>
                      <div>
                        <div className={styles.child}>Share</div>
                        <div className={styles.child}>
                          <div className={styles.btn}>
                            <Switch className={styles.switch} />
                          </div>
                        </div>
                      </div>
                      <br />
                      <div>
                        <div className={styles.child}>Delete</div>
                        <div className={styles.child}>
                          <div className={styles.btn}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))
          : null}
      </div>
    );
  }
}
