// Alexa custom skill app index.js
// Alexa Skills Kit SDK (v2).
// RSS Parser https://www.npmjs.com/package/rss-parser

// Modules Definition

// ASK SDK
const Alexa = require('ask-sdk-core');
// ASK SDK adapter to connecto to Amazon S3
const persistenceAdapter = require('ask-sdk-s3-persistence-adapter');
// i18n library dependency, we use it below in a localisation interceptor
const i18n = require('i18next');
// We import a language strings object containing all of our strings.
// The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG')
const languageStrings = require('./languageStrings');
// We will use the moment.js package in order to make sure that we calculate the date correctly
const moment = require('moment-timezone');
const Parser = require('rss-parser');
const parser = new Parser();

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  
    handle(handlerInput) {
      // This parses and returns the feed results. This is not a global variable.
      // To do: code for global variables and turn feeds into their own consts.
    return parser.parseURL('https://www.stripes.com/cmlink/1.601299').then(result => {
        const defaultLaunchFeedResults = result.items.splice(0).map(item => {
          // This is how you like to return the feed results. You can change the format to include sounds or add more time between each feed item.
          // Here I return the item title enclosed in paragraphs. <p>.
          // To do: add the chime sounds from Flash briefings?
            return '<p>' + item.title + '</p>';
        }).join('');
        
const speechText = '<prosody pitch="high">Welcome to Stars and Stripes <emphasis level="reduced">Headlines</emphasis></prosody>. Brought to you by Service Federal Credit Union. <break time="500ms" /><prosody pitch="high">Here are today\'s top headlines:</prosody>'+ news + '... That\'s all for now.';
        return handlerInput.responseBuilder
          .speak(speechText)
          .getResponse();
    });
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'Ask me to read news';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
