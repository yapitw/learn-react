// arguments objects - no longer bound with arrow function
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(66, 4, 5));

// this keyword - no longer bound

const user = {
    name: 'Pattison Ho',
    cities: ['Taipei', 'Keelung', 'Singapore'],
    printPlacesLived () {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1,3,5,7,9],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    },
};

console.log(multiplier.multiply());