import { useState } from "react";
import AuthPage from "./main/AuthPage";
import ChatsPage from "./main/ChatsPage";

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
