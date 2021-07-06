import React from "react";

const UserList = (props) => {
  if (props.list.length) {
    return (
      <div>
        <ul>
          {props.list.map((item, index) => {
            return (
              <li key={index}>
                {item.name} ({item.age} years old)
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <p>No Users</p>;
  }
};

export default UserList;
