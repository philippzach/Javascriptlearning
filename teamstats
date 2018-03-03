let team = {
  _players: [{firstName: 'Pablo', lastName: 'Sanchez', age: 11 }, {firstName: 'Magnuss', lastName: 'Hassieinen', age: 14 },{firstName: 'Hans',lastName: 'Huber',age: 12 },],
  
  _games: [{opponent: "Latin", 
         teamPoints: 22, 
         opponentPoints:15}, {opponent: "Scandinavia", 
         teamPoints: 32, 
         opponentPoints:27}, {opponent: "Scherman", 
         teamPoints: 48, 
         opponentPoints:39}],
  
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this._players.push(player);
  },
  addGame(opponent,teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  }
  
};
team.addGame('Maui', 22, 11);
team.addPlayer('Philipp', 'Zach', 22);
team.addPlayer('Steph', 'Curry', 28);
console.log(team._players);
console.log(team._games);

