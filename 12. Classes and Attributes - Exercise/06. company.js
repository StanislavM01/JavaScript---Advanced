class Company {
    regex = /^undefined$|^null$/g
    constructor() {
        this.departments = {}
    }
    addEmployee(username, salary, position, department) {
        if (this.regex.test(username) || username == `` ||
            this.regex.test(salary) || salary == `` || salary < 0 ||
            this.regex.test(position) || position == `` ||
            this.regex.test(department) || department == ``) {

            throw new Error(`Invalid input!`)
        } else {
            if (!this.departments.hasOwnProperty(department)) {
                this.departments[department] = []
            }
            this.departments[department].push({ username, salary, position })
            return `New employee is hired. Name: ${username}. Position: ${position}`
        }

    }
    bestDepartment() {
        let averageSalary = 0
        let finalResult = ``
        let bestDepartment = {
            averageSalary
        }
        let allDepartmentsKeys = Object.keys(this.departments)
        for (const departKey of allDepartmentsKeys) {
            averageSalary = 0
            for (const element of this.departments[departKey]) {
                averageSalary += element[`salary`]
            }
            averageSalary = averageSalary / this.departments[departKey].length
            if (bestDepartment[`averageSalary`] < averageSalary) {
                bestDepartment[`averageSalary`] = averageSalary.toFixed(2)
                bestDepartment[`department`] = departKey
            }

        }



        let bestSalaryArr = this.departments[bestDepartment.department].sort((a, b) => {
            if (b.salary != a.salary) {
                return b.salary - a.salary
            } else if (b.salary == a.salary) {
                return a.username.localeCompare(b.username)
            }
        })

        finalResult += `Best Department is: ${bestDepartment[`department`]}\nAverage salary: ${bestDepartment[`averageSalary`]}`

        bestSalaryArr.forEach(element => {
            finalResult += `\n${element.username} ${element.salary} ${element.position}`
        });
        return finalResult
    }
}
let c = new Company();

c.addEmployee(`Kolio`, 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "null", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
