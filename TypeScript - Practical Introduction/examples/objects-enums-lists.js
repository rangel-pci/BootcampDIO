"use strict";
const person = {
    name: "Jane",
    age: 28,
    position: 'developer',
};
person.age = 22;
const john = {
    name: "John",
    age: 25,
    position: 'Writer',
};
const pol = {
    name: "pol",
    age: 25,
    position: 'Developer',
};
/**
 * "Numeric enum" / "string enum"
 * In numeric enum all of the following members are auto-incremented from that point on.
 * In other words, Position.Teacher has the value 0, Actress has 1, Developer has 2, Writer has 3 and ProPlayer has 4.
 */
var Position;
(function (Position) {
    Position[Position["Teacher"] = 0] = "Teacher";
    Position[Position["Actress"] = 1] = "Actress";
    Position[Position["Developer"] = 2] = "Developer";
    Position[Position["Writer"] = 3] = "Writer";
    Position[Position["ProPlayer"] = 4] = "ProPlayer";
})(Position || (Position = {}));
const vanessa = {
    name: "Vanessa",
    age: 27,
    position: Position.Teacher,
};
const euler = {
    name: "Euler",
    age: 19,
    position: Position.Writer,
    subjects: ['English', 'Portuguese']
};
const monica = {
    name: "Monica",
    age: 18,
    subjects: ['Web Development - PHP', 'Object Oriented Programing']
};
const list = (list) => {
    for (const item of list) {
        console.log('- ' + item);
    }
};
list(monica.subjects);
