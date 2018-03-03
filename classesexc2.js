class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name () {
    return this._name;
  }
  get level () {
    return this._level;
  }
  get numberOfStudents () {
    return this._numberOfStudents;
  }
  set numberOfStudents(numberOfStudents) {
    if (isNaN(numberOfStudents)) {
      return 'Invalid input: numberOfStudents must be set to a Number.'
    }
    else {
      return this._numerOfStudents;
    }
  }
  quickFacts() {
    console.log(
      /*`${name} educates ${numberOfStudents} students at the ${level} school level.`*/
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }
  static pickSubstituteTeacher(substituteTeachers) {
    /*this._substituteTeachers = [];
    const teacher = this._substituteTeachers;
    teacher.push(subsituteTeachers);*/
    let ranNum = Math.floor(Math.random() * 5 - 1);
    return substituteTeachers[ranNum];
  }
}
class Primary extends School {
  constructor (name, level, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
   /* super('primary');
    super(numberOfStudents);*/
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy () {
    return this._pickupPolicy;
  }
}
class Middle extends School {
  constructor (name, level, numberOfStudents) {
    super(name, 'middle', numberOfStudents);
    /*super(level);
    super(numberOfStudents);*/
  }
}

class High extends School {
  constructor (name, level, numberOfStudents, sportsTeam) {
    super(name, 'high', numberOfStudents);
    /*super(level);
    super(numberOfStudents);*/
    this._sportsTeam = sportsTeam;
  }
  get sportsTeam () {
    return this._sportsTeam;
  }
}

const lorraineHansbury = new Primary('Lorraine Hansbury', 'primary', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
const alSmith = new High ('Al E. Smith', 'high', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

lorraineHansbury.quickFacts();
console.log(alSmith.sportsTeam)

console.log(
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
