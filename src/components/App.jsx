import { nanoid } from "nanoid";

import PropTypes from "prop-types";

import { Component } from "react";

import { users } from "../data/users";
import { UserList } from "./UserList/UserList";
import { Button } from "./User/Button";
import { AddUserForm } from "./Form/AddUserForm";

export class App extends Component {
  state = {
    users,
    isListShown: false,
  };

  static propTypes = {
    addUser: PropTypes.func.isRequired,
  };

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

  addUser = (data) => {
    const newUser = {
      ...data,
      hadjob: false,
      id: nanoid(),
    };
    this.setState((prevState) => ({ users: [...prevState.users, newUser] }));
  };

  render() {
    const { isListShown, users } = this.state;
    return (
      <>
        {isListShown ? (
          <>
            <AddUserForm addUser={this.addUser} />
            <UserList
              users={users}
              userDelete={this.userDelete}
              changeJobStatus={this.changeJobStatus}
            />
          </>
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
