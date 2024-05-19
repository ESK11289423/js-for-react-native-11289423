
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

function formatArrayStrings(strArr, numArr) {
    return strArr.map((str, index) => {
        if (numArr[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

const inputArray = [1, 2, 3, 4, 5];

const stringArray = ["Seli", "Kwesi", "Dennis", "Ben", "Francis"];
const formattedArray = formatArrayStrings(stringArray, inputArray);

export {formattedArray}