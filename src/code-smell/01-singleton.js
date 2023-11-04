const Singleton = (function () {
    
    let instance;

    function createInstance() {
        return {
            doSomething() { 
                console.log('I am doing something...');
            },
            doSomethingElse() { 
                console.log('I am doing something else...');
            },
            i: 9,
            increment() { 
                this.i++;
            },
            getValue() { 
                return this.i;
            }



        };
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

function main() {

    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    instance1.doSomethingElse();
    console.log('Misma instancia? ', (instance1 === instance2));
    console.log('Valor de i: ', instance1.getValue());
    instance2.increment();
    console.log('Valor de i: ', instance1.getValue());
}

main();

