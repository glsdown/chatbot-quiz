# Chat Bot App

This is a React App that was built as part of a wedding celebration for my sister. It is hosted on [S3 on AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html) at [http://libic-bot-5000.sproodlebuzz.co.uk/](http://libic-bot-5000.sproodlebuzz.co.uk/). It makes use of [`react-chatbot-kit`](https://www.npmjs.com/package/react-chatbot-kit) to provide an interactive interface, but due to the nature of the tool, it has been heavily customised to respond to a specific order of requests (as defined within [src/bot/responses/responses.js](src/bot/responses/responses.js)).

It was built quickly, rather than "properly", but provides an effective interface for the job it was designed for - providing a 'quiz' for my sister to answer prior to providing her with a recipe for some chocolate brownies.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. The app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

