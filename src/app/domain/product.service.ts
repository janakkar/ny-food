import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Product} from "./product";
import {Subject, Observable} from "rxjs";
import {Calculator} from "../calculator/calculator";

//
// const getProductListResult = function (query: FirebaseListObservable<any[]>) {
//     const subject = new Subject();
//     query.subscribe((item) => {
//         subject.next(item);
//     });
//
//     return subject.first();
// };

const cleanCopy = <T,S>(source: T, destination: S): void => {
    for (let prop in destination) {
        if (source[prop] && destination.hasOwnProperty(prop)) {
            destination[prop] = source[prop];
        }
    }
};

@Injectable()
export class ProductService {

    constructor(private af: AngularFire, private calculator: Calculator) {
    }

    createProductTemplate(): Product {
        return {
            name: '',
            productType: '',
            badIngredients: [{type: 0, amount: 0}, {type: 1, amount: 0}, {type: 2, amount: 0}, {type: 3, amount: 0}],
            goodIngredients: [{type: 0, amount: 0}, {type: 1, amount: 0}, {type: 2, amount: 0}]
        };
    }

    getProductTypes() {
        return ['Dairy', 'Cookies', 'Beverage'];
    }

    addProduct(product: Product) {
        const products = this.af.database.list('/products');
        products.push(product);
    }

    updateProduct(key: string, product: Product) {
        const products = this.af.database.list('/products');
        products.update(key, product);
    }

    findProductByName(name: string): Observable<Product[]> {
        return this.af.database.list('/products', {
            query: {
                orderByChild: 'name',
                equalTo: name
            }
        });
    }

    findSimilarProducts(productType: string) {
        return this.af.database.list('/products', {
            query: {
                orderByChild: 'productType',
                equalTo: productType
            }
        });
    }

    findSimilarProductsWithBetterSGrade(product: Product, score: number): Observable<Product[]> {
        let filtered: Observable<Product[]>;

        filtered = Observable.create((observer) => {
            this.findSimilarProducts(product.productType).subscribe((products) => {
                observer.next(products.filter(p => p.name !== product.name && this.calculator.calculate(p) <= score));
            });
        });

        return filtered;
    }
}
