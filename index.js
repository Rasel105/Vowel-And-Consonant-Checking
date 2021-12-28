//spell Checking

// let digit = prompt("Enter any number: ");
// digit = digit.toLowerCase();
// switch (digit) {
//     case "a":
//         console.log("Vowel");
//         break;
//     case "e":
//         console.log("Vowel");
//         break;
//     case "i":
//         console.log("Vowel");
//         break;
//     case "o":
//         console.log("Vowel");
//         break;
//     case "u":
//         console.log("Vowel");
//         break;
//     default:
//         console.log("Consonant");
// }


let digit = prompt("Enter any number: ");
digit = digit.toLowerCase();
switch (digit) {

    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;
    default:
    console.log("Consonant");
}