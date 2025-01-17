
// loads neccessary elements from DOM 
/*
const textElement = document.getElementById("text");
const imageElement = document.getElementById("image");
const btn = document.getElementById("button");
const btnyes = document.getElementById("button-yes");
const btnno = document.getElementById("button-no");
const btnstart = document.getElementById("button-start");
const btnstartnew = document.getElementById("button-startnew");

console.log(document.getElementById("text")); //DEBUGGING check if DOM is called correctly

function startQuiz() {
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    while (btn.firstChild) {
        btn.removeChild(btn.firstChild)
      }
      


 };

function selectOption(option) {

}



console.log(startQuiz.showTextNode); //DEBUGGING check if function is called correctly
*/ 

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('button')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
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




// console.log(startQuiz); DEBUGGING check if function is called correctly


/*
* Nodes with a ONE or TWO digit ids are NAV NOTES They cannot be the END
* NAV NOTES contain no images, only text questions with YES or NO answer and RESTART
*/
// Quiz Starts here
const textNodes = [
    {
        id: 1,
        text: "So you want to get into Kill Team, ey? Lets see where we at here...",
        img: ".assets/images/readme/debugging_image.png", // debugging image REMOVE LATER
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
        img: ".assets/images/results/gwstocks.webp",
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
        img: ".assets/images/results/phobosstriketeam.webp",
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
        img: ".assets/images/results/angelsdeath.webp",
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
        img: ".assets/images/results/legionaires.webp",
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
        img: ".assets/images/results/nemesisclaw.webp",
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
        img: ".assets/images/results/plaguemarines.webp",
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
        img: ".assets/images/results/wreckacrew.webp",
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
        img: ".assets/images/results/hierotekcircle.webp",
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
        img: ".assets/images/results/warpcoven.webp",
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
        img: ".assets/images/results/pathfinder.webp",
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
        img: ".assets/images/results/corsairvoidscarred.webp",
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
        img: ".assets/images/results/voiddancertroupe.webp",
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
        img: ".assets/images/results/kommandos.webp",
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
        img: ".assets/images/results/vespidstingwings.webp",
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
        img: ".assets/images/results/farstalkerkinband.webp",
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
        img: ".assets/images/results/tempestusaquilons.webp",
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
        img: ".assets/images/results/novitiates.webp",
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
        img: ".assets/images/results/inquisitorialagents.webp",
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
        img: ".assets/images/results/kasrkin.webp",
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
        img: ".assets/images/results/deathkorps.webp",
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
        img: ".assets/images/results/exactionsquad.webp",
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
        img: ".assets/images/results/scoutsquad.webp",
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
        img: ".assets/images/results/ratlings.webp",
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
        img: ".assets/images/results/hunterclade.webp",
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
        img: ".assets/images/results/hearthkynsalvagers.webp",
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
        img: ".assets/images/results/elucidianstarstriders.webp",
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
        img: ".assets/images/results/imperialnavybreachers.webp",
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
        img: ".assets/images/results/hernkinyaegirs.webp",
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
        img: ".assets/images/results/handarchon.webp",
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
        img: ".assets/images/results/mandrakes.webp",
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
        img: ".assets/images/results/fellgorravagers.webp",
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
        img: ".assets/images/results/broodbrothers.webp",
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
        img: ".assets/images/results/wyrmblade.webp",
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
        img: ".assets/images/results/gellerpoxinfected.webp",
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
        img: ".assets/images/results/blooded.webp",
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
        img: ".assets/images/results/chaoscult.webp",
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
        img: ".assets/images/results/bladeskhaine.webp",
        options: [
                {
                text: "Restart",
                nextText: 1,
                },
            ],
        },                                                           
]

console.log("TEST"); // for debugging only

startGame(); // Loads Quiz as soon as everything is ready