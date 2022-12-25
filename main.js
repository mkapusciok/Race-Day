let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 20;
if (runnerAge >= 18 && registeredEarly === true) {
  raceNumber += 1000;
}
if (runnerAge > 18 && registeredEarly === true) {
  console.log(
    `Your race will start at 9:30AM! Your race number is ${raceNumber}.`
  );
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(
    `Your race will start at 11:00AM! Your race number is ${raceNumber}.`
  );
} else if (runnerAge < 18) {
  console.log(
    `Your race will start at 12:30PM! Your race number is ${raceNumber}.`
  );
} else {
  console.log("Please contact registration!");
}
