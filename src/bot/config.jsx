// in config.js
import { createChatBotMessage } from "react-chatbot-kit";

import ShowGif from "./widgets/ShowGif.jsx";
import FullRecipe from "./widgets/FullRecipe.jsx";

const botName = "Libic Bot 5000";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, and welcome to the ${botName}`),
    createChatBotMessage("May I please have your first name?", { delay: 1000 }),
  ],
  botName: botName,
  state: {
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
      widgetName: "excitedGif",
      widgetFunc: (props) => <ShowGif {...props} gifType={"excited"} />,
    },
    {
      widgetName: "goodLuckGif",
      widgetFunc: (props) => <ShowGif {...props} gifType={"goodLuck"} />,
    },
    {
      widgetName: "endgameHammerGif",
      widgetFunc: (props) => <ShowGif {...props} gifType={"endgameHammer"} />,
    },
    {
      widgetName: "godspeedGif",
      widgetFunc: (props) => <ShowGif {...props} gifType={"godspeed"} />,
    },
    {
      widgetName: "justWaitGif",
      widgetFunc: (props) => <ShowGif {...props} gifType={"justWait"} />,
    },
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
