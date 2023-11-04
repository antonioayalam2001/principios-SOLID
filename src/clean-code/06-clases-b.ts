(() => {

    type Gender = 'M' | 'F'
    interface PersonProps {
        name: string;
        gender: Gender;
        birthday: Date;
        age?: number;
    }

    class Person {
        #age: number;
        public birthday;
        public gender;
        public name;
        static MAX_AGE = 100

        constructor({ name, gender, birthday, age }: PersonProps
        ) {
            this.#age = age || 0
            this.birthday = birthday
            this.gender = gender
            this.name = name
        }

        get getAge() { 
            return this.#age
        }
    }


    interface UserProps extends PersonProps {
        lastAccess?: Date;
        email: string;
        role: string;
    }

    class User extends Person {
        private lastAccess: Date
        public email: string
        public role: string
        constructor(
            { birthday,
                gender,
                name,
                email,
                role,
                age }: UserProps
        ) {
            super({ name, gender, birthday, age })
            this.lastAccess = new Date()
            this.email = email
            this.role = role
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingProps extends UserProps {
        workingDirectory: string,
        lastOpenFolder: string,
    }

    class UserSetting extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor(
            { workingDirectory, lastOpenFolder, birthday, gender, name, email, role, age }: UserSettingProps
        ) {
            super({ birthday, gender, name, email, role, age })
            this.workingDirectory = workingDirectory
            this.lastOpenFolder = lastOpenFolder
        }
    }

    const userSettings = new UserSetting(
        {
            workingDirectory: 'C:/Users',
            lastOpenFolder: 'C:/Users/Downloads',
            birthday: new Date(),
            gender: 'M',
            name: 'Juan',
            email: 'tony@gmail.com',
            role: 'admin',
        }
    )
    
})()