let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 20;
if (runnerAge >= 18 && registeredEarly === true) {
    raceNumber += 1000;
}