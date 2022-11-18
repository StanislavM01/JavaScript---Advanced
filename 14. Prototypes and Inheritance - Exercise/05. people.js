function solution() {
    class Employee {
        constructor(name, age) {
            this.name = name
            this.age = age
            this.salary = 0
            this.tasks = []
        }
        work() {

        }
        collectSalary() {

        }
    }
    class Junior extends Employee {
        constructor() {
            super(name, age)

        }
    }
    class Senior extends Employee {
        constructor() {

        }
    }
    class Manager extends Employee {
        constructor() {
            this.dividend = 0

        }
    }
}
const classes = solution();
const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();  
