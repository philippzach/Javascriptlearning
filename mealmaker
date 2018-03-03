const menu = {
  _courses: {
  	_appetizers: [],
  	_mains: [],
  	_desserts: [],
  	get appetizers() {
      return this._appetizers
    },
  	set appetizers(appetizerIn) {
      this._appetizers.push(appetizerIn);
    },
    get mains() {
      return this._mains
    },
  	set mains(mainIn) {
      this._mains.push(mainIn);
    },
    get desserts() {
      return this._desserts
    },
  	set desserts(dessertIn) {
      this._desserts.push(dessertIn);
    }
},
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
      let dish = {
        name: dishName,
        price: dishPrice
      };
    this._courses[courseName].push(dish);
  },

 
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
   let randomIndex =  Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
   let totalPrice =  appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name},${main.name}, ${dessert.name}. And your Total will be ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'Nudeln', 8.12);
menu.addDishToCourse('appetizers', 'Salat', 5.22);
menu.addDishToCourse('appetizers', 'Suppe', 3.05);
menu.addDishToCourse('mains', 'Meat', 15.22);
menu.addDishToCourse('mains', 'Fish', 11.22);
menu.addDishToCourse('mains', 'Chicken', 7.22);
menu.addDishToCourse('desserts', 'IceCream', 4.20);
menu.addDishToCourse('desserts', 'Cake', 3.20);
menu.addDishToCourse('desserts', 'Flan', 7.20);
let meal = menu.generateRandomMeal();
console.log(meal);
