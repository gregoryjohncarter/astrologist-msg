var masterArray = [ {  
    presence: "you are ready to react to what is facing you intuitively",
    determination: "you keep going despite any setbacks that have been encountered",
    tranquility: "you are navigating your path with a grasp on stability"
}, 
{
    presence: "you are focused and quick to formulate an answer to a problem",
    determination: "you are in a rhythm and are establishing a flow that guides your hand steadily",
    tranquility: "you have a sense of alertness which gratifies your scope on issues"
}, 
{
     presence: "you are sensitive to your own judgements and feel confident in interpreting them",
     determination: "you will be reflective on how the days trials affect you and let it decide the best course",
     tranquility: "you have something to offer each task or interaction, and that something matches your resilient attitude"
},
{
    presence: "you are careful to impart your decision making without due consideration",
    determination: "you will abide by a reliable sense of right and wrong in due time",
    tranquility: "you will linger on perceptions which are decidedly neutral until something stands out" 
}
]

var wiseArray = {
    significantPast: ["earlier meal", "exercise from today", "interactions with others", "your itenerary today", "being regarded by others"],
    significantFuture: ["a significant message from elsewhere later on", "a success of your intuition later today", "receiving a mixed message at some point", "allowing judgement to pass on your day's goals", "spending time reaching out to another in spirit"],
    starSign: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck']
};

function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

let yourWisdom = [];

for (let wiseForecast in wiseArray) {
    let index = generateRandomNumber(wiseArray[wiseForecast].length);
    switch (wiseForecast) {
        case 'significantPast': yourWisdom.push(`It is significant that you have had "${wiseArray[wiseForecast][index]}" happen.`);
        break;
        case 'significantFuture': yourWisdom.push(`Today might entail something like "${wiseArray[wiseForecast][index]}".`);
        break;
        case 'starSign': yourWisdom.push(`Your star sign is "${wiseArray[wiseForecast][index]}".`);
        break;
        case 'fortuneOutput': yourWisdom.push(`Your fortune is "${wiseArray[wiseForecast][index]}".`);
        break;
        default: yourWisdom.push(`There is not enough info`);
    }
}

function formatWisdom(wisdom, masterArr) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = yourWisdom.join('\n')
    console.log(formatted);

    let index2 = generateRandomNumber(masterArray.length);
    console.log("presence: " + masterArray[index2].presence);
    console.log("determination: " + masterArray[index2].determination);
    console.log("tranquility: " + masterArray[index2].tranquility);
  }

  formatWisdom(yourWisdom, masterArray);