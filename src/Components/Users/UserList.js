import Card from "../UI/Card";
import style from "./UserList.module.css";

function UserList(props) {
  return (
    <Card onUserList={style.users}>
      <ul>
        {props.users.length > 0 ? (
          props.users.map((data) => (
            <li key={data.id}>
              {data.name} ({data.age} years old)
            </li>
          ))
        ) : (
          <li>Haven't entered data yet?</li>
        )}
      </ul>
    </Card>
  );
}

export default UserList;
