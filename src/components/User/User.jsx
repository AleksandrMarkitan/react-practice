import PropTypes from "prop-types";

import { Poragraph, Span } from "./User.styled";

export const User = ({
  user: { name, email, id, hadjob },
  userDelete,
  changeJobStatus,
}) => {
  const isOrange = email.includes("biz");
  return (
    <>
      <Poragraph>
        Name: <Span>{name}</Span>
      </Poragraph>
      <Poragraph>
        Email: <Span isOrange={isOrange}>{email}</Span>
      </Poragraph>
      <Poragraph>
        HadJob: <span>{hadjob.toString()}</span>
      </Poragraph>
      <button onClick={() => userDelete(id)}>Delete</button>
      <button onClick={() => changeJobStatus(id)}>Change job status</button>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired, // name of the users  object  being
  }).isRequired,
};
