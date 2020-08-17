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
        <div>
          <div className={styles.img}>
            <img
              style={{ width: "30%", float: "left" }}
              src={require("../../assets/main.png")}
              alt=""
            />
            <div className={styles.add}>
              {/* <button className={styles.add_btn}>
                 <h3>+</h3> 
               add and delete button 
              </button> */}
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
                        <div className={styles.align_row_items}>
                          <div className={styles.text}>{item.Text}</div>
                          <div className={styles.content}>{item.Content}</div>
                          <div className={styles.aligncol}>
                            <div className={styles.shareNDel}> Share</div>
                            <div>
                              <Switch />
                            </div>
                            <div className={styles.shareNDel}>Delete</div>
                            <div>Delete logo</div>
                          </div>
                        </div>
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
