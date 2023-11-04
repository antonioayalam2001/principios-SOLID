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


    interface UserProps {
        lastAccess?: Date;
        email: string;
        role: string;
    }

    class User {
        private lastAccess: Date
        public email: string
        public role: string
        constructor({ email, role, }: UserProps) {
            this.lastAccess = new Date()
            this.email = email
            this.role = role
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string,
        lastOpenFolder: string,
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor(
            { workingDirectory, lastOpenFolder }: SettingsProps
        ) {

            this.workingDirectory = workingDirectory
            this.lastOpenFolder = lastOpenFolder
        }
    }

    interface UserSettingProps extends UserProps, SettingsProps, PersonProps { }

    class UserSettings {
        public person: Person
        public user: User
        public settings: Settings
        constructor({
            birthday, email, gender, name, role, workingDirectory, lastOpenFolder
        }: UserSettingProps) {
            this.person = new Person({ name, gender, birthday })
            this.user = new User({ email, role })
            this.settings = new Settings({ lastOpenFolder, workingDirectory })
        }
    }

    const userSettings = new UserSettings(
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

    console.log({ userSettings, isLogged: userSettings.user.checkCredentials() });


})()