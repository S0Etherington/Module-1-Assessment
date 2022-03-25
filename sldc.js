// In this section you will answer some work through problems related to the Software Development Lifecycle

const { versions } = require("process")

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Planning
// Analysis of Requirements
// Design
// Implementation
// Testing & Integration
// Maintain


//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = "Planning is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added." 
const analysisOfRequiremnts = "Analysis is the second step, in which the devolpers gather as much information from the client about what is required for the project. Then they will analyze the requirements and set out a plan."
const design = "Design is the third step, in which the team decides which software and language would best suit the project and decide if the project is feasible and practical."
const implementation = "Implementation is the fourth step, in which the coding begins. The project is split into separate parts and handed off to several developers so they can translate into the chosen language. Typically the longest stage."
const testingAndIntergration = "Testing and integration is the fifth step, in which the software is deployed to a team to test the functionality of every aspect. Once the testing is complete it is deployed for customer use."
const maintain = "Maintaining is the sixth and final step, in which any issues that arise during customer use are taken care of based on changes in technology and user feedback."
    console.log(planning)
    console.log(analysisOfRequiremnts)
    console.log(design)
    console.log(implementation)
    console.log(testingAndIntergration)
    console.log(maintain)