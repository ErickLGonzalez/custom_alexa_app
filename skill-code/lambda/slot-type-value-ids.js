/**
 * Copyright 2018-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under the Amazon Software License
 * http://aws.amazon.com/asl/
 */

/**
 * This file defines the prompts, reprompts, APL content for each supported locale
 */
// Eventually add other languages. For now we are only using English. FEED.CATEGORY: feedcategory.jp for example for the Japanese translation.
const feedcategory = require("./slot-type-value-ids.js");

// List of localized strings (all locales)
module.exports = {
    en: {
        translation: {
            FEED_CATEGORY: feedcategory.en,
            SKILL_NAME: 'Stars and Stripes',
            HEADER_TITLE: '{{skillName}}',
            FEED_HEADER_TITLE: '{{feed_category_name}}',
            HELP_HEADER_TITLE: 'HELP',
            HELP_HEADER_SUBTITLE: 'Select the feed category you want to prepare',
            WELCOME_MESSAGE: 'Welcome to {{skillName}} Headline News. You can say, what are today\'s top {{feed_category_name}}?, or today\'s {{veteran}} news, or, {{podcast}}. ... Now, which news would you like to hear?',
            WELCOME_REPROMPT: 'For instructions on what you can say, please say help me.  Which feed category would you like to prepare?',
            DISPLAY_CARD_TITLE: '{{skillName}}  - category name for {{feed_category_name}}',
            HELP_MESSAGE: 'You can ask questions such as, what\'s the category name for {{feed_category_name}}, or, you can say exit ... Now, which feed category would you like to prepare?',
            HELP_REPROMPT: 'You can say things like, what\'s the category name for {{feed_category_name}}, or you can say exit ... Now, which feed category would you like to prepare?',
            STOP_MESSAGE: 'Goodbye!',
            FEED_REPEAT_MESSAGE: 'Try saying repeat.',
            FEED_NOT_FOUND_WITH_ITEM_NAME: 'I\'m sorry, I currently do not know the category name for {{feed_category_name}}. Which feed category would you like to prepare ?',
            FEED_NOT_FOUND_WITHOUT_ITEM_NAME: 'I\'m sorry, I currently do not know that category name. Which feed category would you like to prepare?',
            FEED_NOT_FOUND_REPROMPT: 'Which feed category would you like to prepare?',
            ERROR_MESSAGE: 'I\'m sorry I didn\'t catch that. Can you reformulate please ?',
            HINT_TEMPLATE: 'How do I make {{feed_category_name}} feed category?',
            REFLECTOR_MESSAGE: 'You just triggered {{intentName}}'
        }
}
};
