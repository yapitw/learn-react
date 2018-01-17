class OldSyntex {
  constructor() {
    this.name = "Pattison";
  }
  getGreeting() {
    return `Hi, my name is ${this.name}`;
  }
}

const oldSyntex = new OldSyntex();
console.log(oldSyntex.getGreeting());

// ---------------

class NewSyntex {
  name = "Winnie";
  getGreeting = () => {
    return `Hi, my name is ${this.name}`;
  }
}

const newSyntex = new NewSyntex();
console.log(newSyntex.getGreeting());