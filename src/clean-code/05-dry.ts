type Size = '' | 'S' | 'M' | 'XL'
class Product {
    price: number
    name: string
    size: Size
    constructor(
        name: string = '',
        price: number = 0,
        size: Size = ''
    ) {
        this.name = name
        this.price = price
        this.size = size
    }
    get getName() {
        return this.name
    }
    private isProductReady(): boolean {
        for (const key in this) {
            const value = this[key]
            switch (typeof this[key]) {
                case 'number':
                    if ((<number>value) <= 0) throw Error(`${key} is less or equal to zero`)
                    break;
                case 'string':
                    if ((<string>value).length === 0) throw Error(`${key} is equal to zero`)
                    break;
                case "boolean":
                    break;
                default:
                    throw Error(`${typeof this[key]} is not valid`)
            }
        }
        return true
    }

    toString() {
        if (!this.isProductReady()) return;
        
        return `${this.name} tiene un precio de: ${this.price} y es talla ${this.size}`
    }
}

(() => {
    const bluePants = new Product()
    console.log(bluePants.toString());
})();