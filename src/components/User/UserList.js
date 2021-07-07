import Card from "../layout/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  if (props.list.length) {
    return (
      <Card className={styles.userList}>
        <ul>
          {props.list.map((item, index) => {
            return (
              <li key={index}>
                {item.name} ({item.age} years old)
              </li>
            );
          })}
        </ul>
      </Card>
    );
  } else {
    return <></>;
  }
};

export default UserList;
