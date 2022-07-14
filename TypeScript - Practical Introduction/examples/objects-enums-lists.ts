const person = {
    name: "Jane",
    age: 28,
    position: 'developer',
}

person.age = 22;

const john: {name: string, age: number, position: string} = {
    name: "John",
    age: 25,
    position: 'Writer',
}

const pol: {name: string, age: number, position: string} = {
    name: "pol",
    age: 25,
    position: 'Developer',
}

/**
 * "Numeric enum" / "string enum"
 * In numeric enum all of the following members are auto-incremented from that point on.
 * In other words, Position.Teacher has the value 0, Actress has 1, Developer has 2, Writer has 3 and ProPlayer has 4.
 */
enum Position {
    Teacher,
    Actress,
    Developer,
    Writer,
    ProPlayer
}

interface Person{
    name: string,
    age: number,
    position?: Position,
}

interface Student extends Person {
    subjects: string[],
}

const vanessa: Person = {
    name: "Vanessa",
    age: 27,
    position: Position.Teacher,
}

const euler: Student = {
    name: "Euler",
    age: 19,
    position: Position.Writer,
    subjects: ['English', 'Portuguese']
}

const monica: Student = {
    name: "Monica",
    age: 18,
    subjects: ['Web Development - PHP', 'Object Oriented Programing']
}

const list = (list: string[]) => {
    for (const item of list) {
        console.log('- ' + item);
    }
}

list(monica.subjects);