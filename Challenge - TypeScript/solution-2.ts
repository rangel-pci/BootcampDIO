interface Person{
    name: string,
    age: number,
    position: 'atriz' | 'padeiro',
    
}

let person1 = {} as Person;
person1.name = "maria";
person1.age = 29;
person1.position = "atriz"

let person2 = {} as Person
person2.name = "roberto";
person2.age = 19;
person2.position = "padeiro";

let person3: Person = {
    name: "laura",
    age: 32,
    position: "atriz"
};

let person4: Person = {
    name: "carlos",
    age: 19,
    position: "padeiro"
}