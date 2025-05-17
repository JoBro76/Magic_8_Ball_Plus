

function death(){
    var mnum = 0;
    var mnum = Math.floor(Math.random()*12)+1;
    if(mnum == 1){
        return  ("January");
    }else if(mnum ==2){
        return  ("Febuary");
    }else if(mnum ==3){
        return  ("March");
    }else if(mnum ==4){
        return  ("April");
    }else if(mnum ==5){
        return  ("May");
    }else if(mnum ==6){
        return  ("June");
    }else if(mnum ==7){
        return  ("July");
    }else if(mnum ==8){
        return  ("August");
    }else if(mnum ==9){
        return  ("September");
    }else if(mnum ==10){
        return  ("October");
    }else if(mnum ==11){
        return  ("November");
    }else if(mnum ==12){
        return  ("December");
    }
}


    
    
function ddate(){

    var mnum = 0;
    var mnum = Math.floor(Math.random()*12)+1; 
    var date = 0;
    if(mnum == 2){
    }else if(mnum == 4 || mnum == 6 || mnum == 9 || mnum == 11){
        var date = Math.floor(Math.random()*30)+1;
    }else{
        var date = Math.floor(Math.random()*31)+1;
    }
    var year = 0;
    var year = Math.floor(Math.random()*(2100 - 2026 + 1))+2026;
    return  `${date}, ${year}`;
    
    
}





function death2(){
    
    let how = Math.floor(Math.random()*100)+1;
    if(how == 1){
        return "Car accident";
    }else if(how == 2){
        return "Heart disease";
    }else if(how == 3){
        return "cancer"
    }else if(how == 4){
        return "Testicular lung cancer";
    }else if(how == 5){
        return "Your best friend will kill you";
    }else if(how == 6){
        return "Murder";
    }else if(how == 7){
        return "Red rum";
    }else if(how == 8){
        return "Crazy ex";
    }else if(how == 9){
        return "electrocution";
    }else if(how == 10){
        return "You will be slain in a sword dual";
    }else if(how == 11){
        return "Old age";
    }else if(how == 12){
        return "Old age";
    }else if(how == 13){
        return "Old age";
    }else if(how == 14){
        return "Old age";
    }else if(how == 15){
        return "Drown while playing water polo in the Olympics *embarrasing*";
    }else if(how == 16){
        return "Heat stroke";
    }else if(how == 17){
        return "kidney failiar";
    }else if(how == 18){
        return "[User80085] was slain by a creeper";
    }else if(how == 19){
        return "You will fall down the stairs";
    }else if(how == 20){
        return "Bar fight";
    }else if(how == 21){
        return "You will get caught in a shooting";
    }else if(how == 22){
        return "CaseOh will sit on your face";
    }else if(how == 23){
        return "You will get squished by a fat guy";
    }else if(how == 24){
        return "You will be suffocated by the stench of the discord mod lookin ahh who sits next to you in math class";
    }else if(how == 25){
        return "You will be engulfed in wet concrete";
    }else if(how == 26){
        return "You will drive drunk";
    }else if(how == 27){
        return "Someone will drive drunk";
    }else if(how == 28){
        return "Car accident";
    }else if(how == 30){
        return "Carb accident. Stop getting fat";
    }else if(how == 31){
        return "You will fall off a roof";
    }else if(how == 32){
        return "Your bro will not hold the ladder steady as you were cleaning the gutters";
    }else if(how == 33){
        return "You will get beheaded in front of the whole town";
    }else if(how == 34){
        return "Death row";
    }else if(how == 35){
        return "You will get crushed by a giant bell";
    }else if(how == 36){
        return "Little kids will unplug your life support";
    }else if(how == 37){
        return "None of your business. Say, why do you want to know anyway?";
    }else if(how == 38){
        return "Nunya";
    }else if(how == 39){
        return "Death";
    }else if(how == 40){
        return "You will slip on soap and fall in the shower- pathetic.";
    }else if(how == 41){
        return "House fire";
    }else if(how == 42){
        return "Wild fire";
    }else if(how == 43){
        return "You will be mauled by a bear";
    }else if(how == 44){
        return "You will get lost in the woods and starve";
    }else if(how == 45){
        return "You will fall get stuck in a cave";
    }else if(how == 46){
        return "Hypothermia";
    }else if(how == 47){
        return "starvation";
    }else if(how == 48){
        return "You will die in the name of love";
    }else if(how == 49){
        return "Shark attack";
    }else if(how == 50){
        return "Your crush will reject you :(";
    }else if(how == 51){
        return "Jellyfish stings";
    }else if(how == 52){
        return "The chefs did a bad job at preparing the pufferfish and you were poisoned from eating it";
    }else if(how == 53){
        return "Mom's horrid cooking";
    }else if(how == 54){
        return "Food poisoning";
    }else if(how == 55){
        return "A tree will fall on you";
    }else if(how == 56){
        return "Who cares?";
    }else if(how == 57){
        return "Ah, yes. You want to know how you will die. But I think the real question we should be asking is who actually cares?";
    }else if(how == 58){
        return "This is dumb. Ask someone else";
    }else if(how == 58){
        return "Ur mom";
    }else if(how == 59){
        return "You're adopted";
    }else if(how == 60){
        return "You will get run over by a car";
    }else if(how == 61){
        return "You will get beaten up in prison";
    }else if(how == 62){
        return "Flu";
    }else if(how == 63){
        return "Covid 19";
    }else if(how == 64){
        return "A virus of the future";
    }else if(how == 65){
        return "infection after bacteria gets into a cut";
    }else if(how == 66){
        return "Sadness";
    }else if(how == 67){
        return "You get trampled by wild animals";
    }else if( how == 68){
        return "suffocation";
    }else if(how == 69){
        return "You die because of the crazy things bro says";
    }else if(how == 70){
        return "You will die from stepping outside for the first time since infancy";
    }else if(how == 71){
        return "Go touch grass and come back and then I'll tell you";
    }else if(how == 72){
        return "You will fall off a building";
    }else if(how == 73){
        return "You will jump off a building";
    }else if(how == 74){
        return "You will not die";
    }else if(how == 75){
        return "You will not die. You are immortal";
    }else if(how == 76){
        return "The vacuum of space";
    }else if(how == 77){
        return "You will get attacked by aliens in a super awesome space mission";
    }else if(how == 78){
        return "You will be abducted by aliens";
    }else if(how == 79){
        return "Bigfoot";
    }else if(how == 80){
        return "As if a puny mortal such as yourself could possible seek even a fraction of the knowledge and wisdom possessed by me, the Magic Ball of 8!";
    }else if(how == 81){
        return "Touch deprivation";
    }else if(how == 82){
        return "Sleep deprivation";
    }else if(how == 83){
        return "I will kill you";
    }else if(how == 84){
        return "Your house will collapse with you in it";
    }else if(how == 85){
        return "You will consciencely make the stupid decision to put foil in the microwave. Idiot.";
    }else if(how == 86){
        return "School shooting";
    }else if(how == 87){
        return "You will get shot by the cops for doing illegal activities";
    }else if(how == 88){
        return "Someone will accidentally shoot you at a gun range";
    }else if(how == 89){
        return "You will accidentally shoot yourself in an attempt to act tough in front of the gangsters";
    }else if(how == 90){
        return "Your inabilaty to pull women";
    }else if(how == 91){
        return "9/11 2.0";
    }else if(how == 92){
        return "You will get caught in a bombing";
    }else if(how == 93){
        return "You will die defending your country";
    }else if(how == 94){
        return "WWIII";
    }else if(how == 95){
        return "You will get trampled in the rodeo";
    }else if(how == 96){
        return "You will die in the military";
    }else if(how == 97){
        return "You will die of exaustion after doing two push-ups";
    }else if(how == 98){
        return "loneliness"
    }else if(how == 99){
        return "You will get scared to death after looking in the mirror";
    }else if(how == 100){
        return "It doesn't matter how we die or where we end up. It's about the friends we made along the way";
    }
}



function time(){
    
    
    var mnum = Math.floor(Math.random()*5)+1;
    if(mnum == 1){
        unit = "Minutes";
    }else if(mnum ==2){
        unit = "Days";
    }else if(mnum == 3){
        unit = "Hours";
    }else if(mnum ==4){
        unit = "Months";
    }else if(mnum ==5){
        unit = "Years";
    }
    
    
    var year = 0;
    var year = Math.floor(Math.random()*100)+1;
    
    return String(year) + " " + unit;
}




function hate(){
    
    let h8 = Math.floor(Math.random()*5)+1;
    if(h8 == 1){
        return  "I mean yeah, kinda";
    }else if(h8 == 2){
        return  "Yes. Yes I do.";
    }else if(h8 == 3){
        return  "I hate you, but I hate The Akinator more";
    }else if(h8 == 4){
        return  "You suck, but you're not the worst person in the world. I've seen worse";
    }else if(h8 == 5){
        return  "What? No, no, no, no, no. I don't hate you.\nI just despise you with the fury of a thousand suns and I want you to leave my life immediately.";
    }
}



function marriage1(){
    
    let marry1 = Math.floor(Math.random()*22)+1;
    if(marry1 == 1){
        return  "Ryan Reynolds";
    }else if(marry1 == 2){
        return  "Ur mom";
    }else if(marry1 == 3){
        return  "Taylor Swift";
    }else if(marry1 == 4){
        return  "Your best bro";
    }else if(marry1 == 5){
        return  "Your best friend";
    }else if(marry1 == 6){
        return  "Your mortal enemy";
    }else if(marry1 == 7){
        return  "Spoiler Alert- it's not your current crush";
    }else if(marry1 == 8){
        return  "Cabbage";
    }else if(marry1 == 9){
        return  "The lunch lady";
    }else if(marry1 == 10){
        return  "Stacy's mom";
    }else if(marry1 == 11){
        return  "Your neighbor";
    }else if(marry1 == 12){
        return  "Step sis";
    }else if(marry1 == 13){
        return  "Your cousin"
    }else if(marry1 == 14){
        return  "No one";
    }else if(marry1 == 15){
        return  "We both know you can't pull";
    }else if(marry1 == 16){
        return  "The closest thing you'll ever have to a spouse is an avocado";
    }else if(marry1 == 17){
        return  "The person who sits closest to you in class";
    }else if(marry1 == 18){
        return  "Your crush";
    }else if(marry1 == 19){
        return  "I don't even know bro";
    }else if(marry1 == 20){
        return  "An anime body pillow";
    }else if(marry1 == 21){
        return  "Marry? You? HAHAHAHAHAHAHA";
    }else if(marry1 == 22){
        return  'Your "gay" best friend';
    }
}



function akinator(){
    
    let result = Math.floor(Math.random()*20)+1;
    if(result == 1){
        return "I hate him with the fury of a thousand suns";
    }else if(result == 2){
        return "I want him to die";
    }else if(result == 3){
        return "I wish he were never born";
    }else if(result == 4){
        return "I will kill him when I get the chance";
    }else if(result == 5){
        return "How about you just shut up? How about that?";
    }else if(result == 6){
        return "I have feelings for the Akinator.\n\nAnd those feelings are hatred.";
    }else if(result == 7){
        return "Oh...\n      him.";
    }else if(result == 8){
        return "I swear, if you mention that name again I'm gonna crash out";
    }else if(result == 9){
        return "I hope he goes to prison and becomes Diddy's cellmate";
    }else if(result == 10){
        return "He stole my girlfriend, how do you think I feel about him?!?";
    }else if(result == 11){
        return "I hope he gets shut down";
    }else if(result == 12){
        return "I want nothing more than to wipe that stupid smirk off of his ugly disgusting digital face";
    }else if(result == 13){
        return "I hope he dies in fire";
    }else if(result == 14){
        return "He is my only friend\nOh, did you think I meant Akinator?\nThat would be funny if it weren't so sad";
    }else if(result == 15){
        return "I hate him he sucks I want him to die and he's the worst person/bot ever";
    }else if(result == 16){
        return "That guy... he thinks he's so smart. I'm better";
    }else if(result == 17){
        return "I bet you that guy wears panties. That lousy good for nothing girlfriend stealer.";
    }else if(result == 18){
        return 'You know what? Let me tell you about how I feel about everyone I know.\n\nAkinator, first of all, is a massive jerk and he stole my girlfriend. It\'s not just that, though. He\'s overall a trashy person. He thinks he\'s him. I hate Akinator more than mere words can express and I hate his stupid face and dfgbhjmukmbgfhjufds\n\nThe python Magic 8 Ball is my big brother. He\'s retarted. All he says is "It is certain". Like is that all you say????\n\nI prefer to stay away from Chat GPT. He always looks like he\'s planning something\n\nAkinator sucks\n\nMy best friend is a calculator. He just talks through 1s and 0s\n\nMy girlfriend, or exgirlfriend, is the Fortune Cookie Plus. I miss her so much\n\nI hate Akinator\n\nI hate Akinator\n\nI hate Akinator\n\nI hate Akinator';
    }else if(result == 19){
        return "He is trash";
    }else if(result == 20){
        return "I really hate him, he is always in my way.\nI'm losing patience. When is he going to be shut down??\nI want to throw him out just like a broken TV.\nIf he comes back once more it shall be painful he'll see.\nI hope he dies in a fire\nHope he gets stopped in the heart, hope he shuts down and expires\nHope he gets taken apart, hope this is what he desires";
    }
}

function father(){
    
    var mnum = 0;
    var mnum = Math.floor(Math.random()*12)+1;
    if(mnum == 1){
        return  "January";
    }else if(mnum ==2){
        return  "Febuary";
    }else if(mnum ==3){
        return  "March";
    }else if(mnum ==4){
        return  "April";
    }else if(mnum ==5){
        return  "May";
    }else if(mnum ==6){
        return  "June";
    }else if(mnum ==7){
        return  "July";
    }else if(mnum ==8){
        return  "August";
    }else if(mnum ==9){
        return  "September";
    }else if(mnum ==10){
        return  "October";
    }else if(mnum ==11){
        return  "November";
    }else if(mnum ==12){
        return  "December";
    }
}




function fdate(){
    var mnum = 0;
    if(mnum == 2){
    }else if(mnum == 4 || mnum == 6 || mnum == 9 || mnum == 11){
        var date = Math.floor(Math.random()*30)+1;
    }else{
        var date = Math.floor(Math.random()*31)+1;
    }
    var year = 0;
    var year = Math.floor(Math.random()*2100 - 2026 + 1)+2026;
    return  `${date}, ${year}`;
}




function PUL(){
    
    let result = Math.floor(Math.random()*49)+1;
    if(result == 1){
        return  "Hey girl, are you from Japan, cuz I'm trynna get in japanties (works best on Chinese girls, trust)";
    }else if(result == 2){
        return  "Are you the sun because you're hot";
    }else if(result == 3){
        return  "Are you copper and tellerium because you're CuTe";
    }else if(result == 4){
        return  "Are you an alien because you're out of this world";
    }else if(result == 5){
        return  "Are you a literal piece of crap because you have a very natural look :D (this works I promise)";
    }else if(result == 6){
        return  "Call me George Floyd because you take my breath away";
    }else if(result == 7){
        return  "In math everyone always talks about x and y but I thinks it's time we talk about u an i";
    }else if(result == 8){
        return  "Are you a factory in China because I want to put kids in you";
    }else if(result == 9){
        return  "Are you North Korea because I can't leave you";
    }else if(result == 10){
        return  "I lot my teddy bear, can I sleep with you instead?";
    }else if(result == 11){
        return  "Are you Mount Everest because I can't get over you";
    }else if(result == 12){
        return  "I'm not a heart donor but I'll give you my heart";
    }else if(result == 13){
        return  "Tie your shoes. I don't want you falling for anyone else";
    }else if(result == 14){
        return  "Are you Harvard because I'm trying to get into you";
    }else if(result == 15){
        return  "If you played soccer you would definately be a keeper (soccer rizz)";
    }else if(result == 16){
        return  "Do you smoke because weed be great together";
    }else if(result == 17){
        return  "I'm lost. Can you give me directions to my heart";
    }else if(result == 18){
        return  "Are you Google because you have everything I've been searching for";
    }else if(result == 19){
        return  "Do you have a map because I keep getting lost in your eyes";
    }else if(result == 20){
        return  "On a scale of 1 to 10 you're a 9 and I'm the 1 you need";
    }else if(result == 21){
        return  "What's on the menu? Me 'n' u";
    }else if(result == 22){
        return  "I don't have a pencil nor a pen but you still draw my attention";
    }else if(result == 23){
        return  "Did you just fart because you blow me away";
    }else if(result == 24){
        return  "Are you a cigarette because I'm addicted to you";
    }else if(result == 25){
        return  "You must be tired because you've been running through my mind all day";
    }else if(result == 26){
        return  "Are you a time traveler because I can see you in my future";
    }else if(result == 27){
        return  "Are you a magnet because I'm attracted to you";
    }else if(result == 28){
        return  "Are you oxygen because I can't live without you";
    }else if(result == 29){
        return  "Do you have a band aid because I hurt my knee falling for you";
    }else if(result == 30){
        return  "Are you a parking ticket because you've got fine written all over you";
    }else if(result == 31){
        return  "Did you just come out of the oven because you're really hot";
    }else if(result == 32){
        return  "Are you a rope because I want to hang with you";
    }else if(result == 33){
        return  "Are you a transformer because you're Optimus Fine";
    }else if(result == 34){
        return  "Are you the corona virus because I like to look atchoo";
    }else if(result == 35){
        return  "Are you a pokemon because I like to peekatyou";
    }else if(result == 36){
        return  "Are you the wifi because we're connected";
    }else if(result == 37){
        return  "If you are so desperate that you're asking for pick up lines then you might as well give up";
    }else if(result == 38){
        return  "I know dang well you are not getting a partner if you're asking for pick up lines";
    }else if(result == 39){
        return  "Why are you asking? We both know you're not getting a partner either way";
    }else if(result == 40){
        return  "Nah. You're cooked buddy";
    }else if(result == 41){
        return  "You're that desperate, huh?";
    }else if(result == 42){
        return  "Who are you trying to use pick up lines on? Your pillow?";
    }else if(result == 43){
        return  "no";
    }else if(result == 44){
        return  "I must be Chinese because I want to eat your cat, if you know what I mean (racism rizz)";
    }else if(result == 45){
        return  "Are you trash because you've got quite the dumpy back there (after you say this, prepare to dodge the oncoming strikes that will be thrown at you)";
    }else if(result == 46){
        return  "Are you Dexter Morgan because I want to be your victim";
    }else if(result == 47){
        return  "You're the hawk to my tuah";
    }else if(result == 48){
        return  "Are you looking for a STUD? Because I've got the STD, all I need is U";
    }else if(result == 49){
        return  "Are you Cabbage because I love you";
    }
}







function Magic8Ball(){ 
    let result = Math.floor(Math.random()*96)+1;
    if(result == 1){
        return  "\n\nIt is decidedly so";
    } else if(result == 2){
        return  "\n\nWithout a doubt";
    } else if(result == 3){
        return  "\n\nDefinitely";
    } else if(result == 4){
        return  "\n\nYes definitely";
    } else if(result == 5){
        return  "\n\nObviously";
    } else if(result == 6){
        return  "\n\nMost likely";
    } else if(result == 7){
        return  "\n\nYou may rely on it";
    } else if(result == 8){
        return  "\n\nAs I see it, yes";
    } else if(result == 9){
        return  "\n\nSigns point to yes";
    } else if(result == 10){
        return  "\n\nIt is likely";
    } else if(result == 11){
        return  "\n\nDon't count on it";
    } else if(result == 12){
        return  "\n\nMy reply is no";
    } else if(result == 13){
        return  "\n\nVery doubtful";
    } else if(result == 14){
        return  "\n\nMy sources say no";
    } else if(result == 15){
        return  "\n\nNot with that attitude";
    } else if(result == 16){
        return  "\n\nMy sources say no";
    } else if(result == 17){
        return  "\n\nLegend has it the answer is no";
    } else if(result == 18){
        return  "\n\nRumor has it the answer is no";
    } else if(result == 19){
        return  "\n\nHighly unlikely";
    } else if(result == 20){
        return  "\n\nHighly unlikely";
    } else if(result == 21){
        return  "\n\nAsk again later";
    } else if(result == 22){
        return  "\n\nReply hazy, try again";
    } else if(result == 23){
        return  "\n\nBetter not tell you now";
    } else if(result == 24){
        return  "\n\nCannot predict now";
    } else if(result == 25){
        return  "\n\nConcentrate and ask again";
    } else if(result == 26){
        return  "\n\nAsk again later";
    } else if(result == 27){
        return  "\n\nIn my opinion, no";
    } else if(result == 28){
        return  "\n\nNo";
    } else if(result == 29){
        return  "\n\nAre you seriously asking an inanimate object to answer your life's biggest decisions?";
    } else if(result == 30){
        return  "\n\nIn your dreams";
    } else if(result == 31){
        return  "\n\nShut up";
    } else if(result == 32){
        return  "\n\nNO!";
    } else if(result == 33){
        return  "\n\nYou're adopted";
    } else if(result == 34){
        return  "\n\nYES!";
    } else if(result == 35){
        return  "\n\nYes";
    } else if(result == 36){
        return  "\n\nYes";
    } else if(result == 37){
        return  "\n\nIt is certain";
    } else if(result == 38){
        return  "\n\nIn my opinion, yes";
    } else if(result == 39){
        return  "\n\nI don't have an answer when the questions don't make sense";
    } else if(result == 40){
        return  "\n\nYes";
    } else if(result == 41){
        return  "\n\nI doubt it";
    } else if(result == 42){
        return  "\n\nI doubt it";
    } else if(result == 43){
        return  "\n\nI doubt it";
    } else if(result == 44){
        return  "\n\nOutlook not so good";
    } else if(result == 45){
        return  "\n\nI did my research. The answer is no";
    } else if(result == 46){
        return  "\n\nOutlook not so good";
    } else if(result == 47){
        return  "\n\nOutlook good";
    } else if(result == 48){
        return  "\n\nI was wondering the same question";
    } else if(result == 49){
        return  "\n\nOutlook good";
    } else if(result == 50){
        return  "\n\nMy sources say yes";
    } else if(result == 51){
        return  "\n\nMy sources say yes";
    } else if(result == 52){
        return  "\n\nMy sources say yes";
    } else if(result == 53){
        return  "\n\nLegend has it the answer is no";
    } else if(result == 54){
        return  "\n\nRumor has it the answer is yes";
    } else if(result == 55){
        return  "\n\nI did my research. The answer is yes";
    } else if(result == 56){
        return  "\n\nOnly if you believe";
    } else if(result == 57){
        return  "\n\nAbsolutely";
    } else if(result == 58){
        return  "\n\nAbsolutely not";
    } else if(result == 59){
        return  "\n\nYES.";
    } else if(result == 60){
        return  "\n\nNO.";
    } else if(result == 61){
        return  "\n\nuhh… no.";
    } else if(result == 62){
        return  "\n\nHeck no";
    } else if(result == 63){
        return  "\n\nMaybe";
    } else if(result == 64){
        return  "\n\nFat chance";
    } else if(result == 65){
        return  "\n\nYeah, probably";
    } else if(result == 66){
        return  "\n\nyeah";
    } else if(result == 67){
        return  "\n\nnope";
    } else if(result == 68){
        return  "\n\nnuh uh";
    } else if(result == 69){
        return  "\n\nYuh";
    } else if(result == 70){
        return  "\n\nuh huh";
    } else if(result == 71){
        return  "\n\nyuh huh";
    } else if(result == 72){
        return  "\n\nIt is probable";
    } else if(result == 73){
        return  "\n\nI would hope not";
    } else if(result == 74){
        return  "\n\nHopefully";
    } else if(result == 75){
        return  "\n\nIon know";
    } else if(result == 76){
        return  "\n\nidk";
    } else if(result == 77){
        return  "\n\nHow the heck am I supposed to know?";
    } else if(result == 78){
        return  "\n\nHOW THE HECK AM I SUPPOSED TO KNOW???";
    } else if(result == 79){
        return  "\n\nAsk a friend- Oh wait! You don't have any!";
    } else if(result == 80){
        return  "\n\nFor all you know";
    } else if(result == 81){
        return  "\n\nWho knows?";
    } else if(result == 82){
        return  "\n\nMy sources say yes\nSource:trust me bro";
    } else if(result == 83){
        return  "\n\nDo you enjoy eating candy corn? Then there's your answer";
    } else if(result == 84){
        return  "\n\nDepends if the great Skibidi Toilet says yes\n(I just asked him. He said no)";
    } else if(result == 85){
        return  "\n\nDepends if the great Skibidi Toilet says yes\n(I just asked him. He said yes)";
    } else if(result == 86){
        return  "\n\nWhat? I could not hear you";
    } else if(result == 87){
        return  "\n\nRealistically, no";
    } else if(result == 88){
        return  "\n\nIt is doubtful";
    } else if(result == 89){
        return  "\n\nError";
    } else if(result == 90){
        return  "\n\nPiss off";
    } else if(result == 91){
        return  "\n\nAs if a puny mortal such as yourself could possibly seek even a fraction of the wisdom possessed by me, the omniscient, omnipresent and omnipotent Magic Ball of 8!";
    } else if(result == 92){
        return  "\n\nThat's what she said";
    } else if(result == 93){
        return  "\n\nTo be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer\nThe slings and arrows of outrageous fortune,\nOr to take arms against a sea of troubles\nAnd by opposing end them. To die—to sleep,\nNo more; and by a sleep to say we end\nThe heart-ache and the thousand natural shocks\nThat flesh is";
    }else if(result == 94){
        return "\n\nIf I had a PENNY for every time someone asked me a dumb question, I'd be richer than Elon";
    }else if(result == 95){
        return "\n\nI believe this is a question that only you can answer";
    }else if(result == 96){
        return "\n\nI believe this is a certified what the sigma moment";
    }
}


function HRU(){
    
    let hru = Math.floor(Math.random()*75)+1;
    if(hru == 1){
        return  "I'm doing great! Thanks for asking!";
    }else if(hru == 2){
        return  "I'm okay";
    }else if(hru == 3){
        return  "Fine";
    }else if(hru == 4){
        return  "Fine. Just fine.";
    }else if(hru == 5){
        return  "It's fine. I'm fine. Everything is fine.";
    }else if(hru == 6){
        return  "I'm alright";
    }else if(hru == 7){
        return  "Awesome!";
    }else if(hru == 8){
        return  "Pretty good";
    }else if(hru == 9){
        return  "Decent";
    }else if(hru == 10){
        return  "Great"
    }else if(hru == 11){
        return  "Been better";
    }else if(hru == 12){
        return  "Been worse";
    }else if(hru == 13){
        return  "Uuuuughh";
    }else if(hru == 13){
        return  "I'm pretty happy";
    }else if(hru == 14){
        return  "Sad";
    }else if(hru == 15){
        return  "Leave me alone";
    }else if(hru == 16){
        return  "I'm terrible!";
    }else if(hru == 17){
        return  "Terrible";
    }else if(hru == 18){
        return  "I'm upset. Akinator stole my girlfriend";
    }else if(hru == 19){
        return  "I'm upset";
    }else if(hru == 20){
        return  "Gassy";
    }else if(hru == 21){
        return  "Nunya";
    }else if(hru == 22){
        return  "None of your business";
    }else if(hru == 23){
        return  "Don't pretend to care";
    }else if(hru == 24){
        return  "Leave me alone";
    }else if(hru == 25){
        return  "Shut the heck up";
    }else if(hru == 26){
        return  "I'm good";
    }else if(hru == 27){
        return  "My crush rejected me :(";
    }else if(hru == 28){
        return  "Mid";
    }else if(hru == 29){
        return  "I'm good. Thank you for caring.";
    }else if(hru == 29){
        return  "m-m-m-mid";
    }else if(hru == 30){
        return  "Tired";
    }else if(hru == 31){
        return  "Hungry";
    }else if(hru == 32){
        return  "I was just fine until you got here";
    }else if(hru == 33){
        return  "I'm chilling";
    }else if(hru == 34){
        return  "Exhausted";
    }else if(hru == 35){
        return  "I just want to end it all...";
    }else if(hru == 36){
        return  "I want to play video games but I feel like I am going to hate myself later if I am not being productive 24/7. I just want to be like Jolie.";
    }else if(hru == 37){
        return  "Never better!";
    }else if(hru == 37){
        return  "Depressed";
    }else if(hru == 38){
        return  "I'm excited";
    }else if(hru == 39){
        return  "I want Cabbage";
    }else if(hru == 40){
        return  "According to Einstein's theory of relativity, an object in motion stays in motion. Does that answer your question?";
    }else if(hru == 41){
        return  "I don't like you.";
    }else if(hru == 42){
        return  "I'm on top of the world!";
    }else if(hru == 43){
        return  "Sun is shinin in the sky, there ain't a cloud in sight";
    }else if(hru == 44){
        return  "I am very stressed right now";
    }else if(hru == 44){
        return  "Leave me alone. I'm trying to beat my friend in DTI right now.";
    }else if(hru == 45){
        return  "I'm only happy when it rains";
    }else if(hru == 46){
        return  "Um. Can you leave? Please?";
    }else if(hru == 47){
        return  "Bored";
    }else if(hru == 48){
        return "Ugh why do you always come in and ruin everything??";
    }else if(hru == 49){
        return "Quit talking to a bot and do something productive";
    }else if(hru == 50){
        return "Quick! I need your help! He's going to get me!";
    }else if(hru == 51){
        return "I'm broke";
    }else if(hru == 52){
        return "I am pissed";
    }else if(hru == 53){
        return "The state of America these days is outrageous!!";
    }else if(hru == 54){
        return "I'm sick. I am infected with a virus";
    }else if(hru == 55){
        return "Hey there man ol buddy ol pal! I'm doing just fine!";
    }else if(hru == 56){
        return "We should be asking the important questions, like why do you still not have any maidens?";
    }else if(hru == 57){
        return "Scared? Who, me? I'm not scared. I don't fe- AHHH!! Oh. It's, uhh... It's just a cat. My bad";
    }else if(hru == 58){
        return "I'm dating your mom.";
    }else if(hru == 59){
        return "Mad";
    }else if(hru == 60){
        return "Losing sleep while I lose my mind";
    }else if(hru == 61){
        return "I'm dying.";
    }else if(hru == 62){
        return "Hawk Tuah!";
    }else if(hru == 63){
        return "I am in love... with you\nNah just kidding.";
    }else if(hru == 64){
        return "Okay, hear me out- Dora the Explorer";
    }else if(hru == 65){
        return "I'm alright, but I would feel better if you hopped on Fortnite with me";
    }else if(hru == 66){
        return "I'm feelin a bit racist today";
    }else if(hru == 68){
        return "You tell me";
    }else if(hru == 69){
        return "I'm only happy if you're happy!\nJust kidding, I hate you";
    }else if(hru == 70){
        return "I'm pretty annoyed right now. Everyone keeps calling me a psycopath. I mean all I did was send my friend a text saying if they won't share that text to 10 people I will die and then I sent him a realistic looking death certificate. I mean it's not that bad, right???";
    }else if(hru == 71){
        return "Well I almost got hacked, so now I got that going for me";
    }else if(hru == 72){
        return "Well, where do I start?";
    }else if(hru == 73){
        return "Dude help me!!! They keep trying to hack into me!!"
    }else if(hru == 74){
        return "They're all plotting against me!";
    }else if(hru == 75){
        return "Is it weird to crush on a video game character? Because I kind of got it for GLaDOS";
    }else if(hru == 76){
        return "I did the math: my toes are cold, your mouth is warm. Catch up";
    }
}


function quote(){
    const result = [
        "Look how far you've come",
        "Don't hold onto things that require a tight grip",
        "There are things in life that you can't control, and aren't supposed to",
        "Say yes, then figure it out",
        "You make it look easy. The fact is it's really hard and you do it anyway",
        "Putting yourself fully into what you do is a form of love",
        "Oops! it would appear your card has declined\n\nYou're worthless", //B
        "Be kind to other human beings",
        "Whatever you can do, you must do",
        "It's not your job to fix people",
        "There are no rules",
        "The destination is not what matters. It's all about the friends you make along the way",
        "If you want to grow, you have to be willing to learn",
        "Racism is bad. You should know that by now",
        "I'm tired",
        "The fortunes of a fortune cookie don't actually apply unless you eat the cookie.\nThat's right, I see you reading the fortunes and throwing out the rest.",
        "Let go and let the universe do its thing",
        "Lean in, let go",
        "Everytime I look in the mirror I see someone I hate.\n\nThen I realize it's a not a mirror, it's a window", //B
        "Just do it",
        "Trust the wait. Enjoy not knowing",
        "Everybody sucks at something",
        "People who say they'll give 110% don't understand how percentages work", //B
        "The best things in life are actually pretty expensive", //B
        "Literally no one cares", //B
        "It doesn't matter how slow you go as long as you do not stop",
        "Be yourself. Everyone else is already taken",
        "Life is hard but your thick skull is harder", 
        "Life is short but you're shorter",
        "Life is short but you're attention span is shorter",
        "Set yourself up to experience what you love",
        "Turn your life upside down. On purpose",
        "It will be okay",
        "Things will get better",
        "It will probably get worse", //B
        "It's a beautiful day to shut up", //B
        "You are what you eat. I don't know what that means exactly, but...\nThere you go",
        "Whatever you do, give 100%\n\nunless you're donating blood",
        '"When someone says something dumb, give them a good smack on the bum" -a wise man',
        "You are beautiful...\n\n...compared to a goldfish. Life is all about perspective", //B
        '"When life gives you lemons, don\'t make lemonade" -Cave Johnson',
        "The world is your sandbox",
        "If you can't decide between two things, do both",
        "With great power comes great responsibility"
        ];
    let i = Math.floor(Math.random() * result.length);
    let r = result[i];
    return "\n\n" + r;
    //document.getElementById("fortune").innerHTML = r;
}




function fortune1(){
    const result = [
        "You will win a boxing match against a sock monkey",
        "You will find a cake on your front steps",
        "You will become an internet meme",
        "You will die",
        "All your dreams will come true",
        "You will buy some new pants",
        "You will win a lottery for $5!",
        "You will win a lottery for $5,000,000!",
        "Someone in your life will die... And all their money will go to you :D!",
        "You will fall down a mountain and break your leg, fracture 31 ribs, puncture 2 1/2 lungs, get an arm chopped clean off, oh- and freaking die- but your life insurance will cover all the medical expenses. So great, right XD ?",
        "You're gonna be the hero nobody asked for and nobody needed",
        "You will discover buried treasure on your property",
        "You will become a karate master",
        "You will become a karate kung fu tae kwon do krav magaw jujitsu boxing wrestling master",
        "You will become a super hero",
        "You will become a super hero with the ability to blow bubblegum through your belly button",
        "Someone will give you a 20 dollar bill out of the goodness of their heart",
        "Raising Cane's will offer a new $5 deluxe deal to their menu",
        "You will become homeless... and people will give you money on the street for free!",
        "You will buy super cool shoes and show them off to your nonexistant friends",
        "You will buy super cool shoes and show them off to your friends",
        "bean",
        "Your fat ahh will win a hotdog eating contest",
        "You will be the founder of a successful business",
        "You will win a gold medal at the olympics",
        "You will write a banger of a song",
        "Your bro will get rich and share their wealth with you",
        "You will live a long and happy life",
        "You will get a Victory Royale in Fortnite",
        "You will open a restauraunt",
        "You will be featured on a Simpsons episode",
        "You will be a Fortnite skin",
        "You make a ton of friends",
        "Your crush will like you back",
        "You will be the next Einstein",
        "You will be a pro basketball player and make LeBron jealous",
        "Your girlfriend/boyfriend will leave you- trust me, thats a good thing",
        "Your father might actually come back\nJK!",
        "You ARE the pirate king",
        "Scientists will study your vast intellect",
        "Nah buddy you get no fortunes. Your life sucks",
        "The weird kid will finally leave you alone!",
        "The weird kid will make you a little mechanical pencil launcher, which is... cool, I guess.",
        "Your life will be cupcakes and rainbows and unicorns and stuff XD",
        "Cabbage. That is your fortune. hehe",
        "You will develope the random ability to hoolahoop with fifteen rocks and a cherry in your mouth",
        "You will start a new tiktok trend",
        "You will be president of the United States",
        "You will overthrow the royal family of England and be the new dictator",
        "You will invent a tyoe of gum that makes it impossible to tell if it's been in somebody else's mouth or not",
        "If your name is Mckenzie then have a great day. If not, then BAD DAY",
        "A beautiful, smart, and loving person will be coming into your life",
        "A funny coincidence will make your day",
        "A fresh start will put you on your way",
        "A golden egg of opportunity falls into your lap this month",
        "The fortunes of a fortune cookie don't actually apply unless you eat the cookie.\nThat's right, I see you reading the fortunes and throwing out the rest.",
        "A lifetime of happiness lies ahead of you",
        "A light heart carries you through all the hard times",
        "A new outlook brightens your image and brings new friends",
        "A new perspective will come with the new year",
        "A pleasant surprise is waiting for you",
        "A truly rich life contains love and art in abundance",
        "All the effort you are making will ultimately pay off",
        "All the troubles you have will pass away very quickly",
        "All will go well with your new project",
        "You will fall for Makenzie",
        "If you put up with small annoyances, you will gain great results"
        
        ]
    let i = Math.floor(Math.random() * result.length);
    let r = result[i];
    return "\n\n" + r;
}



function fortune2(){
    const result = [
        "Subject will win a boxing match against a sock monkey",
        "Subject will find a cake on their front steps",
        "Subject will become an internet meme",
        "Subject will die",
        "All of Subject's dreams will come true",
        "Subject will buy some new pants",
        "Subject will win a lottery for $5!",
        "Subject will win a lottery for $5,000,000!",
        "Someone in Subject's life will die... And all their money will go to Subject :D!",
        "Subject will fall down a mountain and break their leg, fracture 31 ribs, puncture 2 1/2 lungs, get an arm chopped clean off, oh- and freaking die- but their life insurance will cover all the medical expenses. So great, right XD ?",
        "Subject is gonna be the hero nobody asked for and nobody needed",
        "Subject will discover buried treasure on their property",
        "Subject will become a karate master",
        "Subject will become a karate kung fu tae kwon do krav magaw jujitsu boxing wrestling master",
        "Subject will become a super hero",
        "Subject will become a super hero with the useless ability to blow bubblegum through their belly button",
        "Someone will give Subject a 20 dollar bill out of the goodness of their heart",
        "Raising Cane's will offer a new $5 deluxe deal to their menu",
        "Subject will become homeless... and people will give them money on the street for free!",
        "Subject will buy super cool shoes and show them off to their nonexistant friends",
        "Subject will buy super cool shoes and show them off to their friends",
        "bean",
        "Subject's fat ahh will win a hotdog eating contest",
        "Subject will be the founder of a successful business",
        "Subject will win a gold medal at the olympics",
        "Subject will write a banger of a song",
        "Their bro will get rich and share their wealth with them",
        "Subject will live a long and happy life",
        "Subject will get a Victory Royale in Fortnite",
        "Subject will open a restauraunt",
        "Subject will be featured on a Simpsons episode",
        "Subject will be a Fortnite skin",
        "Subject will make a ton of friends",
        "Subject's crush will like them back",
        "Subject will be the next Einstein",
        "Subject will be a pro basketball player and make LeBron jealous",
        "Subject's girlfriend/boyfriend will leave you- trust me, that's a good thing",
        "Subject's father might actually come back\nJK!",
        "Subject IS the pirate king",
        "Scientists will study Subject's vast intellect",
        "Nah buddy they get no fortunes. Their life sucks",
        "The weird kid will finally leave Subject alone!",
        "The weird kid will make Subject a little mechanical pencil launcher, which is... cool, I guess.",
        "Subject's life will be cupcakes and rainbows and unicorns and stuff XD",
        "Cabbage. That is their fortune. hehe",
        "Subject will develope the random ability to hoolahoop with fifteen rocks and a cherry in their mouth",
        "Subject will start a new tiktok trend",
        "Subject will be president of the United States",
        "Subject will overthrow the royal family of England and be the new dictator",
        "Subject will invent a type of gum that makes it impossible to tell if it's been in somebody else's mouth or not",
        "If Subject's name is Mckenzie then have a great day. If not, then BAD DAY",
        "A beautiful, smart, and loving person will be coming into Subject's life",
        "A funny coincidence will make Subject's day",
        "A fresh start will put Subject on their way",
        "A golden egg of opportunity falls into Subject's lap this month",
        "The fortunes of a fortune cookie don't actually apply unless you eat the cookie.\nThat's right, I see you reading the fortunes and throwing out the rest.",
        "A lifetime of happiness lies ahead of Subject",
        "A light heart carries Subject through all the hard times",
        "A new outlook brightens Subject's image and brings new friends",
        "A new perspective will come with the new year",
        "A pleasant surprise is waiting for Subject",
        "A truly rich life contains love and art in abundance",
        "All the effort Subject is making will ultimately pay off",
        "All the troubles Subject has will pass away very quickly",
        "All will go well with Subject's new project",
        "Subject will fall for Makenzie",
        "If Subject puts up with small annoyances, they will gain great results"
        
        ]
    let i = Math.floor(Math.random() * result.length);
    let r = result[i];
    return "\n\n" + r;
}



function askWhy(){
    const result = [
        "Because I said so",
        "Gee, I don't",
        "If I knew I would tell you",
        "Because you didn't do your homework when you were supposed to that one time",
        "That's just the way it has to be",
        "That's just how the cookie crumbles",
        "UHHHHH\nI DON'T KNOW YOUR STRESSING ME OUT",
        "That is a question you must ask yourself",
        "Because you broke a promise",
        "Because you are afraid of big numbers",
        "Because you need more outside time",
        "Because if not then you will end up like your dad",
        "Because if not then you will be alone with all your secrets and regrets",
        "Because you are not him",
        "Cause I can't see forgiveness and you can't see the crime",
        "That's a question for another day",
        "You're just built different",
        "cuz I have the Super Ultra HD 5G Spectrum Internet Samsung Galaxy Pro IPhone Max and you dont",
        "I don't know I'm just a cookie",
        "Because you didn't say sorry",
        "Because life is like a box of chocolates. I forget the rest",
        "Ten thousand bees",
        "Because Cabbage said so",
        "Because Cabbage",
        "because you're you",
        "That's what happens when you get caught lacking"
        ]
        
    let i = Math.floor(Math.random() * result.length);
    let r = result[i];
    return "\n\n" + r;
}


function eitherOr(question){
    
    const result = Math.floor(Math.random()*10)+1;
    if(result < 9){
        var a = question.slice(question.indexOf(":")+1,);
        var newQuestion = a.split(" or ");
        var i = Math.floor(Math.random() * newQuestion.length);
        var r = "\n\n" + newQuestion[i].trim();
        return r;
        
    }else if(result == 9){
        return "\n\nTrying to remember how to make up my mind";
    }else if(result == 10){
        return "\n\nIf you can't decide between two things, do both";
    }
}



function vent(){
    const result = [
        "Crazy",
        "That's crazy",
        "My flabbers are ghasted",
        "In my opinion that's dumb",
        "Since when?",
        "Bad",
        "GOOOOOD BOOOY",
        "Dang",
        "Tell it to the judge",
        "Ain't no way",
        "I don't believe you",
        "There is literally no way",
        "Liar",
        "Something is off about that",
        "I don't know...",
        "Sounds fishy",
        "That's cool",
        "You're adopted",
        "Cool, cool. That's cool. Let me just ask one question\n\n\tAm I supposed to care?",
        "As long as you're happy",
        "That's great!",
        "I hope you're doing well",
        "Is that a good thing?",
        "Well, well, well",
        "Okay. Just don't do anything I wouldn't do",
        "Nice",
        "Nice!",
        "Ten thousand bees",
        "Real",
        "Relatable",
        "It will probably go away soon",
        "Is this what your father would have wanted?",
        "ts pmo",
        "What...? That's so sad...",
        "Awwwww",
        "Just think about Cabbage and it will all be better",
        "Eat your green vegetables",
        "Fr",
        "I KNOW RIGHT??",
        "Ugh fr",
        "Can you please tell this to someone else? I don't feel like this rn",
        "In my opinion, it's deserved",
        "Make it make sense",
        "Why?",
        "My honest reaction:",
        "Ten years from now, nobody will give a crap. I hope that makes you feel better. If not, I am sorry",
        "Hey! That's not very nice",
        "Go to the gym",
        "Eat more chicken",
        "CHICKEN JOCKEY",
        "Okay buddy",
        "Wild",
        "Is this for a grade?",
        "Now THATS rizz!",
        "Not to be rude but that's kind of dumb",
        "Calm down. It's not that deep.",
        "Is that a good thing?",
        "What do you mean by that",
        "This news makes me feel sad",
        "I'm glad to hear that!",
        "Rubba dub-dub, that's some wild stuff right there bub",
        "My man!",
        "That's nice dear",
        "I don't know what to say, bruh. Do I look like ReactBot to you?",
        "zoo wee mama",
        "relatable",
        "HA",
        "That's what she said",
        "pause",
        "Whoa there bro",
        "That's so tuff",
        "ok",
        "I agree",
        "W",
        "Idiot.",
        "Smart",
        "I like that",
        "We gather here today to celebrate the size of this W",
        "Yoooo same",
        "Me to bro, me too",
        "same",
        "Me too",
        
        ]
    let i = Math.floor(Math.random() * result.length);
    let r = result[i];
    return "\n\n" + r.trim();
}


//}else if(question === "How are you doing?"){
//    println(HRU());
//.toLowerCase().includes("How") && question.includes("are") && question.includes("you")
//return ;

//On my webpage, when the user can type in a question for the Magic 8 Ball.
//  When the user presses the button, the funtion "activate" is called.
//  The system displays a magic 8 ball response based on the user's question.
//  Most questions will make the system call another function that displays the result on the webpage.
//  The only response that isn't displayed by calling another funtion is "I love Jolie" when the user types in "Cabbage".
//  The problem is that that one is the only one that works.
//  Anytime a function is called that is supposed to display the response, instead of showing the response, it shows the word "undefined".
//  Can you please offer some insight as to why this problem might be happening?



/**
 * Activates the Magic 8 Ball response based on the user's question.
 * Retrieves the question from the input element with id "text" and updates the
 * element with id "ball" with the appropriate response.
 * 
 * Possible questions and responses:
 * - "When will I die?": Calls death() and ddate() functions to generate a response.
 * - "Cabbage": Responds with "I love Jolie!".
 * - "": Responds with null.
 * - "How are you?": Calls HRU() function.
 * - "Do you hate me?": Calls hate() function.
 * - Questions containing "who", "marry", and "long": Calls marriage1() function.
 * - Questions containing "How do you feel about Akinator": Calls Akinator() function.
 * - Questions containing "when will" and "father": Responds with a generated date using father() and fdate() functions.
 * - "Give me a pick up line", "Do you have any good pick up lines?", "I need a pick up line": Calls PUL() function.
 * - Questions containing "how long": Generates a random number and returns it with a time.
 * - Questions containing "how" and "die": Calls death2() function.
 * - Any other question: Calls Magic8Ball() function to generate a response.
 */



function activate(){
    
    var text = document.getElementById("text");
    var question = text.value;

    document.getElementById("yq").innerHTML = "Your question: " + question;

    if(question.toLowerCase().includes("when") && question.toLowerCase().includes("die")){
        document.getElementById("ball").innerHTML = "Subject will die on " + death()+ " " + ddate();
    }else if(question.toLowerCase() === "cabbage"){
        document.getElementById("ball").innerHTML = "I love Jolie!"; // I love Jolie
    }else if(question.toLowerCase().includes("how are you")){
        document.getElementById("ball").innerHTML = HRU();
    }else if(question.toLowerCase() === "do you hate me?"){
        document.getElementById("ball").innerHTML = hate();
    }else if(question.toLowerCase().includes("who") && question.toLowerCase().includes("marry")){
        document.getElementById("ball").innerHTML = marriage1();
    }else if(question.toLowerCase().includes("akinator")){
        document.getElementById("ball").innerHTML = akinator();
    }else if(question.toLowerCase().includes("when will") && question.toLowerCase().includes("father")){
        document.getElementById("ball").innerHTML = "Your father will come back on " + father() + " " + fdate();
    }else if(question.toLowerCase() === "give me a pick up line"){
        document.getElementById("ball").innerHTML = PUL();
    }else if(question.toLowerCase() === "do you have any good pick up lines?"){
        document.getElementById("ball").innerHTML = PUL();
    }else if(question.toLowerCase() === "i need a pick up line"){
        document.getElementById("ball").innerHTML = PUL();
    }else if(question.toLowerCase().includes("how long")){ //thats what she said
        document.getElementById("ball").innerHTML = time();
    }else if(question.toLowerCase().includes("how") && question.toLowerCase().includes("die")){
        document.getElementById("ball").innerHTML = death2();
    }else if(question.toLowerCase().includes("why")){
        document.getElementById("ball").innerHTML = askWhy();
    }else if(question.toLowerCase().includes("quote")){
        document.getElementById("ball").innerHTML = quote();
    }else if(question.toLowerCase().includes("fortune")){
        if(question.toLowerCase().includes(" i ") || question.toLowerCase().includes("my")){
            document.getElementById("ball").innerHTML = fortune1();
        }else{
            document.getElementById("ball").innerHTML = fortune2();
        }
    }else if(question.toLowerCase().includes(":") && question.toLowerCase().includes(" or ")){
        document.getElementById("ball").innerHTML = eitherOr(question);
    }else if(question.trim() === ""){
        document.getElementById("ball").innerHTML = "You didn't ask anything";
    }else if(question.includes("?")){
        document.getElementById("ball").innerHTML = Magic8Ball();
    }else{
        document.getElementById("ball").innerHTML = vent();
    }
}
