import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./App.css";

import config from "./bot/config.jsx";
import MessageParser from "./bot/MessageParser.jsx";
import ActionProvider from "./bot/ActionProvider.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
