import React, { Component } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import styles from "./Project.module.css";
import Switch from "react-ios-switch";
import { Link } from "react-router-dom";

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

  handleCardClick(index) {
    console.log("Card Clicked ");
    return <Link to={this.props.location.pathname + "/" + index}></Link>;
  }

  render() {
    console.log(this.props.location.pathname);
    return (
      <div className={styles.main}>
        <h1 className={styles.heading}>Projects</h1>
        <div className={styles.align_row__}>
          <div>
            <img
              style={{ width: "30%", float: "left" }}
              src={require("../../assets/main.png")}
              alt=""
            />
          </div>
          <div>
            <div className={styles.icons_right}>
              <Link to="/copy">
                <img
                  className={styles.copyImg}
                  src={require("../../assets/projects/copy.svg")}
                  alt=""
                ></img>
              </Link>
              <Link to="/add">
                <img
                  className={styles.copyImg}
                  src={require("../../assets/projects/plus.svg")}
                  alt=""
                ></img>
              </Link>
            </div>
          </div>
        </div>

        {this.state.projectList !== null
          ? this.state.projectList.map((item, index) => (
              <Link to={this.props.location.pathname + "/" + index} key={index}>
                <Card className={styles.card}>
                  <CardBody>
                    <div>
                      <div>
                        <CardTitle className={styles.card_title}>
                          {item.Title}
                        </CardTitle>
                        {/* <CardText> */}
                        {/* <div className={styles.align_row_items}> */}
                        <div className={styles.text}>{item.Text}</div>
                        <div className={styles.content}>{item.Content}</div>
                        <div className={styles.aligncol}>
                          <div className={styles.align_row_items}>
                            <div className={styles.shareNDel}> Share</div>
                            <div>
                              <Switch />
                            </div>
                          </div>
                          <div className={styles.align_row_items}>
                            <div className={styles.shareNDel}>Delete</div>
                            <div>
                              <img
                                className={styles.trash}
                                src={require("../../assets/projects/trash.svg")}
                                alt=""
                              ></img>
                            </div>
                          </div>
                        </div>
                        {/* </div> */}
                        {/* </CardText> */}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            ))
          : null}
      </div>
    );
  }
}
