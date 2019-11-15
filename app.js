"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application. work on later.
// starts the whole process
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      searchResults = searchByTraits(people);
      break;
    default:
    app(people); // restart app
      break;
  }
  
//   // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  firstName = firstName.toLowerCase();
  console.log(firstName);
  let lastName = promptFor("What is the person's last name?", chars);
  lastName = lastName.toLowerCase();
  console.log(lastName);

  let foundPerson = people.filter(function(person){
    person.firstName = person.firstName.toLowerCase();
    person.lastName = person.lastName.toLowerCase();
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered- done
  return foundPerson;
}

// create function for traits (searchByTraits) and insert into app function under 'case No'
//still need weight, height, dob
// have to think of situation if person doesn't know- could they choice which traits to fill in?
function searchByTraits(people){
  // let notSure = promptFor("What traits do you know about this person?");

  let genderType = promptFor("Is the person male or female?", chars);
  genderType = genderType.toLowerCase();
  console.log(genderType);
  let eyeColor = promptFor("What color are the person's eyes?", chars);
  eyeColor = eyeColor.toLowerCase();
  console.log(eyeColor);
  let occupationType = promptFor("What is this person's occupation?", chars);
  occupationType = occupationType.toLowerCase();

  let foundTraits = people.filter(function(person){
    person.gender = person.gender.toLowerCase();
    person.eyeColor = person.eyeColor.toLowerCase();
    person.occupation = person.occupation.toLowerCase();
    if(person.gender === genderType && person.eyeColor === eyeColor && person.occupation === occupationType){
      return true;
    }
    else{
      return false;
    }
  })
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";

  let personDescription = personInfo.reduce(function(total,el){
    return total + el;
  })
  console.log(personInfo);

  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}