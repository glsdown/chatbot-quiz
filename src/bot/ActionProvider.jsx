import responses from "./responses.json";

class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  // Handle saying 'hello'
  handleHello() {
    const message = this.createChatbotMessage("Hello. Nice to meet you.");

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  // Handle the end 'get the recipe'
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

  // Handle question answers
  handleResponse(state, receivedMessage) {
    // Get the currentSection and questionNumber from the state
    const currentSection = state.currentSection;
    const questionNumber = state.questionNumber;

    // Identify the current response from the JSON file
    const currentResponse = responses[currentSection].details[questionNumber];

    // Create a variable for the messages
    let message = [];
    let newQuestionNumber = questionNumber;
    let newCurrentSection = currentSection;

    // Check there is a response available in the JSON
    if (!currentResponse) {
      message.push(
        this.createChatbotMessage("I don't know how to handle that")
      );
    } else {
      // If there is a response available

      // Check the question type
      let questionType = currentResponse.responseType;

      // Check the question type
      if (questionType === "question") {
        // If it's a question, need to handle the response
        let allowedResponse = currentResponse.allowedResponse;
        let otherResponse = currentResponse.otherResponse;
        let unknownFeedback = currentResponse.unknownFeedback;

        // Check if an allowed response
        let correctResponse = allowedResponse.filter(
          (r) => r.response === receivedMessage
        );
        let incorrectResponse = otherResponse.filter(
          (r) => r.response === receivedMessage
        );
        if (correctResponse.length > 0) {
          // Give feedback
          message.push(correctResponse[0].feedback);
          // Get the next question/statement
          newQuestionNumber++;
        } else if (incorrectResponse.length) {
          // Check for other responses
          message.push(incorrectResponse[0].feedback);
        }
        // Return the unknown feedback
        else {
          message.push(unknownFeedback);
        }
      } else {
        newQuestionNumber++;
      }

      // Add the next statement/question to the pile
      message.push(
        responses[currentSection].details[newQuestionNumber].message
      );

      // Keep adding statements
      while (
        newQuestionNumber + 1 < responses[currentSection].details.length &&
        responses[currentSection].details[newQuestionNumber].responseType ===
          "statement"
      ) {
        newQuestionNumber++;
        message.push(
          responses[currentSection].details[newQuestionNumber].message
        );
      }

      if (newQuestionNumber + 1 === responses[currentSection].details.length) {
        newQuestionNumber = 0;
        newCurrentSection = currentSection + 1;
        if (newCurrentSection < responses.length) {
          message.push(
            responses[newCurrentSection].details[newQuestionNumber].message
          );
        }
      }
    }

    // Display the messages
    this.setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        ...message.map((m, id) =>
          this.createChatbotMessage(m, { delay: id * 1000 })
        ),
      ],
      questionNumber: newQuestionNumber,
      currentSection: newCurrentSection,
    }));
  }
}

export default ActionProvider;
