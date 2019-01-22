const menu = {
  _courses : {
    appetizer : [],
    mains: [],
    desserts: [],
  },
  get appetizer(){

  },
  set appetizers(food1) {

  },
  get mains(){

  },
  set mains(food1){

  },
  get desserts(){

  },
  set desserts(food1){

  },
  get courses () {
    return {
       appetizers: this._courses.appetizers,
       mains: this._courses.mains,
       desserts: this._courses.desserts,
    }

  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name : dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);

  },


  getRandomDishFromCourse (courseName) {
   var dishes = this._courses[courseName];
   const randomIndex = Math.floor(Math.random() * dishes.length )

  },

  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appertizers');
    const mains = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishCourse('desserts');

    const totalPrice = appetizer.price + main.price + dessert.price;
    return `the appetizer is ${appetizer.name}, the mains is ${mains.name} and the dessert is ${dessert.name}. the total price of the meal is ${totalPrice}`
  }
};


menu.addDishToCourse('appetizer', 'chickenSoup', 500.45);
menu.addDishToCourse('appetizer', 'chickenSalad', 550.45);
menu.addDishToCourse('appetizer', 'chickenBread', 400.1);

menu.addDishToCourse('menu', 'chickenCurry1', 700.12);
menu.addDishToCourse('menu', 'chickenCurry2', 800.15);
menu.addDishToCourse('menu', 'chickenCurry3', 750.12);

menu.addDishToCourse('dessert', 'chickenCake', 250);
menu.addDishToCourse('dessert', 'chickenCream', 350);
menu.addDishToCourse('dessert', 'chickenShake', 300);

var meal = menu.generateRandomMeal();
console.log(meal);
