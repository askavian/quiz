
// loads neccessary elements from DOM 
const imageElement = document.getElementById('image');
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('button')
const optionButtonsElementYes = document.getElementById(`button-yes`);
const optionButtonsElementNo = document.getElementById(`button-no`);
const optionButtonsElementStart = document.getElementById(`button-start`);
const optionButtonsElementStartnew = document.getElementById(`button-startnew`);

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text;
  document.getElementById('image').src = textNode.image
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

// hides all buttons by default  
  while (optionButtonsElementStart) {
    optionButtonsElementStart.remove(optionButtonsElementStart)
  };
  while (optionButtonsElementNo) {
    optionButtonsElementNo.remove(optionButtonsElementNo)
  };
  while (optionButtonsElementYes) {
    optionButtonsElementYes.remove(optionButtonsElementYes)
  };
  while (optionButtonsElementStartnew) {
    optionButtonsElementStartnew.remove(optionButtonsElementStartnew)
  };






 textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
 
 /*
 document.addEventListener("DOMContentLoaded", showOption);
   function showOption() {
    if(textNode.options.text === "Begin") {
        optionButtonsElementStart.style.display = `none`;
    } else {
        optionButtonsElementStart.style.display = `block`;
    };
    if(textNode.options.text === "YES") {
        optionButtonsElementYes.style.display = `none`;
    } else {
        optionButtonsElementYes.style.display = `block`;
    };
    if(textNode.options.text === "NO") {
        optionButtonsElementNo.style.display = `none`;
    } else {
        optionButtonsElementNo.style.display = `block`;
    };
    if(textNode.options.text === "Restart") {
        optionButtonsElementStartnew.style.display = `none`;
    } else {
        optionButtonsElementStartnew.style.display = `block`;
    };
   }
*/    

/*
  if (textNode.options.text != "YES") {
    optionButtonsElementYes.remove(optionButtonsElementYes);
   }
   if (textNode.options.text != "NO") {
    optionButtonsElementNo.remove(optionButtonsElementNo);
   }
 //  if (textNode.options.text != "Begin") {
 //   optionButtonsElementStart.remove(optionButtonsElementStart);
 //  }
   if (textNode.options.text != "Restart") {
    optionButtonsElementStartnew.remove(optionButtonsElementStartnew);
   }
*/


// document.addEventListener("DOMContentLoaded", showOption);

/*
  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
*/    
}


function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

/*
* Nodes with a ONE or TWO digit ids are NAV NOTES They cannot be the END
* NAV NOTES contain no images, only text questions with YES or NO answer and RESTART
*/
// Quiz Starts here
const textNodes = [
    {
        id: 1,
        text: "So you want to get into Kill Team, ey? Lets see where we at here...",
        image: "assets/images/transition/1.webp",
        options: [
                {
                text: "Begin",
                nextText: 2,
                },
            ],
        },
// First Question
    {
        id: 2,
        text: "Do you like money?",
        image: "assets/images/transition/2.webp",
        options: [
                {
                text: "YES",
                nextText: 100,
                },
                {
                text: "NO",
                nextText: 3,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 3,
        text: "Do you like to win?",
        image: "assets/images/transition/3.webp",
        options: [
                {
                text: "YES",
                nextText: 6,
                },
                {
                text: "NO",
                nextText: 5,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 4,
        text: "Do you listen to Techno?",
        image: "assets/images/transition/4.webp",
        options: [
                {
                text: "YES",
                nextText: 136,
                },
                {
                text: "NO",
                nextText: 110,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 5,
        text: "Do you consider yourself a good person?",
        image: "assets/images/transition/5.webp",
        options: [
                {
                text: "YES",
                nextText: 7,
                },
                {
                text: "NO",
                nextText: 31,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 6,
        text: "Do you play Call of Duty?",
        image: "assets/images/transition/6.webp",
        options: [
                {
                text: "YES",
                nextText: 9,
                },
                {
                text: "NO",
                nextText: 8,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 7,
        text: "Are you religous?",
        image: "assets/images/transition/7.webp",
        options: [
                {
                text: "YES",
                nextText: 11,
                },
                {
                text: "NO",
                nextText: 10,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 8,
        text: "Do you like Extreme Violence?",
        image: "assets/images/transition/8.webp",
        options: [
                {
                text: "YES",
                nextText: 13,
                },
                {
                text: "NO",
                nextText: 12,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 9,
        text: "Do you like Vanilla Ice Cream?",
        image: "assets/images/transition/9.webp",
        options: [
                {
                text: "YES",
                nextText: 102,
                },
                {
                text: "NO",
                nextText: 101,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 10,
        text: "Is Law & Order important to you?",
        image: "assets/images/transition/10.webp",
        options: [
                {
                text: "YES",
                nextText: 21,
                },
                {
                text: "NO",
                nextText: 25,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 11,
        text: "Do you like to tell people about it?",
        image: "assets/images/transition/11.webp",
        options: [
                {
                text: "YES",
                nextText: 116,
                },
                {
                text: "NO",
                nextText: 115,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 12,
        text: "Are you over 40?",
        image: "assets/images/transition/12.webp",
        options: [
                {
                text: "YES",
                nextText: 15,
                },
                {
                text: "NO",
                nextText: 14,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 13,
        text: "Do you like Melee Combat?",
        image: "assets/images/transition/13.webp",
        options: [
                {
                text: "YES",
                nextText: 104,
                },
                {
                text: "NO",
                nextText: 103,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 14,
        text: "Do you shower regularely?",
        image: "assets/images/transition/14.webp",
        options: [
                {
                text: "YES",
                nextText: 106,
                },
                {
                text: "NO",
                nextText: 105,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 15,
        text: "Do you like Magic?",
        image: "assets/images/transition/15.webp",
        options: [
                {
                text: "YES",
                nextText: 108,
                },
                {
                text: "NO",
                nextText: 107,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 16,
        text: "Do you look down on other people?",
        image: "assets/images/transition/16.webp",
        options: [
                {
                text: "YES",
                nextText: 18,
                },
                {
                text: "NO",
                nextText: 17,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 17,
        text: "Are you a moral person?",
        image: "assets/images/transition/17.webp",
        options: [
                {
                text: "YES",
                nextText: 109,
                },
                {
                text: "NO",
                nextText: 19,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 18,
        text: "Do you think you are funny?",
        image: "assets/images/transition/18.webp",
        options: [
                {
                text: "YES",
                nextText: 111,
                },
                {
                text: "NO",
                nextText: 4,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 19,
        text: "Are you stupid?",
        image: "assets/images/transition/19.webp",
        options: [
                {
                text: "YES",
                nextText: 112,
                },
                {
                text: "NO",
                nextText: 20,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 20,
        text: "Do you listen to Heavy Metal?",
        image: "assets/images/transition/20.webp",
        options: [
                {
                text: "YES",
                nextText: 114,
                },
                {
                text: "NO",
                nextText: 113,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 21,
        text: "Do you like Aliens?",
        image: "assets/images/transition/21.webp",
        options: [
                {
                text: "YES",
                nextText: 16,
                },
                {
                text: "NO",
                nextText: 22,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 22,
        text: "Are you a fascist?",
        image: "assets/images/transition/22.webp",
        options: [
                {
                text: "YES",
                nextText: 117,
                },
                {
                text: "NO",
                nextText: 23,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 23,
        text: "Do you like the look of fascism?",
        image: "assets/images/transition/23.webp",
        options: [
                {
                text: "YES",
                nextText: 24,
                },
                {
                text: "NO",
                nextText: 118,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 24,
        text: "Do you like Judge Dredd?",
        image: "assets/images/transition/24.webp",
        options: [
                {
                text: "YES",
                nextText: 120,
                },
                {
                text: "NO",
                nextText: 119,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 25,
        text: "Do you work out?",
        image: "assets/images/transition/25.webp",
        options: [
                {
                text: "YES",
                nextText: 121,
                },
                {
                text: "NO",
                nextText: 26,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 26,
        text: "Do you like bending the rules in your favor?",
        image: "assets/images/transition/26.webp",
        options: [
                {
                text: "YES",
                nextText: 122,
                },
                {
                text: "NO",
                nextText: 27,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 27,
        text: "Do you enjoy Blue Collar work?",
        image: ".assets/images/transition/27.webp",
        options: [
                {
                text: "YES",
                nextText: 28,
                },
                {
                text: "NO",
                nextText: 29,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 28,
        text: "Do you want to fuck a toaster?",
        image: "assets/images/transition/28.webp",
        options: [
                {
                text: "YES",
                nextText: 123,
                },
                {
                text: "NO",
                nextText: 124,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 29,
        text: "Do you like STAR TREK?",
        image: "assets/images/transition/29.webp",
        options: [
                {
                text: "YES",
                nextText: 125,
                },
                {
                text: "NO",
                nextText: 30,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 30,
        text: "Do you like Pirate Movies?",
        image: "assets/images/transition/30.webp",
        options: [
                {
                text: "YES",
                nextText: 126,
                },
                {
                text: "NO",
                nextText: 127,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 31,
        text: "Are you an Edgelord?",
        image: "assets/images/transition/31.webp",
        options: [
                {
                text: "YES",
                nextText: 32,
                },
                {
                text: "NO",
                nextText: 33,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 32,
        text: "Are you a pervert?",
        image: "assets/images/transition/32.webp",
        options: [
                {
                text: "YES",
                nextText: 128,
                },
                {
                text: "NO",
                nextText: 129,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 33,
        text: "Do you enjoy playing evil?",
        image: "assets/images/transition/33.webp",
        options: [
                {
                text: "YES",
                nextText: 34,
                },
                {
                text: "NO",
                nextText: 35,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 34,
        text: "Do you care about animals more than humans?",
        image: "assets/images/transition/34.webp",
        options: [
                {
                text: "YES",
                nextText: 130,
                },
                {
                text: "NO",
                nextText: 36,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 35,
        text: "Do you mind if people make fun of you?",
        image: "assets/images/transition/35.webp",
        options: [
                {
                text: "YES",
                nextText: 131,
                },
                {
                text: "NO",
                nextText: 132,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 36,
        text: "Do you care about your hygene?",
        image: "assets/images/transition/36.webp",
        options: [
                {
                text: "YES",
                nextText: 37,
                },
                {
                text: "NO",
                nextText: 133,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 37,
        text: "Do you think evil needs a bit of order as well?",
        image: "assets/images/transition/37.webp",
        options: [
                {
                text: "YES",
                nextText: 134,
                },
                {
                text: "NO",
                nextText: 135,    
                },
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
/*
* Nodes with a three digit id above 100 are END NOTES From here you can only Restart the loop
* END NOTES contain an IMAGE from the results folder
*/
    {
        id: 100,
        text: "Sorry mate! You should not play Kill Team if you value your money. Consider investing in Games Workshop Stocks instead.", // tbd
        image: "assets/images/results/gwstocks.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
// These Teams are considered "ELITE"        
    {
        id: 101,
        text: "The results are in! You might like the PHOBOS STRIKE TEAM",
        image: "assets/images/results/phobosstriketeam.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 102,
        text: "The results are in! You might like the ANGELS OF DEATH Team",
        image: "assets/images/results/angelsdeath.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 103,
        text: "The results are in! You might like the LEGIONAIRES Team",
        image: "assets/images/results/legionaires.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 104,
        text: "The results are in! You might like the NEMESIS CLAW Team",
        image: "assets/images/results/nemesisclaw.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 105,
        text: "The results are in! You might like the PLAGUE MARINES Team",
        image: "assets/images/results/plaguemarines.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 106,
        text: "The results are in! You might like the WRECKA CREW Team",
        image: "assets/images/results/wreckacrew.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 107,
        text: "The results are in! You might like the HIEROTEK CIRCLE Team",
        image: "assets/images/results/hierotekcircle.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 108,
        text: "The results are in! You might like the WARP COVEN Team",
        image: "assets/images/results/warpcoven.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
// These Teams are considered "COMMON"        
    {
        id: 109,
        text: "The results are in! You might like the PATHFINDER",
        image: "assets/images/results/pathfinder.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 110,
        text: "The results are in! You might like the CORSAIR VOIDSCARRED Team",
        image: "assets/images/results/corsairvoidscarred.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 111,
        text: "The results are in! You might like the VOID DANCER TROUPE Team",
        image: ".assets/images/results/voiddancertroupe.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 112,
        text: "The results are in! You might like the KOMMANDOS Team",
        image: "assets/images/results/kommandos.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 113,
        text: "The results are in! You might like the VESPID STINGWINGS Team",
        image: "assets/images/results/vespidstingwings.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 114,
        text: "The results are in! You might like the FARSTALKER KINBAND Team",
        image: "assets/images/results/farstalkerkinband.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },  
    {
        id: 115,
        text: "The results are in! You might like the TEMPESTUS AQUILONS Team",
        image: "assets/images/results/tempestusaquilons.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 116,
        text: "The results are in! You might like the NOVITIATES Team",
        image: "assets/images/results/novitiates.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 117,
        text: "The results are in! You might like the INQUISITORIAL AGENTS Team",
        image: "assets/images/results/inquisitorialagents.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 118,
        text: "The results are in! You might like the KASRKIN Team",
        image: "assets/images/results/kasrkin.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 119,
        text: "The results are in! You might like the DEATH KORPS Team",
        image: "assets/images/results/deathkorps.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 120,
        text: "The results are in! You might like the EXACTION SQUAD Team",
        image: "assets/images/results/exactionsquad.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 121,
        text: "The results are in! You might like the SCOUT SQUAD Team",
        image: "assets/images/results/scoutsquad.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 122,
        text: "The results are in! You might like the RATLINGS Team",
        image: "assets/images/results/ratlings.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 123,
        text: "The results are in! You might like the HUNTER CLADE Team",
        image: "assets/images/results/hunterclade.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 124,
        text: "The results are in! You might like the HEARTHKYN SALVAGERS Team",
        image: "assets/images/results/hearthkynsalvagers.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 125,
        text: "The results are in! You might like the ELUCIDIAN STARSTRIDERS Team",
        image: "assets/images/results/elucidianstarstriders.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 126,
        text: "The results are in! You might like the IMPERIAL NAVY BREACHERS Team",
        image: "assets/images/results/imperialnavybreachers.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 127,
        text: "The results are in! You might like the HERNKIN YAEGIRS Team",
        image: "assets/images/results/hernkinyaegirs.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 128,
        text: "The results are in! You might like the HAND OF THE ARCHON Team",
        image: "assets/images/results/handarchon.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 129,
        text: "The results are in! You might like the MANDRAKES Team",
        image: "assets/images/results/mandrakes.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 130,
        text: "The results are in! You might like the FELLGOR RAVAGERS Team",
        image: "assets/images/results/fellgorravagers.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 131,
        text: "The results are in! You might like the BROOD BROTHERS Team",
        image: "assets/images/results/broodbrothers.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 132,
        text: "The results are in! You might like the WYRMBLADE Team",
        image: "assets/images/results/wyrmblade.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 133,
        text: "The results are in! You might like the GELLERPOX INFECTED Team",
        image: "assets/images/results/gellerpoxinfected.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 134,
        text: "The results are in! You might like the BLOODED Team",
        image: "assets/images/results/blooded.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },   
    {
        id: 135,
        text: "The results are in! You might like the CHAOS CULT Team",
        image: "assets/images/results/chaoscult.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },
    {
        id: 136,
        text: "The results are in! You might like the BLADES OF KHAINE Team",
        image: "assets/images/results/bladeskhaine.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },                                                           
]

startGame(); // Loads Quiz as soon as everything is ready