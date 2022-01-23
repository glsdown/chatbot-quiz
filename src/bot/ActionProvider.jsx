import responses from "./responses/responses";

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
    // Get the questionNumber from the state
    const questionNumber = state.questionNumber;

    // Create a variable for the messages
    let message = [];
    let newQuestionNumber = questionNumber;
    let currentDelay = 0;
    let delayPeriod = 750;

    // Check there is a response available in the JSON
    if (questionNumber < 0 || questionNumber >= responses.length) {
      message.push(
        this.createChatbotMessage("I don't know how to handle that")
      );
    } else {
      // If there is a response available

      // Identify the current response that was requested from the JSON file
      const currentResponse = responses[questionNumber];

      // Check the question type
      let questionType = currentResponse.responseType;

      // Check the question type
      if (questionType === "question") {
        // If it's a question, need to handle the response
        // The question was asked in the previous 'round'
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
          message.push(
            this.createChatbotMessage(correctResponse[0].feedback, {
              delay: currentDelay,
            })
          );
          // Get the next question/statement
          newQuestionNumber++;
        } else if (incorrectResponse.length) {
          // Check for other responses
          message.push(
            this.createChatbotMessage(incorrectResponse[0].feedback, {
              delay: currentDelay,
            })
          );
        }
        // Return the unknown feedback
        else {
          message.push(
            this.createChatbotMessage(unknownFeedback, {
              delay: currentDelay,
            })
          );
        }
      } else {
        // If it's not a question, just move to the next one as no
        // response is required
        newQuestionNumber++;
      }

      // Increase the message delay
      currentDelay = currentDelay + delayPeriod;

      // Add the next statement/question to the pile
      if (responses[newQuestionNumber].responseType === "widget") {
        // If it's a widget, then need to display that
        // Create the widget
        message.push(
          this.createChatbotMessage(responses[newQuestionNumber].message, {
            widget: responses[newQuestionNumber].widgetName,
            delay: currentDelay,
          })
        );
      } else {
        // Just display the next message as it is
        message.push(
          this.createChatbotMessage(responses[newQuestionNumber].message, {
            delay: currentDelay,
          })
        );
      }

      // Keep adding statements
      while (
        newQuestionNumber + 1 < responses.length &&
        (responses[newQuestionNumber].responseType === "statement" ||
          responses[newQuestionNumber].responseType === "widget")
      ) {
        // Increase the message delay
        currentDelay =
          currentDelay +
          delayPeriod *
            Math.ceil(
              responses[newQuestionNumber].message.split(" ").length / 5
            );

        // Get the next question
        newQuestionNumber++;

        // Add the message
        // Add the next statement/question to the pile

        if (responses[newQuestionNumber].responseType === "widget") {
          // Create the widget
          message.push(
            this.createChatbotMessage(responses[newQuestionNumber].message, {
              widget: responses[newQuestionNumber].widgetName,
              delay: currentDelay,
            })
          );
        } else {
          // Just display the message as it is
          message.push(
            this.createChatbotMessage(responses[newQuestionNumber].message, {
              delay: currentDelay,
            })
          );
        }
      }

      // Loop back to the start if required
      if (newQuestionNumber + 1 === responses.length) {
        newQuestionNumber = 0;
      }
    }

    // Display the messages
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, ...message],
      questionNumber: newQuestionNumber,
    }));
  }
}

export default ActionProvider;
