/*
Integrantes de grupo: Felix Maldonado y Juany Ramirez
*/

let inputWords, counter;

let findWord = element => {
    const number = inputWords.indexOf(element);
    const n = number > -1 ? number : 0;
    counter += n;
};

let decript = inputPhrase => {
    let maxWordCount = 0;
    let bestMatch = "";

    for (let i = 1; i <= 25; i++) {
        let newPhrase = "";
        counter = 0;
        for (let j = 0; j < inputPhrase.length; j++) {
            if (inputPhrase[j] !== " ") {
                let asc = inputPhrase[j].charCodeAt(0) + i;
                asc = asc <= 90 ? asc : asc - 90 + 64;
                newPhrase += String.fromCharCode(asc);
            } else {
                newPhrase += " ";
            }
        }
        console.log("Test " + i + ": \t " + newPhrase);
        inputWords = newPhrase.split(" ");

        twoLettered.forEach(function (element) {
            findWord(element);
        });
        threeLettered.forEach(function (element) {
            findWord(element);
        });

        if (counter > maxWordCount) {
            bestMatch = newPhrase;
        }
    }
    console.log("\nThe Best Match is = " + bestMatch + "\n");
};

let inputPhrase1 = "PHHW PH DIWHU WKH WRJD SDUWB";
let inputPhrase2 = "GCUA VQ DTGCM";
decript(inputPhrase1);
decript(inputPhrase2);

const twoLettered = [
    "OF",
    "TO",
    "IN",
    "IT",
    "IS",
    "BE",
    "AS",
    "AT",
    "SO",
    "WE",
    "HE",
    "BY",
    "OR",
    "ON",
    "DO",
    "IF",
    "ME",
    "MY",
    "AN",
    "GO",
    "NO",
    "US",
    "AM"
];

const threeLettered = [
    "THE",
    "AND",
    "FOR",
    "ARE",
    "BUT",
    "NOT",
    "YOU",
    "ALL",
    "ANY",
    "CAN",
    "HAD",
    "HER",
    "WAS",
    "ONE",
    "OUR",
    "OUT",
    "DAY",
    "GET",
    "HAS",
    "HIM",
    "HIS",
    "HOW",
    "MAN",
    "NEW",
    "NOW",
    "OLD",
    "SEE",
    "TWO",
    "WAY",
    "WHO",
    "BOY",
    "DID",
    "ITS",
    "LET",
    "PUT",
    "SAY",
    "SHE",
    "TOO",
    "USE"
];
