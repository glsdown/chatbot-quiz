// in config.js
import { createChatBotMessage } from "react-chatbot-kit";

import FullRecipe from "./FullRecipe.jsx";

const botName = "Libic Bot 5000";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, and welcome to the ${botName}`),
    createChatBotMessage("May I please have your first name?"),
  ],
  botName: botName,
  state: {
    currentSection: 0,
    questionNumber: 1,
  },
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
    {
      widgetName: "fullIngredients",
      widgetFunc: (props) => <FullRecipe {...props} showMethod={false} />,
    },
    {
      widgetName: "fullMethod",
      widgetFunc: (props) => <FullRecipe {...props} showIngredients={false} />,
    },
  ],
};

export default config;
