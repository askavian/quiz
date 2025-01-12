



// Quiz Starts here
const textNodes = [
    {
        id: 1,
        text: "So you want to get into Kill Team, ey? Lets see where we at here...",
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
            ],
        },

/*
* Nodes with a three digit id above 100 are END NOTES From here you can only Restart the loop
* END NOTES contain an IMAGE from the results folder
*/
    {
        id: 100,
        text: "", // tbd
        img: "", // tbd
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
        id: 136, // CURRENTLY NOT IMPLEMENTE Additional branch between ID 110 and ID 18
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

console.log("TEST");