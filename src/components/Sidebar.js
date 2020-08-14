import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import "./sidebar.css";

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: props.location.pathname,
      items: [
        {
          path: "/",
          name: "Home",
          css: require("../assets/home.png"),
          key: 0,
        },
        {
          path: "/course",
          name: "Course",
          css: require("../assets/course.png"),
          key: 1,
        },
        {
          path: "/project",
          name: "Project",
          css: require("../assets/project.png"),
          key: 2,
        },
        {
          path: "/progress",
          name: "Progress",
          css: require("../assets/progress.png"),
          key: 3,
        },
        {
          path: "/competitions",
          name: "Competitions",
          css: require("../assets/competitions.png"),
          key: 4,
        },
        {
          path: "/settings",
          name: "Settings",
          css: require("../assets/settings.png"),
          key: 5,
        },
      ],
    };
  }

  onItemClick = (path) => {
    this.setState({ activePath: path });
  };

  render() {
    const { items, activePath } = this.state;
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

        {items.map((item) => {
          return (
            <NavItem
              path={item.path}
              name={item.name}
              css={item.css}
              onItemClick={this.onItemClick}
              active={item.path === activePath}
              key={item.key}
            />
          );
        })}
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

const RouterSideNav = withRouter(SideNav);

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

export default class Sidebar extends React.Component {
  render() {
    return <RouterSideNav></RouterSideNav>;
  }
}
