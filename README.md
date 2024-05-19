

# Student ID: 111289423


## Task 1: `arrayManipulation.js`

1. **Function: `processArray`**
   - **Description:** Takes an array of numbers as an argument. Returns a new array where each even number is squared and each odd number is tripled.
   - **Example Usage:**
     ```javascript
     const inputArray = [1, 2, 3, 4, 5];
     const processedArray = processArray(inputArray);
     
     ```

2. ## Task 2: `formatArrayStrings`**
   - **Description:** Takes two arrays as arguments: an array of strings and an array of numbers processed by `processArray`. Modifies each string based on its corresponding number: capitalizes the entire string if the number is even, converts the string to lowercase if the number is odd.
   - **Example Usage:**
     ```javascript
     const stringArray = ["Seli", "Kwesi", "Dennis", "Ben", "Francis"];
     const formattedArray = formatArrayStrings(stringArray, processedArray);
     console.log(formattedArray); // Output: ["hello", "WORLD", "javascript", "IS", "fun"]
     ```

## Task 3: `userInfo.js`

1. **Function: `createUserProfiles`**
   - **Description:** Takes an array of names and the array of modified names from Task 1. Returns an array of objects, each containing `originalName`, `modifiedName`, and `id` (auto-incremented starting from 1).
   - **Example Usage:**
     ```javascript
     const originalNames = ["Seli", "Kwesi", "Dennis", "Ben", "Francis"];
     const modifiedNames = ["seli", "bKWESI", "Cdennis", "BEN", "francis"];
     const userProfiles = createUserProfiles(originalNames, modifiedNames);
     console.log(userProfiles);
     /*
     Output:
     [
       { id: 1, originalName: 'Seli', modifiedName: 'seli' },
       { id: 2, originalName: 'Kwesi, modifiedName: 'KWESI' },
       { id: 3, originalName: 'Dennis', modifiedName: 'dennis' },
       { id: 4, originalName: 'Ben, modifiedName: 'BEN' },
       { id: 5, originalName: 'Francis', modifiedName: 'francis' }
     ]
     */
     ```

## Files

- `arrayManipulation.js`: Contains the `processArray`
-  `formatArrayStrings` functions.
- `userInfo.js`: Contains the `createUserProfiles` function.

This project demonstrates array manipulation and creating structured data objects from processed data. Each function is documented with usage examples for clarity.
