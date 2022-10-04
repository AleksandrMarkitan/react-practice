import PropTypes from "prop-types";

import { Poragraph, Span } from "./User.styled";

export const User = ({ user: { name, email } }) => {
  const isOrange = email.includes("biz");
  return (
    <div>
      <Poragraph>
        Name: <Span>{name}</Span>
      </Poragraph>
      <Poragraph>
        Email: <Span isOrange={isOrange}>{email}</Span>
      </Poragraph>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired, // name of the users  object  being
  }).isRequired,
};
