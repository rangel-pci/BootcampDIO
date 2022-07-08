//Utilizando "in" para checar se um parametro possui um dado em específico
//? para propriedade opcional

interface User{
    id: number;
    name: string;
    email: string;
    age?: number;
}

interface Admin extends User{
    readonly accessLevel: number;
}

function redirect(user: User | Admin){
    if('accessLevel' in user){
        console.log(user.name + ' will be redirected to /admin');
    }else{
        console.log(user.name + ' stay here');
    }
}

redirect({
    id: 77,
    name: 'John',
    email: 'john@example.com',
    age: 30,

});

redirect({
    id: 44,
    name: 'Jane',
    email: 'jane@example.com',
    accessLevel: 2,
});