// in config.js
import { createChatBotMessage } from "react-chatbot-kit";

import FullRecipe from "./FullRecipe.jsx";

const botName = "Libic Bot 5000";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, and welcome to the ${botName}`),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  widgets: [
    {
      widgetName: "fullRecipe",
      widgetFunc: (props) => <FullRecipe {...props} />,
    },
  ],
};

export default config;
