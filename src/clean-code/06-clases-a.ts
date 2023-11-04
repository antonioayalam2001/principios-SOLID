(() => {

    type Gender = 'M' | 'F'

    class Person {
        #age: number;
        static MAX_AGE = 100
        constructor(public name: string, public gender: Gender, public birthday: Date, age?: number) {
            this.birthday = birthday
            this.gender = gender
            this.name = name
            this.#age = age || 0
        }
        makeSound() {
            return ('Sound from Person');
        }
        static metodoEstatico() {
            return ('Soy un metodo estatico');
        }

    }

    class User extends Person {
        private lastAccess: Date
        constructor(
            birthday: Date,
            gender: Gender,
            name: string,
            public email: string,
            public role: string,
        ) {
            super(name, gender, birthday)
            this.lastAccess = new Date()
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSetting extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            birthday: Date,
            gender: Gender,
            name: string,
            email: string,
            role: string,
        ) {
            super(birthday, gender, name, email, role)
        }
    }

    const userSettings = new UserSetting(
        'C:/Users',
        'C:/Users/Downloads',
        new Date(),
        'M',
        'Juan',
        'tony@gmail.com',
        'admin'
    )

    console.log({ userSettings });
    
})()