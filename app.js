"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application. work on later.
function app(people){
  let searchType = promptFor(" Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
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
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  // Display Option pops up after person's name is typed in.
  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayPerson(person);
    // TODO: find person's info
    break;
    case "family":
    displayFamily(person, people);
    // TODO: find person's family
    break;
    case "descendants":
    displayDecendants(person, people);
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
  console.log (firstName);

  let lastName = promptFor("What is the person's last name?", chars);
  lastName = lastName.toLowerCase();
  console.log (lastName);

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
  return foundPerson[0];
}


// have to think of situation if person doesn't know- could they choice which traits to fill in?
// how to add more than one trait to the search. ex: user knows height, eyes and weight, nothing else.
// for traits try a for loop to filter down search


function searchByTraits (people){
    
    let searchByTraits = promptFor("What traits do you want to search by? Enter '1' for Gender \n, '2' Height \n, '3' Weight \n, '4' Age \n, '6' Dateof Birth \n, '6' Occupation \n, '7' Eye Color,8' Multiple traits\n",chars);

switch (searchByTraits){
case '1':
searchByGender(person,people); 
for(i = 0; i < people.length; i++){

}
break;

case '2'://height search
searchByHeight(person, people);
break;

case '3'://weight search
searchByWeight(person, people);
break;

case '4'://age search
searchByAge(person, people);
break;

case '5'://date of birth search
searchByDateOfBirth(person, people);
break;

case '6'://eye color search
searchByOccupation(person, people);
break;

case '7'://height search
searchByEyeColor(person, people);
break;

case '8':searchByMultipleTraits(people);
break;
}

}



  // case switch? how to add more than one trait to the search. ex: user knows height, eyes and weight, nothing else.
 
  // let foundTraits = people.filter(function(person){
  //   // if(person.gender === genderType && person.eyeColor === eyeColor && person.occupation === occupationType){
  //   //   return true;
  //   // }
  //   // else{
  //   //   return false;
  //   // }
  // })




function searchByGender(people){

  let genderType = promptFor("Is the person male or female?", chars);
  genderType = genderType.toLowerCase();

  let foundGender = people.filter(function(person){
    person.gender = person.gender.toLowerCase();

    if (person.gender === genderType){

      return true;
    }

    else{
      return searchByTraits(people); //restart the function so that new trait can be filled.
    }
  })
  return foundGender[0];
}

function searchByEyeColor(people){
  let eyeColor = promptFor("What color are the person's eyes?", chars);
  eyeColor = eyeColor.toLowerCase();

  let foundEyeColor = people.filter(function(person){
  person.eyeColor = person.eyeColor.toLowerCase();
  if (person.eyeColor === eyeColor){
    return true;
  }
  else{
    return searchByTraits(people); //restart function to look for trait
  }
  })
  // TODO: find the person using the name they entered
  return foundEyeColor[0];
}

function searchByOccupation(people){
  let occupationType = promptFor("What is this person's occupation?", chars);
  occupationType = occupationType.toLowerCase();

  let foundOccupation = people.filter(function(person){
  person.occupation = person.occupation.toLowerCase();
  if (person.occupation === occupationType){
    return true;
  }
  else{
    return searchByTraits(people); //restart function to look for trait
  }  
  })
  return foundOccupation[0];
}

function searchByWeight(people){
  let weightOfPerson = promptFor("How much does this person weigh?", chars);
  weightOfPerson = weightOfPerson.toLowerCase();

  let foundWeight = people.filter(function(person){
  person.weight = person.weight.toLowerCase();
  if (person.weight === weightOfPerson){
    return true;
  }
  else{
    return searchByTraits(people); //restart function to look for trait
    }
  })
  return foundWeight[0];
}

function searchByHeight(people){

  let heightOfPerson = promptFor("How tall is this person?", chars);
  heightOfPerson = heightOfPerson.toLowerCase();

  let foundHeight = people.filter(function(person){
  
 if (person.height === heightOfPerson){
    return true;
  }
  else{
    return searchByTraits(people); //restart function to look for trait
  }
  })
  // TODO: find the person using the name they entered
  return foundHeight[0];
}


function getAge(personDateOfBirth){

    let splitAge = personDateOfBirth.split ("/");

    let today = new Date();
    let todaysDate = today.getDate();
    let todaysMonth = today.getMonth() + 1;
    let todaysYear = today.getFullYear();

    let age = todaysYear - splitAge[2];
    if (todaysMonth > splitAge[1]){
      age++;
    }
    else if(todaysMonth == splitAge[1]){
      age++;
    }
    return age;
} 


function searchByAge(people){     //there is some missing piece in connecting the age calculated 
 //earlier and the age got through prompt

  let ageOfPerson = promptFor("What is this person's age?", chars);
  
  let foundPerson = people.filter(function(person){

  if (getAge(person.dob) == ageOfPerson){

    return true;
  }
  else{
    return false; //restart the function so that new trait can be filled.
  }  
  });
  return foundPerson[0];
}


function searchByDateOfBirth(people){
  let dateOfBirthOfPerson = promptFor("What is the person's date of birth: MM/DD/YYYY format",chars);
  let ageDifference = Date.now() - dateOfBirthOfPerson.getTime();
  let ageDate = new Date(ageDifference);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}


// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

// alerts a list of person's description
function displayPerson(person){
 
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo = "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Date of Birth: " + person.dob + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";

   alert(personInfo);
}

// alerts list of family members
function displayFamily(people){

// alerts list of Family
function displayFamily(person, people){
  displayParents(person, people);
  displaySpouse(person, people);
  displaySiblings(person, people);
}


// alerts list of parents
// May look into filtering by parents length, since parents are in a array
function displayParents(person, people){
  let displayParentInfo = "Parent(s) of " + person.firstName + ": ";

let findParents = people.filter(function(el){
  if(person.parents[0] === el.id && person.firstName !== el.firstName){
    let firstParentsFullName = (el.firstName + " " + el.lastName); 
    displayParentInfo += firstParentsFullName;
    return true;
  }
  else if(person.parents[1] === el.id && person.firstName !== el.firstName){
    let secondParentsFullName = (el.firstName + " " + el.lastName);
    displayParentInfo += secondParentsFullName;
    return true;
  }
  else{
    return false;
  }
})
  alert (displayParentInfo);
  return findParents[0];
}

// alerts list of spouses
function displaySpouse(person,people){
  let displaySpouseInfo = "Spouse of " + person.firstName + ": "
let findSpouse = people.filter(function(el){
  if (person.id === el.currentSpouse && el.id && person.firstName !== el.firstName){
    let spousesName = el.firstName + " " + el.lastName;
    displaySpouseInfo += spousesName;
  }
  else {
    return false;
    }
  })
    alert (displaySpouseInfo);
    return findSpouse[0];
}
  
// alerts list of siblings
// why is person's name repeating?
function displaySiblings(person, people){
  let displaySiblingInfo = "Sibling(s) of " + person.firstName + ":"
  let findSiblings = people.filter(function(el){
    if(person.parents[0] === el.parents[0] || person.parents[0] === el.parents[1] && person.firstName !== el.firstName){
      let siblingsName = el.firstName + " " + el.lastName + ", ";
      displaySiblingInfo += siblingsName;
      return true;
    }
    else if(person.parents[1] === el.parents[0] || person.parents[1] === el.parents[1] && person.firstName !== el.firstName){
      let secondSiblingsName = el.firstName + " " + el.lastName + ", ";
      displaySiblingInfo += secondSiblingsName;
      return true; 
    }
    else{
      return false;
    }
  })
    alert (displaySiblingInfo);
    return findSiblings[0];
}

// alerts list of decendants (children, grandchildren)
// function displayDecendants(person, people){
//     console.log("");
//     if (person.id === el.parents && person.id !== el.id){
//       console.log(el.firstName + " is a child of " + person.firstName + " .")
//       return displayDecendants();
//     }
//   }
// displayDecendants();

// recursion example from video
// function displayListOfDecendants(person, people){
//   console.log("");
//   if(counter > 0){
//     return displayListOfDecendants(counter-1);
//   }
// } 
// displayListOfDecendants();

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

