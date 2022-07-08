// Interfaces and types

interface Animal {
    name: string,
    type: 'terrestrial' | 'aquatic';
    roar(sound: string): void;
}

interface Feline extends Animal {
    nightVision: boolean;
}

interface Canine extends Animal {
    size: 'small' | 'medium' | 'big';
}

type Domestic = Canine | Feline;

const animal: Domestic = {
    name: 'Dog',
    type: 'terrestrial',
    size: 'medium',
    roar: function roar(sound) {return sound},
}

console.log(animal.name, ':', animal.roar('AU!'));