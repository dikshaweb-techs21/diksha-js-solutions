// If you practise all these problems..
// you will be strong in JS objects manipulations.


// Problem 1 : Part A

// Playing with JSON object"s Values:
//1
// Fluffy sorry, Fluffyy is my fav cat and it has 2 catFriends
// Write a code to get the below details of Fluffyy so that
// I can take him to the vet.

let cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat sandwich"],
    weight: 8,
    furcolor: "white"
    },
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    },]
    }
    console.log(cat);
    
    // Basic Tasks to play with JSON
    
    
    // Add height and weight to Fluffy
    // Fluffy name is spelled wrongly. Update it to Fluffyy
    // List all the activities of Fluffyy"s catFriends.
    // Print the catFriends names.
    // Print the total weight of catFriends
    // Print the total activities of all cats (op:6)
    // Add 2 more activities to bar & foo cats
    // Update the fur color of bar
    
    // Problem 1 : Part B :
    
    // Iterating with JSON object"s Values
    
    // Below is some information about my car. As you can see, I am not the best driver.
    // I have caused a few accidents.
    // Please update this driving record so that I can feel better about my driving skills.
    
    
    let myCar = {
    make: "Bugatti",
    model: "Bugatti La Voiture Noire",
    year: 2019,
    accidents: [
    {
    date: "3/15/2019",
    damage_points: "5000",
    atFaultForAccident: true
    },
    {
    date: "7/4/2022",
    damage_points: "2200",
    atFaultForAccident: true
    },
    {
    date: "6/22/2021",
    damage_points: "7900",
    atFaultForAccident: true
    },
    ]
    }
    console.log(myCar);
    
    // Question to work on the Iteration with JSON
    
    // 1. Loop over the accidents array. Change atFaultForAccident from true to false.
    // 2. Print the dated of my accidents
    
    
    // Real challenges starts here:bowtie:
    
    // Problem 2 :
    
    // Parsing an JSON object"s Values:
    
    // 1.Write a function called "printAllValues" which returns an newArray of all the input object"s values.
    // Input (Object):
    
    // let object1 = {name: "RajiniKanth", age: 33, hasPets : false};
    // Output:
    // ["RajiniKanth", 33, false]
    
    // Sample Function proto:
    
    // let obj = {name : "RajiniKanth", age : 33, hasPets : false};
    function printAllValues(obj) {
        // Use Object.values() to get an array of the object's values
        return Object.values(obj);
    }
    
    // Sample input object
    let object1 = { name: "RajiniKanth", age: 33, hasPets: false };
    
    // Call the function and store the result
    let resu = printAllValues(object1);
    
    // Print the output
    console.log(resu); // Output: ["RajiniKanth", 33, false]
    
    // Problem 3:
    
    // Parsing an JSON object"s Keys:
    // Write a function called "printAllKeys" which returns an newArray of all the input object"s keys.
    // Example Input:
    // {name : "RajiniKanth", age : 25, hasPets : true}
    // Example Output:
    // ["name", "age", "hasPets"]
    // Sample Function proto:
    
    function printAllKeys(obj) {
        // Use Object.keys() to get an array of the object's keys
        return Object.keys(obj);
    }
    
    // Sample input object
    let inputObject = { name: "RajiniKanth", age: 25, hasPets: true };
    
    // Call the function and store the result
    let out = printAllKeys(inputObject);
    
    // Print the output
    console.log(out); // Output: ["name", "age", "hasPets"]
    
    
    
    // Problem 4 :
    
    // Parsing an JSON object and convert it to a list:
    
    // Write a function called "convertObjectToList" which converts an object literal into an array of arrays.
    // Input (Object):
    // let object = {name: "ISRO", age: 35, role: "Scientist"};
    // Output:
    // [["name", "ISRO"], ["age", 35], ["role", "Scientist"]]
    // Sample Function proto:
    // let obj = {name: "ISRO", age: 35, role: "Scientist"};
    function convertObjectToList(obj) {
        // Use Object.entries() to convert the object to an array of [key, value] pairs
        return Object.entries(obj);
    }
    
    // Sample input object
    let object = { name: "ISRO", age: 35, role: "Scientist" };
    
    // Call the function and store the result
    let output= convertObjectToList(object);
    
    // Print the output
    console.log(output); // Output: [["name", "ISRO"], ["age", 35], ["role", "Scientist"]]
    
    
    // Problem 5: ( 5 mins):
    
    // Parsing a list and transform the first and last elements of it:
    // Write a function "transformFirstAndLast" that takes in an array, and returns an object with:
    // 1) the first element of the array as the object"s key, and
    // 2) the last element of the array as that key"s value.
    
    // Input (Array):
    // let array = ["Hi", "I", "am", "Geek"];
    // Output:
    // let object = {
    // HI : "Geek"
    // }
    // Sample Function proto:
    // let arr = ["HI", "I", "am", "a geek"];
    
    function transformFirstAndLast(art) {
        // Check if the array has at least two elements
        if (art.length < 2) {
            return {}; // Return an empty object if there are not enough elements
        }
        
        // Create an object with the first element as the key and the last element as the value
        const obj = {};
        obj[art[0].toUpperCase()] = art[art.length - 1]; // Convert first element to uppercase for the key
        
        return obj;
    }
    
    // Sample input array
    let art= ["Hi", "I", "am", "Geek"];
    
    // Call the function and store the result
    let a = transformFirstAndLast(art);
    
    // Print the output
    console.log(a); // Output: { HI: "Geek" }
    
    
    
    // Problem 6 :
    
    // Parsing a list of lists and convert into a JSON object:
    // Write a function "fromListToObject" which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
    // Input (Array):
    // let array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
    // Output:
    // let object = {
    // make : "Ford"
    // model : "Mustang",
    // year : 1964
    // }
    // Sample Function proto:
    // let arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
    function fromListToObject(arr) {
        // Create an empty object to store the result
        const obj = {};
    
        // Iterate over the array of arrays
        for (let i = 0; i < arr.length; i++) {
            const [key, value] = arr[i]; // Destructure the sub-array into key and value
            obj[key] = value; // Assign the key-value pair to the object
        }
    
        return obj; // Return the constructed object
    }
    
    // Sample input array
    let d = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
    
    // Call the function and store the result
    let e = fromListToObject(d);
    
    // Print the output
    console.log(e); 
    // Output: { make: "Ford", model: "Mustang", year: 1964 }
    
    
    // Problem 7 :
    
    // Parsing a list of lists and convert into a JSON object:
    // Write a function called "transformGeekData" that transforms some set of data from one format to another.
    // Input (Array):
    // let array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
    
    // Output:
    // [
    // {firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard"},
    // {firstName: "Sri", lastName: "Devi", age: 28, role: "Coder"}
    // ]
    
    // Sample Function proto:
    // let arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
    function transformGeekData(array) {
        return array.map(personArray => {
            let personObject = {};
            personArray.forEach(property => {
                let [key, value] = property;
                personObject[key] = value;
            });
            return personObject;
        });
    }
    
    let r = [
        [["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]],
        [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]
    ];
    
    console.log(transformGeekData(r));
    
    
    // Problem 8: (10 — 20 mins):
    
    // Parsing two JSON objects and Compare:
    
    // Read this : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    
    // Write an "assertObjectsEqual" function from scratch.
    // Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
    // It is OK to use JSON.stringify().
    
    // Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.
    
    // Success Case:
    // Input:
    // let expected = {foo: 5, bar: 6};
    // let actual = {foo: 5, bar: 6}
    // assertObjectsEqual(actual, expected, "detects that two objects are equal");
    // Output:
    // Passed
    
    // Failure Case:
    // Input:
    // let expected = {foo: 6, bar: 5};
    // let actual = {foo: 5, bar: 6}
    // assertObjectsEqual(actual, expected, "detects that two objects are equal");
    // Output:
    // FAILED [my test] Expected {"foo":6,"bar":5}, but got {"foo":5,"bar":6}
    
    // let expected = {foo: 5, bar: 6};
    // let actual = {foo: 5, bar: 6}
    function assertObjectsEqual(actual, expected, testName) {
        // Convert both objects to JSON strings for comparison
        const actualJSON = JSON.stringify(actual);
        const expectedJSON = JSON.stringify(expected);
        
        // Compare the JSON strings
        if (actualJSON === expectedJSON) {
            console.log(`Passed`);
        } else {
            console.log(`FAILED [${testName}] Expected ${expectedJSON}, but got ${actualJSON}`);
        }
    }
    
    // Example usage:
    
    let expected1 = {foo: 5, bar: 6};
    let actual1 = {foo: 5, bar: 6};
    assertObjectsEqual(actual1, expected1, "detects that two objects are equal"); // Passed
    
    
    let expected2 = {foo: 6, bar: 5};
    let actual2 = {foo: 5, bar: 6};
    assertObjectsEqual(actual2, expected2, "detects that two objects are equal"); // FAILED
    
    
    // Problem 9 :
    
    // Parsing JSON objects and Compare:
    
    // I have a mock data of security Questions and Answers. You function should take the object and a pair of strings and should return if the quest is present and if its valid answer
    // let securityQuestions = [
    // {
    // question: "What was your first pet"s name?",
    // expectedAnswer: "FlufferNutter"
    // },
    // {
    // question: "What was the model year of your first car?",
    // expectedAnswer: "1985"
    // },
    // {
    // question: "What city were you born in?",
    // expectedAnswer: "NYC"
    // }
    // ]
    function checkSecurityQuestion(securityQuestions, question, answer) {
        // Iterate through the list of security questions
        for (let i = 0; i < securityQuestions.length; i++) {
            let securityQuestion = securityQuestions[i];
            
            // Check if the question matches
            if (securityQuestion.question === question) {
                // Check if the answer matches
                if (securityQuestion.expectedAnswer === answer) {
                    return true
                }
            }
        }
    }
    let securityQuestions = [
        {
        question: "What was your first pet's name?",
        expectedAnswer: "FlufferNutter"
        },
         {
         question: "What was the model year of your first car?",
        expectedAnswer: "1985"
        },
        {
        question: "What city were you born in?",
        expectedAnswer: "NYC"
        }
        ]    
    // //Test case1:
    
    let question = "What was your first pet's name?";
    let answer  =  "FlufferNutter";
    let status = checkSecurityQuestion(securityQuestions, question, answer);
    console.log(status); // true
    // //Test case2:

    // let ques = "What was your first pet"s name?";
    // let ans  =  "DufferNutter";
    // let status = chksecurityQuestions(securityQuestions, ques, ans);
    // console.log(status); // flase
    
    
    
    // Problem 10 :
    
    // Parsing JSON objects and Compare:
    // Write a function to return the list of characters below 20 age
    
    let students = [
    {
    name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
    {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
    {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
    {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
    {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
    {name: "Devdas",age: 56}
    ];
    function returnMinors(students)
    {
        return students.filter(student => student.age < 20);  
    }
    console.log(returnMinors(students));