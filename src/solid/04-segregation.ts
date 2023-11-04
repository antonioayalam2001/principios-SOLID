interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): number;
}

interface RunningBird {
    run(): void;
}

interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    fly() { return 200; }
    eat() { }
}

class Hummingbird implements Bird, FlyingBird {
    fly() { return 200; }
    eat() { }
}

class Ostrich implements Bird, RunningBird {
    eat(): void { }
    run(): void { }
}

class Penguin implements Bird, SwimmerBird {
    swim(): void { }
    eat(): void { }
}