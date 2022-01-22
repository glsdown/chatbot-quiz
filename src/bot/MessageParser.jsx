class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (message.includes("hello") || message.includes("hi")) {
      // Say hello
      this.actionProvider.handleHello();
    } else if (message.toLowerCase() === "get to the chopper") {
      // Display the full recipe
      this.actionProvider.handleRecipe();
    } else {
      // Most responses respond from the json file
      this.actionProvider.handleResponse(
        this.state,
        message.trim().toLowerCase()
      );
    }
  }
}

export default MessageParser;
