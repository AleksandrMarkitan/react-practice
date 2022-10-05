import { User } from "../User/User";

export const UserList = ({ users, userDelete, changeJobStatus }) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <User
              user={user}
              userDelete={userDelete}
              changeJobStatus={changeJobStatus}
            />
          </li>
        );
      })}
    </ul>
  );
};
