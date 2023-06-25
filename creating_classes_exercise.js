class Student {
  constructor(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
  }

  activity() {
    console.log("Studying...");
  }
}

class Person extends Student {
  constructor(firstName, lastName, grade, email) {
    super(firstName, lastName, grade);
    this.email = email;
  }

  activity() {
    super.activity();
    console.log("Working and Studying.");
  }
}

var person = new Person("Jane", "Smith", 12, "jane.smith@gmail.com");

person.activity();
