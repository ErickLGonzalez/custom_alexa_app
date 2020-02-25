/**
 * Copyright 2018-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under the Amazon Software License
 * http://aws.amazon.com/asl/
 */

// List of prompts, reprompts, APL content.

// Custom slot type value IDS
const FEED_ID = require("./slot-type-value-ids");

// List of localized strings (all locales)
module.exports = {
    en: {
        translation: {
            FEED_ID: FEED_ID.en,
            SKILL_NAME: `Your skill Name`,
            HEADER_TITLE: `{{skillName}}`,
            FEED_HEADER_TITLE: '{{skillName}} - {{feedName}},
            HELP_HEADER_TITLE: 'HELP',
            HELP_HEADER_SUBTITLE: 'Select the feed you like to hear',
            WELCOME_MESSAGE: 'Welcome to {{skillName}}. you can select the news feed you like to hear, you can say {{headlines}}, {{veteran}}, or today's {{podcast}}.', 
            WELCOME_REPROMPT: 'For instructions on what you can say, please say help me.',
            DISPLAY_CARD_TITLE: '{{skillName}}  - {{feedName}}',
            HELP_MESSAGE: 'You can ask questions such as - INSERT YOUR INTENT - , or you can say exit.',
            HELP_REPROMPT: '',
            STOP_MESSAGE: 'Goodbye!',
            FEED_REPEAT_MESSAGE: 'Try saying repeat.',
            FEED_NOT_FOUND_REPROMPT: 'The feed you requested was not found',
            ERROR_MESSAGE: 'I'm sorry I didn't catch that. Can you reformulate please?',
            HINT_TEMPLATE: 'Hint',
            // Development
            REFLECTOR_MESSAGE: 'You triggered {{intentName}}'
        }
};
