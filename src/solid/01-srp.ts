(() => {

    interface Product {
        id: number;
        name: string;
    }
    class Mailer {
        private masterEmail: string = 'tonyayala_01@hotmail.com';
        sendEmail(emailList: string[], subject: string, body: string) {
            console.log('Enviando correo a los clientes');
        }
    }
    // Clase encargada de realizar las operaciones de CRUD de un producto
    class ProductService {
        private httpAdapter: Object; // Aquí se inyecta el adaptador para realizar las peticiones http
        getProduct(id: number) {
            return { id, name: 'OLED Tv' };
        }
        saveProduct(product: Product) {
            console.log('Guardando en base de datos', product);
        }
    }
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productService: ProductService; // Inyección de dependencias
        private mailer: Mailer; // Inyección de dependencias

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }
        loadProduct(id: number) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProduct(id);
            console.log('Producto: ', { id, name: 'OLED Tv' }); 
        }

        saveProduct(product: Product) {
            this.productService.saveProduct(product);
        }
        notifyClients() {
            this.mailer.sendEmail(['lskdfsldkfh'], 'Nuevo producto', 'Se ha agregado un nuevo producto');
        }
    }

    class CardBloc {
        private products: Product[] = [];
        onAddToCart(productId: number) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId);
        }
    }

    const productService = new ProductService();
    const mailer = new Mailer();
    const productBloc = new ProductBloc(productService, mailer); 
    const cardBloc = new CardBloc();
    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cardBloc.onAddToCart(10);

})();