// These are the responses that the bot will provide (and expect)

const responses = [
  {
    message: "Hello, and welcome to the Libic bot 5000.",
    responseType: "statement",
  },
  {
    message: "May I please have your first name?",
    responseType: "question",
    allowedResponse: [
      {
        response: "libby",
        feedback: "Ahh the lesser half...",
      },
      {
        response: "eric",
        feedback: "Ahh the better half!",
      },
    ],
    otherResponse: [],
    unknownFeedback: "I'm sorry, but you are not one of my authorised users.",
  },
  {
    message: "And what is your fiancé(e)'s name?",
    responseType: "question",
    allowedResponse: [
      {
        response: "libby",
        feedback: "Ahh the lesser half...",
      },
      {
        response: "eric",
        feedback: "Ahh the better half!",
      },
    ],
    otherResponse: [],
    unknownFeedback:
      "Oops! Think I've put my foot in it here. I'm going to slowly back away now.",
  },
  {
    message:
      "Now I know who I am dealing with, I have a few security questions for you that will provide you access to your congratulatory recipe.",
    responseType: "statement",
  },
  {
    message: "Question 1: Who is Libby's best sister?",
    responseType: "question",
    allowedResponse: [
      {
        response: "gemma",
        feedback: "That's it!",
      },
    ],
    otherResponse: [
      {
        response: "lucy",
        feedback: "You have to be kidding! Try again",
      },
      {
        response: "tess",
        feedback: "You have to be kidding! Try again!",
      },
      {
        response: "tessa",
        feedback: "You have to be kidding! Try again!",
      },
    ],
    unknownFeedback: "Who is that?! Please try again",
  },
  {
    message: "Question 2: Who is Libby's best nibling?",
    responseType: "question",
    allowedResponse: [
      {
        response: "buzz",
        feedback: "Of course - he's the best.",
      },
    ],
    otherResponse: [
      {
        response: "ella",
        feedback: "Ella's pretty cool, but not the best. Try again",
      },
      {
        response: "charlotte",
        feedback: "Charlotte's pretty cool, but not the best. Try again",
      },
      {
        response: "rogue",
        feedback: "Rogue's pretty cool, but not the best. Try again",
      },
    ],
    unknownFeedback: "Do you even know what a nibling is?! Try again…",
  },
  {
    message: "Question 3: Who is the coolest dude you know?",
    responseType: "question",
    allowedResponse: [
      {
        response: "tom",
        feedback: "That's right! (According to a survey of 1).",
      },
    ],
    otherResponse: [
      {
        response: "josh",
        feedback: "Really now? You call THAT cool?! Try again.",
      },
      {
        response: "max",
        feedback: "Really now? You call THAT cool?! Try again.",
      },
      {
        response: "eric",
        feedback: "Really now? You call THAT cool?! Try again.",
      },
    ],
    unknownFeedback: "Never heard of them, so they can't be cool. Try again.",
  },
  {
    message:
      "Ok thanks for confirming your identity. You have unlocked a recipe!",
    responseType: "statement",
  },
  {
    message: "Gemma's best-ever chocolate brownies!",
    responseType: "statement",
  },
  {
    message: "Yayyyyyy!!",
    responseType: "widget",
    widgetName: "excitedGif",
  },
  {
    message:
      "However, she's not going to just relinquish them willy-nilly, you'll have to earn them.",
    responseType: "statement",
  },
  {
    message:
      "First things first, the ingredients. For each of these, you'll need to provide me with a single number.",
    responseType: "statement",
  },
  {
    message:
      "Ingredient 1: For the first ingredient you will need four score and five grams. How many grams is that?",
    responseType: "question",
    allowedResponse: [
      {
        response: "85",
        feedback: "Yes that's correct! You need 85g plain flour.",
      },
    ],
    otherResponse: [],
    unknownFeedback: "Try again...",
  },
  {
    message:
      "Ingredient 2: Ok, for the next one, you'll need the only even prime number's worth of tablespoons. How many tablespoons will you need?",
    responseType: "question",
    allowedResponse: [
      {
        response: "2",
        feedback:
          "Perfect! It's the oddest prime number out there. You'll need 2tbsp cocoa powder.",
      },
    ],
    otherResponse: [],
    unknownFeedback: "Nope. Looks like you may be past your prime...",
  },
  {
    message:
      "Ingredient 3: For this one, you will need one more gram than the unluckiest number squared. How many grams will you need?",
    responseType: "question",
    allowedResponse: [
      {
        response: "170",
        feedback:
          "Yup! 170g of glorious milk chocolate! Dairy Milk is a good one.",
      },
    ],
    otherResponse: [
      {
        response: "169",
        feedback: "Remember, 1 more than!",
      },
      {
        response: "17",
        feedback: "In the UK, not China!",
      },
      {
        response: "65",
        feedback: "In the UK, not India!",
      },
      {
        response: "82",
        feedback: "In the UK, not Japan!",
      },
      {
        response: "443557",
        feedback: "Now you are being ridiculous!",
      },
    ],
    unknownFeedback: "Try again...",
  },
  {
    message:
      "Glad you went with the UK unlucky 13, and didn't try China, India or Japan. Or even the number of the beast!",
    responseType: "statement",
  },
  {
    message:
      "Ingredient 4: For this one, you need to get your geometry hat on. What's the (integer) diameter of the circle with radius 355?",
    responseType: "question",
    allowedResponse: [
      {
        response: "113",
        feedback: "That's the badger. 113g of butter.",
      },
    ],
    otherResponse: [],
    unknownFeedback: "Nope. Remember, the circumference is pi times d.",
  },
  {
    message:
      "Ingredient 5: Onto the next. For this, what is 10 in binary, converted to decimal?",
    responseType: "question",
    allowedResponse: [
      {
        response: "2",
        feedback: "Nice base work. You need 2 eggs!",
      },
    ],
    otherResponse: [],
    unknownFeedback:
      "Try again. Remember binary is base 2, but decimal is our normal counting system.",
  },
  {
    message:
      "Ingredient 6: Next one requires some history knowledge! What was the original character limit on Twitter?",
    responseType: "question",
    allowedResponse: [
      {
        response: "140",
        feedback:
          "Yes! It was based on text messages originally which had a 160 character limit. You need 140g caster sugar.",
      },
    ],
    otherResponse: [],
    unknownFeedback: "Try again!",
  },
  {
    message:
      "Ingredient 7: The next one is the loneliest number that you'll ever do... What is it?",
    responseType: "question",
    allowedResponse: [
      {
        response: "1",
        feedback:
          "Yes. Two can be as bad as one though! You need just 1tsp vanilla extract.",
      },
    ],
    otherResponse: [],
    unknownFeedback: "I think three dog night would disagree! Try again",
  },
  {
    message:
      "Ok, just 2 ingredients left. You need the same quantity for both, so let's do it in one go.",
    responseType: "statement",
  },
  {
    message:
      "Ingredient 8 and 9: For this one, you need to tell me the number of zeroes in a googol. How many are there?",
    responseType: "question",
    allowedResponse: [
      {
        response: "100",
        feedback: "Yes!",
      },
    ],
    otherResponse: [],
    unknownFeedback: "Not right. Perhaps... Google it?",
  },
  {
    message:
      "Did you know that a googol is such a big number, that counting tiny ions etc, there aren't even a googol particles in the universe. That's big!",
    responseType: "statement",
  },
  {
    message:
      "Anyway, your reward. So the last two ingredients, are 100g of white chocolate broken into chunks, and 100g chocolate orange, also in chunks.",
    responseType: "statement",
  },
  {
    message: "That's it! You did it! You have the ingredient list.",
    responseType: "statement",
  },
  {
    message:
      "Just to save you having to go back through it all again, the list in full is:",
    responseType: "widget",
    widgetName: "fullIngredients",
  },
  {
    message:
      "That's all you need isn't it? You got it from here surely. So I'll say bye and let you get on with the cooking!",
    responseType: "widget",
    widgetName: "godspeedGif",
  },
  {
    message:
      "No? Oh I suppose you need to know how to combine it too. Ok well I'm feeling a bit mean today, so I'm going to make you work for it again.",
    responseType: "statement",
  },
  {
    message:
      "This time, you'll have to answer some trivia questions before I give you the instructions.",
    responseType: "statement",
  },
  {
    message:
      "Question 1: What is Harry's position in the Gryffindor Quidditch team?",
    responseType: "question",
    allowedResponse: [
      {
        response: "seeker",
        feedback: "You got it - he was responsible for getting the Snitch.",
      },
    ],
    otherResponse: [
      {
        response: "beater",
        feedback: "Nice try, but not right.",
      },
      {
        response: "keeper",
        feedback: "Nice try, but not right.",
      },
      {
        response: "chaser",
        feedback: "Nice try, but not right.",
      },
    ],
    unknownFeedback: "That's not even a position!",
  },
  {
    message: "Your first step is to:",
    responseType: "statement",
  },
  {
    message:
      "1. Preheat the oven to 180C/350F. Using butter, grease a 20cmx20cm square tin and line it with baking paper.",
    responseType: "statement",
  },
  {
    message: "Ok, second question.",
    responseType: "statement",
  },
  {
    message: "Question 2: How many bones does a giraffe have in its neck?",
    responseType: "question",
    allowedResponse: [
      {
        response: "7",
        feedback: "Just like humans!",
      },
    ],
    otherResponse: [],
    unknownFeedback: "Try again!",
  },
  {
    message:
      "2. Melt the butter and milk chocolate together over a water bath. Keep on a low heat once boiling. Stir constantly and watch the chocolate carefully to make sure it doesn't burn. Take the chocolate off the heat.",
    responseType: "statement",
  },
  {
    message: "Question 3: What is the capital city of Ghana?",
    responseType: "question",
    allowedResponse: [
      {
        response: "nkran",
        feedback: "Yup! Told you I was feeling mean...",
      },
    ],
    otherResponse: [
      {
        response: "accra",
        feedback:
          "Yeah technically that's what it is in English, but what is it in Twi?",
      },
      {
        response: "ankara",
        feedback:
          "Yeah technically that's what it is in Dagbani, but what is it in Twi?",
      },
      {
        response: "ga",
        feedback:
          "Yeah technically that's what it is in Ga, but what is it in Twi?",
      },
      {
        response: "gaga",
        feedback:
          "Yeah technically that's what it is in Ga, but what is it in Twi?",
      },
    ],
    unknownFeedback: "Fancy not knowing that?!",
  },
  {
    message:
      "3. Beat in the eggs and vanilla extract to the chocolate mixture, then the sugar.",
    responseType: "statement",
  },
  { message: "Ok, nearly halfway.", responseType: "statement" },
  {
    message:
      "Question 4: In what country could you find the world's oldest University?",
    responseType: "question",
    allowedResponse: [
      {
        response: "italy",
        feedback: "That's right. It's in Bologna.",
      },
    ],
    otherResponse: [],
    unknownFeedback: "Try again!",
  },
  {
    message:
      "4. Sift in the flour and cocoa powder. Fold it into the mixture until just combined.",
    responseType: "statement",
  },
  {
    message: "And onto the fifth dimension! I mean... instruction.",
    responseType: "statement",
  },
  {
    message: "Question 5: Who plays Mulan in the 1998 animated film?",
    responseType: "question",
    allowedResponse: [
      {
        response: "ming-na wen",
        feedback: "Yes! She is pretty darn awesome.",
      },
      {
        response: "mingna wen",
        feedback: "Yes! She is pretty darn awesome.",
      },
      {
        response: "ming na wen",
        feedback: "Yes! She is pretty darn awesome.",
      },
    ],
    otherResponse: [
      {
        response: "liu yifein",
        feedback: "RTFQ... 1998 animated film!",
      },
    ],
    unknownFeedback:
      "Dishonor! Dishonor on your whole family! Dishonor on you, dishonor on your cow...",
  },
  {
    message:
      "5. Add the chocolate chunks so they are mixed through - I tend to have larger chunks i.e. just break the white chocolate at the “seams”. Don't overmix it though as the chunks can melt.",
    responseType: "statement",
  },
  {
    message: "Question 6: What “product” is Axminster best known for?",
    responseType: "question",
    allowedResponse: [
      {
        response: "carpets",
        feedback: "Woohoo! You got it.",
      },
      {
        response: "carpet",
        feedback: "Woohoo! You got it.",
      },
      {
        response: "rugs",
        feedback: "Woohoo! You got it.",
      },
      {
        response: "rug",
        feedback: "Woohoo! You got it.",
      },
    ],
    otherResponse: [],
    unknownFeedback: "No that's not right.",
  },
  {
    message:
      "6. Pour into a tin lined with grease-proof paper. Make sure it's evenly spread in the tin but don't push it down too hard.",
    responseType: "statement",
  },
  {
    message:
      "Question 7: What is Thor's hammer called? Don't worry about the accents.",
    responseType: "question",
    allowedResponse: [
      {
        response: "mjolnir",
        feedback: "Yes! Just think of THAT moment in Endgame...",
      },
    ],
    otherResponse: [],
    unknownFeedback: "Nope. Call yourself a Marvel fan...",
  },
  {
    message: "Any excuse to see it really.",
    responseType: "widget",
    widgetName: "endgameHammerGif",
  },
  {
    message:
      "7. Bake for 20-25 minutes. I like my brownies still a little gooey so I take them out just before they look completely cooked - best test is when you shake the tin they (just about) don't wobble.",
    responseType: "statement",
  },
  { message: "Ok and your last question!", responseType: "statement" },
  {
    message: "Question 8: What does Hakuna Matata mean?",
    responseType: "question",
    allowedResponse: [
      {
        response: "no worries for the rest of your days",
        feedback: "It's our problem free, philosophy!",
      },
    ],
    otherResponse: [
      {
        response: "no worries",
        feedback: "Almost...",
      },
    ],
    unknownFeedback: "Don't fall at the last!",
  },
  {
    message: "So the last, and hardest stage is...",
    responseType: "statement",
  },
  {
    message:
      "8. Cut into squares and let the brownies cool in the tin completely. Don't have them before they've cooled - it's worth the wait honestly.",
    responseType: "widget",
    widgetName: "justWaitGif",
  },
  {
    message: "Yes! You made it! You now have all the instructions.",
    responseType: "statement",
  },

  {
    message:
      "Like with the ingredients, to save you looking through them all, here's all the steps:",
    responseType: "widget",
    widgetName: "fullMethod",
  },
  {
    message:
      "That's it. The end is near. And so we face the final curtain. My friends, I'll say it clear, I'll state my case, of which I'm certain. I hope you live a life that's full, and travel each and every high way.",
    responseType: "statement",
  },
  {
    message: "And more, much more than this, I hope you do it your way.",
    responseType: "statement",
  },
  {
    message: "Good luck on your big day!",
    responseType: "widget",
    widgetName: "goodLuckGif",
  },
  {
    message: "From Gemma and Buzzard Jorjdog Pepikrankenitz (author).",
    responseType: "statement",
  },
  {
    message:
      "P.S. If you want the recipe without all this rigmarole again, then when you first visit the page, simply type “get to the chopper”, and I'll skip the quiz - but where's the fun in that! Try it now if you want...",
    responseType: "statement",
  },
];

export default responses;
