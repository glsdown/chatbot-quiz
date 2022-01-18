class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleHello() {
    const message = this.createChatbotMessage("Hello. Nice to meet you.");

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleRecipe() {
    const message = this.createChatbotMessage(
      "Here is the full recipe for you!",
      {
        widget: "fullRecipe",
      }
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}

export default ActionProvider;
