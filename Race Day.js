let raceNumber = Math.floor(Math.random() * 1000);

let earlyRunner = true
let runnerAge = 18

if (earlyRunner && runnerAge > 18){raceNumber += 1000}
console.log(raceNumber)

if (earlyRunner && runnerAge > 18){console.log(`You're race is at 9:30 am and your number is ${raceNumber}`)
}

else if (!earlyRunner && runnerAge > 18){console.log(`You're race is at 11:00 am and your number is ${raceNumber}`)}

else if (runnerAge < 18) {console.log(`Your race is at 12:30 pm and your number is ${raceNumber}`)}

else {console.log ("Please check registration desk")}
