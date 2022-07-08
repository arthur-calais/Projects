const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const daysOfWeek = Object.keys(hours);
const hourNDay = Object.values(hours);

function returnSchedule() {
  const hoursOfWeek = daysOfWeek.reduce((acc, crr, index, array) => {
    if (index !== array.length - 1) {
      acc[crr] = {
        officeHour: `Open from ${hourNDay[index]
          .open}am until ${hourNDay[index].close}pm`,
        exhibition: species
          .filter((cage) =>
            cage.availability.includes(crr))
          .map((animal) => animal.name) };
      return acc;
    }
    acc[crr] = { officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!' };
    return acc;
  }, {});
  return hoursOfWeek;
}

function getSchedule(scheduleTarget) {
  const animalsArray = species
    .map((animal) => animal.name);
  if (daysOfWeek.includes(scheduleTarget)) {
    return { [scheduleTarget]: returnSchedule()[scheduleTarget] };
  }
  if (animalsArray.includes(scheduleTarget)) {
    const findAnimal = species
      .find((cage) => cage.name === scheduleTarget);
    return findAnimal.availability;
  }
  return returnSchedule();
}

module.exports = getSchedule;
