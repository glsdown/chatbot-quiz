class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (message.includes("hello") || message.includes("hi")) {
      this.actionProvider.handleHello();
    } else if (message.toLowerCase() === "get in the chopper") {
      this.actionProvider.handleRecipe();
    } else {
      this.actionProvider.handleResponse(this.state, message.toLowerCase());
    }
  }
}

export default MessageParser;
