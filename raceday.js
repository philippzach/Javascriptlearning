let raceNumber = Math.floor(Math.random()*1000);
let regEarly = true;
let runAge = 22;

if (regEarly !== true) {
  raceNumber += 1000;
}
if (regEarly !== true) {
  console.log("Seek Registration");
}

if (runAge > 18 && regEarly !== false){
  console.log("Race will start at 9:30am. Your race number is " + raceNumber);
}
else if (runAge > 17 || regEarly !== false){
  console.log("Race will start at 11:00am. Your race number is " + raceNumber);
}
else if (runAge < 18 && regEarly === false){
  console.log("Race will start at 12:30pm. Your race number is " + raceNumber);
}
