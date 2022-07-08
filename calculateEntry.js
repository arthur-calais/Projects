const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childEntry = entrants.filter((visitor) => visitor.age < 18).length;
  const seniorEntry = entrants.filter((visitor) => visitor.age >= 50).length;
  const adultEntry = entrants.filter((visitor) => visitor.age < 50 && visitor.age >= 18).length;
  return {
    child: childEntry,
    adult: adultEntry,
    senior: seniorEntry,
  };
}

function calculateEntry(entrants) {
  const { child, adult, senior } = data.prices;
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entryTotal = countEntrants(entrants);
  return ((entryTotal.child * child) + (entryTotal.senior * senior) + (entryTotal.adult * adult));
}

module.exports = { calculateEntry, countEntrants };
