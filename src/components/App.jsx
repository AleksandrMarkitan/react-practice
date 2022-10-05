// import { User } from "./User/User";
import { users } from "../data/users";
import { UserList } from "./UserList/UserList";
// import { Section } from "./Section/Section";
import { Button } from "./User/Button";

import { Component } from "react";

export class App extends Component {
  state = { users, isListShown: false };
  clickHandler = () => {
    this.setState({ isListShown: true });
  };

  userDelete = (userId) => {
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.id !== userId),
    }));
  };

  changeJobStatus = (userId) => {
    this.setState((prevState) => ({
      users: prevState.users.map((user) =>
        user.id !== userId ? user : { ...user, hadjob: !user.hadjob }
      ),
    }));
  };

  render() {
    const { isListShown, users } = this.state;
    return (
      <>
        {isListShown ? (
          <UserList
            users={users}
            userDelete={this.userDelete}
            changeJobStatus={this.changeJobStatus}
          />
        ) : (
          <Button
            type="button"
            text="Show users list"
            clickHandler={this.clickHandler}
          />
        )}
      </>
    );
  }
}

// export const App = () => {
//   return (
//     <>
//       <Section>
//         <User user={users[0]} />
//       </Section>
//       <Section title="userslist">
//         <UserList users={users} />
//       </Section>
//     </>
//   );
// };
