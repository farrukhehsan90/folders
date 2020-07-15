import React from "react";
import SidebarItem from "./sideBarItem";

const SideBar = props => {
  const { user } = props;

  return (
    <div className="sideBar" id="sidebar">
      <ul className="list-style-none">
        {typeof user === "string" && (
          <span>
            Welcome, <span style={{ fontSize: "1vw" }}>{user}</span>!
          </span>
        )}
        <li onClick={() => props.handleClick(0)} id="root">
          Root
        </li>
        {props.fs[0].children.map(ele => {
          if (props.fs[ele].type === "folder")
            return (
              <SidebarItem
                key={ele}
                id={props.fs[ele].id}
                name={props.fs[ele].name}
                isempty={props.fs[ele].children.length === 0}
                handleClick={data => props.handleClick(data)}
                fs={props.fs}
              />
            );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
