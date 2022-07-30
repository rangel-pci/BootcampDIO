interface Employee{
    code: number;
    name: string;
}

let employee = {} as Employee;
employee.code = 10;
employee.name = "John";

// or

let employee2: Employee = {
    code: 10,
    name: "John",
};