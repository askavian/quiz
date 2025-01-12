



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
        id: 100,
        text: "You should not play Kill Team or any other Warhammer 40.000 product. Have you thought about investing in Games Workshop stocks instead?",
        options: [
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
            ],
        },
]