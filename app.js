
function louisComment() {
    let randomNumber = Math.ceil((Math.random()*20));
    let randomPhrase = '';
    switch (randomNumber) {
        case  1: randomPhrase = 'you forgot to do the laundry today!';
        break;
        case  2: randomPhrase = 'I can\'t believe you invited your old high school sweetheart over for dinner!';
        break;
        case  3: randomPhrase = 'why haven\'t we been having sex recently?';
        break;
        case  4: randomPhrase = 'Quagmire has been peeping through our bedroom window!';
        break;
        case  5: randomPhrase = 'Stewie hasn\'t had his diaper changed in three days!';
        break;
        case  6: randomPhrase = 'how could you watch South Park!';
        break;
        case  7: randomPhrase = 'I think I just hit menopause.';
        break;
        case  8: randomPhrase = 'it\'s four in the morning!';
        break;
        case  9: randomPhrase = 'why is there a clown in our living room?';
        break;
        case  10: randomPhrase = 'the Thanksgiving turkey is missing from the freezer!';
        break;
        case  11: randomPhrase = 'all of the Christmas ornaments went missing!';
        break;
        case  12: randomPhrase = 'we don\'t have any fireworks to celebrate Independence Day.';
        break;
        case  13: randomPhrase = 'drive Chris to his baseball tryout.';
        break;
        case  14: randomPhrase = 'Meg is crying in her bedroom.';
        break;
        case  15: randomPhrase = 'I\'m tired can you make dinner tonight?';
        break;
        case  16: randomPhrase = 'why did you buy a horse without asking me first?';
        break;
        case  17: randomPhrase = 'how did all of these ants get in the kitchen?';
        break;
        case  18: randomPhrase = 'you never ask me before you make a serious life altering decision.';
        break;
        case  19: randomPhrase = 'do you still love me?';
        break;
        case  20: randomPhrase = 'when is our show gonna get pulled off the air?';
        break;
    }
    return(`Peeeeeter, ${randomPhrase}`);
/*
this is where Louis's comment will be formed.
*/
}

function peterStory() {
    /*
    this is where Peter's irrelevant story will be formed.
    a better version could accept the last words from Louis's comment as a parameter.
    */
    let randomOneToFive = Math.ceil((Math.random()*5));
    let randomOneToThirty = Math.ceil((Math.random()*30));
    let randomOneToForty = Math.ceil((Math.random()*40));
    let randomOneToFifty = Math.ceil((Math.random()*50));
    let introPhrase = '';
    let startOfStory = 'I ate popcorn';
    let middleOfStory = '';
    let endOfStory = '';

    switch (randomOneToFive) {
    case  1: introPhrase = 'You think THAT\'s bad? Remember the time';
    break;
    case  2: introPhrase = 'You think THAT\'s bad? Remember when';
    break;
    case  3: introPhrase = 'You think THAT\'s bad? Remember the time';
    break;
    case  4: introPhrase = 'Like when';
    break;
    case  5: introPhrase = 'Like that time';
    break;
    }

    switch (randomOneToThirty) {
    case  1: startOfStory = 'I interrogated';
    break;
    case  2: startOfStory = 'I ate';
    break;
    case  3: startOfStory = 'I slept with';
    break;
    case  4: startOfStory = 'I fought';
    break;
    case  5: startOfStory = 'I ran into';
    break;
    case  6: startOfStory = 'I got attacked by';
    break;
    case  7: startOfStory = 'I filmed a movie about';
    break;
    case  8: startOfStory = 'I went Christmas caroling with';
    break;
    case  9: startOfStory = 'I turned into';
    break;
    case  10: startOfStory = 'I thought you were';
    break;
    case  11: startOfStory = 'I tried to be';
    break;
    case  12: startOfStory = 'I thought I was';
    break;
    case  13: startOfStory = 'I wanted to buy';
    break;
    case  14: startOfStory = 'we invested in';
    break;
    case  15: startOfStory = 'I threw up on';
    break;
    case  16: startOfStory = 'I showered with';
    break;
    case  17: startOfStory = 'I was in a sauna with';
    break;
    case  18: startOfStory = 'I went travelling with';
    break;
    case  19: startOfStory = 'I turned water into';
    break;
    case  20: startOfStory = 'I ran from';
    break;
    case  21: startOfStory = 'I slowly placed my hand on';
    break;
    case  22: startOfStory = 'I had a duel with';
    break;
    case  23: startOfStory = 'My Halloween costume was';
    break;
    case  24: startOfStory = 'Meg brought home';
    break;
    case  25: startOfStory = 'Chris ate';
    break;
    case  26: startOfStory = 'Stewie thought he was';
    break;
    case  27: startOfStory = 'Quagmire had sex with';
    break;
    case  28: startOfStory = 'Cleveland ran from';
    break;
    case  29: startOfStory = 'Joe arrested';
    break;
    case  30: startOfStory = 'I made an irrelevant reference about';
    break;
}

switch (randomOneToFifty) {
    case  1: middleOfStory = 'a supercar';
    break;
    case  2: middleOfStory = 'a whole bag of popcorn';
    break;
    case  3: middleOfStory = 'every living descendent of Atilla the Hun';
    break;
    case  4: middleOfStory = 'a homeless veteran';
    break;
    case  5: middleOfStory = 'our neighbor’s ex-wife';
    break;
    case  6: middleOfStory = 'a searing hot steak';
    break;
    case  7: middleOfStory = 'an ice cream sundae';
    break;
    case  8: middleOfStory = 'a grand piano';
    break;
    case  9: middleOfStory = 'a large pen';
    break;
    case  10: middleOfStory = 'the last Jolly Rancher';
    break;
    case  11: middleOfStory = 'the newest iPhone';
    break;
    case  12: middleOfStory = 'James Bond';
    break;
    case  13: middleOfStory = 'Mickey Mouse';
    break;
    case  14: middleOfStory = 'George Clooney';
    break;
    case  15: middleOfStory = 'Mel Gibson';
    break;
    case  16: middleOfStory = 'Stephen King';
    break;
    case  17: middleOfStory = 'Shakira';
    break;
    case  18: middleOfStory = 'Ronald Reagan';
    break;
    case  19: middleOfStory = 'Hugh Hefner';
    break;
    case  20: middleOfStory = 'Tom Brady';
    break;
    case  21: middleOfStory = 'Lady Gaga';
    break;
    case  22: middleOfStory = 'Indiana Jones';
    break;
    case  23: middleOfStory = 'Chewbacca';
    break;
    case  24: middleOfStory = 'that chick from The Ring';
    break;
    case  25: middleOfStory = 'a manatee';
    break;
    case  26: middleOfStory = 'Bugs Bunny';
    break;
    case  27: middleOfStory = 'Snoop Dog';
    break;
    case  28: middleOfStory = 'Tupac';
    break;
    case  29: middleOfStory = 'Betty White';
    break;
    case  30: middleOfStory = 'Sandra Bullock';
    break;
    case  31: middleOfStory = 'Keanu Reeves';
    break;
    case  32: middleOfStory = 'Will Smith';
    break;
    case  33: middleOfStory = 'Marilyn Monroe';
    break;
    case  34: middleOfStory = 'Charlie Sheen';
    break;
    case  35: middleOfStory = 'Emma Stone';
    break;
    case  36: middleOfStory = 'Angelina Jolie';
    break;
    case  37: middleOfStory = 'Anne Hathaway';
    break;
    case  38: middleOfStory = 'Guy Fieri';
    break;
    case  39: middleOfStory = 'Mario and Luigi';
    break;
    case  40: middleOfStory = 'a Korean pop star';
    break;
    case  41: middleOfStory = 'a flyswatter';
    break;
    case  42: middleOfStory = 'a blank canvas';
    break;
    case  43: middleOfStory = 'Cleveland\'s bathtub';
    break;
    case  44: middleOfStory = 'Joe\'s wheelchair';
    break;
    case  45: middleOfStory = 'a salt shaker';
    break;
    case  46: middleOfStory = 'a beekeeper';
    break;
    case  47: middleOfStory = 'the dark side of the moon';
    break;
    case  48: middleOfStory = 'a bunch of nickels';
    break;
    case  49: middleOfStory = 'a key lime pie';
    break;
    case  50: middleOfStory = 'a Power Ranger';
    break;
}

switch (randomOneToForty) {
    case  1: endOfStory = ' in Egypt';
    break;
    case  2: endOfStory = ' in space';
    break;
    case  3: endOfStory = ' for $500';
    break;
    case  4: endOfStory = ' because of a dare';
    break;
    case  5: endOfStory = ' in the dark';
    break;
    case  6: endOfStory = ' on my birthday';
    break;
    case  7: endOfStory = ' to win your love';
    break;
    case  8: endOfStory = ' outside';
    break;
    case  9: endOfStory = ' on New Year\'s Day';
    break;
    case  10: endOfStory = ' in Mexico';
    break;
    case  11: endOfStory = ' without consent';
    break;
    case  12: endOfStory = ' to forget the pain';
    break;
    case  13: endOfStory = ' on live TV';
    break;
    case  14: endOfStory = ' for 3 hours';
    break;
    case  15: endOfStory = ' for $5';
    break;
    case  16: endOfStory = ' to look cool';
    break;
    case  17: endOfStory = ' in black face';
    break;
    case  18: endOfStory = ' three days in a row';
    break;
    case  19: endOfStory = ' in Ohio';
    break;
    case  20: endOfStory = ' and wrote a book about it';
    break;
    case  21: endOfStory = '';
    break;
    case  22: endOfStory = '';
    break;
    case  23: endOfStory = '';
    break;
    case  24: endOfStory = '';
    break;
    case  25: endOfStory = '';
    break;
    case  26: endOfStory = '';
    break;
    case  27: endOfStory = '';
    break;
    case  28: endOfStory = '';
    break;
    case  29: endOfStory = '';
    break;
    case  30: endOfStory = '';
    break;
    case  31: endOfStory = '';
    break;
    case  32: endOfStory = '';
    break;
    case  33: endOfStory = '';
    break;
    case  34: endOfStory = '';
    break;
    case  35: endOfStory = '';
    break;
    case  36: endOfStory = '';
    break;
    case  37: endOfStory = '';
    break;
    case  38: endOfStory = '';
    break;
    case  39: endOfStory = '';
    break;
    case  40: endOfStory = '';
    break;
}

return(`${introPhrase} ${startOfStory} ${middleOfStory}${endOfStory}?`);
}

function familyGuyScript() {
    document.getElementById('newQuoteSection').innerHTML = (`Louis: ${louisComment()} \n\nPeter: ${peterStory()} 
    \n\n\n\n ...Damn, I didn't think you had it in you, kid. This is a killer joke—you've got stuff! 
    Why don't we share this with the real Family Guy creators? Click below to Tweet @ them!`);
/*
this is where the final script will go.
it will include Louis's comment as well
as Peter's irrelevant story.
*/
}
