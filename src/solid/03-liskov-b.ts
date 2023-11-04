export abstract class Vehicle {
    abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {

    #numberOfSeats: number
    publicProperty = 0;
    constructor(numberOfSeats: number) {
        super();
        this.#numberOfSeats = numberOfSeats
    }
    getNumberOfSeats() {
        return this.#numberOfSeats;
    }

}

export class Audi extends Vehicle {

    #numberOfSeats: number
    constructor(numberOfSeats: number) {
        super();
        this.#numberOfSeats = numberOfSeats
    }
    getNumberOfSeats() {
        return this.#numberOfSeats;
    }

}

export class Toyota extends Vehicle {
    #numberOfSeats: number
    constructor(numberOfSeats: number) {
        super();
        this.#numberOfSeats = numberOfSeats
    }
    getNumberOfSeats(): number {
        return this.#numberOfSeats;
    }


}

export class Honda extends Vehicle {

    #numberOfSeats: number
    constructor(numberOfSeats: number) {
        super();
        this.#numberOfSeats = numberOfSeats
    }
    getNumberOfSeats() {
        return this.#numberOfSeats;
    }

}
