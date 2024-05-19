import { formattedArray } from "./arrayManipulation.js";

function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

const stringArray = ["Seli", "Kwesi", "Dennis", "Ben", "Francis"];
const doneArray = createUserProfiles (stringArray, formattedArray)
console.log(doneArray)