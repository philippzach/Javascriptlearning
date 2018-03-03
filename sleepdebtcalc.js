const getSleepHours = (day) => {
  if (day === "monday") {
    return 7;
  }
  else if (day === "tuesday") {
    return 7;
  }
  else if (day === "wednesday") {
    return 7;
  }
  else if (day === "thursday") {
    return 7;
  }
  else if (day === "friday") {
    return 7;
  }
  else if (day === "saturday") {
    return 7;
  }
  else if (day === "sunday") {
    return 7;
  };
};
const getActualParameters = () => {
  return getSleepHours("monday") +
  getSleepHours("tuesday") +
	getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") + 
  getSleepHours("sunday");
};
const getIdealSleepHours = () => {
  let idealHours = 8 * 7;
  return idealHours;
};
const calculateSleepDebt = () => {
  let actualSleepHours = getActualParameters();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("Perfect amount of Sleep!");
  }
  else if (actualSleepHours < idealSleepHours) {
    console.log("You need more Sleep!");
  }
  else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed!");
  };
  console.log("Your Sleep difference is: " + (actualSleepHours - idealSleepHours));
}
calculateSleepDebt();
