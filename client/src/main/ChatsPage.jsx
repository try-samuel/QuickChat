import { PrettyChatWindow } from "react-chat-engine-pretty";
import PropTypes from "prop-types";

const ChatsPage = (props) => {
  const projectId = import.meta.env.VITE_PROJECT_ID;
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId={projectId}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};
