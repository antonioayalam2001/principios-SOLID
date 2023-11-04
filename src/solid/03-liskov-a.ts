import { Audi, Honda, Tesla, Toyota, Vehicle } from './03-liskov-b';


(() => {

    const printCarSeats = (cars: Vehicle[]) => {
        const tesla = <Tesla>cars[0];
        for (const car of cars) {
            if (car instanceof Vehicle) {
                console.log(`${car.constructor.name} has ${car.getNumberOfSeats()} seats`);
            }
        }
    }

    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
    ];
    printCarSeats(cars);

})();