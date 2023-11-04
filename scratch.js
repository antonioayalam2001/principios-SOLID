console.log(undefined ?? 0);

const data = {
    status: 200,
    nombre: "tony",
    apellido: "stark",
    edad: 40,
    direccion: {
        ciudad: "New York",
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321,
    },
}

const { status, ...info } = data;
console.log(info);

class Person { 
    makeSound() { 
        console.log("I'm a person");
    }
} 

class User extends Person { 
    makeSound() { 
        console.log("I'm a user");
    }
}

class Admin extends Person { 
}

const user = new User();
user.makeSound();

const admin = new Admin();
admin.makeSound();

console.log(user instanceof Admin);
const person = new Person()
console.log(user.constructor);
console.log(typeof person.constructor.prototype.makeSound);