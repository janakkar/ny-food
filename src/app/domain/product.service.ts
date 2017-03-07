import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";
import {Product} from "./product";
import {BadIngredient, GoodIngredient, Ingredient} from "./ingredient";
import {Observable} from "rxjs";
import {Calculator} from "../calculator/calculator";

@Injectable()
export class ProductService {

    constructor(private af: AngularFire, private calculator: Calculator) {
    }

    createProductTemplate(): Product {
        return {
            name: '',
            productType: '',
            badIngredients: Object.keys(BadIngredient).map(key => new Ingredient(key,0)),
            goodIngredients: Object.keys(GoodIngredient).map(key => new Ingredient(key,0))
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

    findAllProducts(): Observable<Product[]> {
      return this.af.database.list('/products', {
        query: {
          orderByChild: 'name'
        }
      });
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
