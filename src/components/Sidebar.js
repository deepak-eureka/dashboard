import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import "./sidebar.css";

import {
  DropdownItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: props.location.pathname,
      dropdownOpen: false,
    };
  }

  onItemClick = (path) => {
    this.setState({ activePath: path });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  render() {
    const { activePath } = this.state;
    return (
      <div className="styled-sidebar">
        <div className="logo-title">
          <div>
            <Link to="/">
              <img src={require("../assets/logo.png")} alt="" />
            </Link>
          </div>
          <div>
            <h1>EUREKA</h1>
            <h4>Learn, Share and Build</h4>
          </div>
        </div>

        <NavItem
          path="/"
          name="Home"
          css={require("../assets/home.png")}
          onItemClick={this.onItemClick}
          active={"/" === activePath}
        ></NavItem>

        <NavItem
          path="/course"
          name="Course"
          css={require("../assets/course.png")}
          onItemClick={this.onItemClick}
          active={"/course" === activePath}
        ></NavItem>

        <NavItem
          path="/project"
          name="Project"
          css={require("../assets/project.png")}
          onItemClick={this.onItemClick}
          active={"/project" === activePath}
        ></NavItem>
        <div className="drop-align">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret></DropdownToggle>
            <DropdownMenu>
              <div className="menu">
                <DropdownItem>
                  <img
                    src={require("../assets/projects/dataset.svg")}
                    alt=""
                  ></img>
                  Dataset
                </DropdownItem>
                <DropdownItem>
                  <img
                    src={require("../assets/projects/model.svg")}
                    alt=""
                  ></img>
                  Model
                </DropdownItem>
                <DropdownItem>
                  <img
                    src={require("../assets/projects/test.svg")}
                    alt=""
                  ></img>
                  Test
                </DropdownItem>
                <DropdownItem>
                  <img
                    src={require("../assets/projects/Deploy.svg")}
                    alt=""
                  ></img>
                  Deploy
                </DropdownItem>
              </div>
            </DropdownMenu>
          </Dropdown>
        </div>

        <NavItem
          path="/progress"
          name="Progress"
          css={require("../assets/progress.png")}
          onItemClick={this.onItemClick}
          active={"/progress" === activePath}
        ></NavItem>

        <NavItem
          path="/competitions"
          name="Competitions"
          css={require("../assets/competitions.png")}
          onItemClick={this.onItemClick}
          active={"/competitions" === activePath}
        ></NavItem>

        <NavItem
          path="/settings"
          name="Settings"
          css={require("../assets/settings.png")}
          onItemClick={this.onItemClick}
          active={"settings" === activePath}
        ></NavItem>
        <div className="logout">
          <div>
            <Link to="/logout">
              <img src={require("../assets/logout.png")} alt="" />
            </Link>
          </div>
          <div>
            <h1>Log out</h1>
          </div>
        </div>
      </div>
    );
  }
}

const StyledNavItem = styled.div`
  height: 40px;
  width: 65px;
  margin-bottom: 0;
  a {
    font-size: 2.7em;
    color: ${(props) => (props.active ? "white" : "grey")};
    :hover {
      opacity: 0.7;
      text-decoration: none;
    }
  }
  span {
    background-color: ${(props) => (props.active ? "#1C9CD6" : "white")};
    border-radius: 20px;
    margin: 20px;
  }
`;

class NavItem extends React.Component {
  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  };

  render() {
    const { active } = this.props;
    return (
      <StyledNavItem active={active}>
        <Link
          to={this.props.path}
          className={this.props.css}
          onClick={this.handleClick}
        >
          <div className="apply-flex">
            <div>
              <img src={this.props.css} alt=""></img>
            </div>
            <div className="title">
              <span>{this.props.name}</span>
            </div>
          </div>
        </Link>
      </StyledNavItem>
    );
  }
}

const RouterSideNav = withRouter(SideNav);

export default class Sidebar extends React.Component {
  render() {
    return <RouterSideNav></RouterSideNav>;
  }
}
