class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (message.includes("hello")) {
      this.actionProvider.handleHello();
    }
    if (message.toLowerCase() === "get in the chopper") {
      this.actionProvider.handleRecipe();
    }
  }
}

export default MessageParser;
