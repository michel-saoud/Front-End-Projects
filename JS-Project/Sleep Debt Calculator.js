function getSleepHours(day){
 switch (day){
  case 'monday' : return 8; break;
  case 'tuesday' : return 8; break;
  case 'wednesday' : return 8; break;
  case 'thursday' : return 8; break;
  case 'wednesday' : return 8; break;
  case 'friday' : return 8; break;
  case 'saturday' : return 8; break;
  case 'sunday' : return 8; break;}
  }

function getActualSleepHours(){
  return getSleepHours('monday') + 
          getSleepHours('tuesday') +
          getSleepHours('wednesday') +
          getSleepHours('thursday') +
          getSleepHours('friday') +
          getSleepHours('saturday') +
          getSleepHours('sunday')
  }

function getIdealSleepHours(){
  const idealHours = 9 ;
  return idealHours * 7
}

console.log('My actual hours of weekly sleep are: ' + getActualSleepHours() )
console.log('My ideal hours of weekly sleep are: ' + getIdealSleepHours())

function calculateSleepDebt(){
 const actualSleepHours = getActualSleepHours();
 const idealSleepHours = getIdealSleepHours();

 if (actualSleepHours === idealSleepHours) { return console.log('You got a perfect amount of sleep')}
 else if (actualSleepHours > idealSleepHours) { return console.log('You slee too much')}
 else { return 'You should get some rest'}
}

console.log(calculateSleepDebt())






