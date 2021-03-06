import {Component, OnInit, ViewChild} from "@angular/core";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {Product} from "../domain/product";
import {ProductService} from "../domain/product.service";
import {Calculator} from "./calculator";
import {ModalComponent} from "../common/modal/modal.component";
import {IngredientService, IngredientMetadataDictionary} from "../domain/ingredient.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {BadIngredient, GoodIngredient} from "../domain/ingredient";

const getKey = (o: any) => {
    return o.$key;
};

const ACTION_SAVE = 'save';
const ACTION_ADD = 'add';

@Component({
    selector: '[kyf-calculator]',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

    productForm: FormGroup;
    private product: Product;
    productTypes: string[];
    calculation: number;
    grade: string;
    metadata: IngredientMetadataDictionary;
    relatedProducts: Observable<Product[]>;
    actionName = ACTION_ADD;
    key: string = null;

    grades = ['A', 'B', 'C', 'D', 'E'];

    @ViewChild(ModalComponent)
    private modal: ModalComponent;

    constructor(private formBuilder: FormBuilder, private productService: ProductService, private calculator: Calculator,
                private ingredientService: IngredientService, private router: Router) {
    }

    ngOnInit() {
        this.metadata = this.ingredientService.getMetadata();
        this.productTypes = this.productService.getProductTypes();

        const fb = this.formBuilder;
        const createAmountValidator = (key) => {
          const maxValue = this.ingredientService.getIngredientMaxValue(key);
          return (c: FormControl) => {
            return c.value <= maxValue ? null : {
                validateAmount: {
                  valid: false
                }
              };
          };
        };

        const createIngredientFormControl = (key) => {
            return fb.group({
                    type: key,
                    amount: [0, createAmountValidator(key)]
                }
            );
        };

        this.productForm = this.formBuilder.group({
            name: ['', Validators.required],
            productType: 'Dairy',
            badIngredients: this.formBuilder.array(this.getBadIngredients().map(createIngredientFormControl)),
            goodIngredients: this.formBuilder.array(this.getGoodIngredients().map(createIngredientFormControl))
        });

        this.productForm.valueChanges.subscribe((value) => {
            if (value && value.goodIngredients && value.badIngredients) {
                this.calculate({value, valid: true});
            }
        });

        this.productForm.controls['name'].valueChanges.subscribe((value) => {
            this.productService.findProductByName(value).subscribe((products: Product[]) => {
                if (products && products.length > 0) {
                    const product = products[0];
                    this.key = getKey(product);
                    this.productForm.patchValue(product, {emitEvent: false});
                    this.calculate({value: product, valid: true});
                    this.actionName = ACTION_SAVE;
                }
            })
        });
    }

    getBadIngredients() {
        return Object.keys(BadIngredient);
    }

    getGoodIngredients() {
        return Object.keys(GoodIngredient);
    }

    calculate({value, valid} : {value: Product, valid: boolean}) {
        if (valid) {
            this.product = value;
            this.calculation = this.calculator.calculate(this.product);
            this.grade = this.calculator.assignGrade(this.calculation);
        }
    }

    onSave() {
        if (this.actionName === ACTION_ADD) {
            this.productService.addProduct(this.product);
            this.clear();
        } else {
            this.productService.updateProduct(this.key, this.product);
        }
    }

    showCalculation() {
        return this.calculation !== undefined;
    }

    isActive(grade) {
        return this.calculation !== undefined && this.grade === grade;
    }

    openModal() {
        this.relatedProducts = this.productService.findSimilarProductsWithBetterSGrade(this.product, this.calculation);
        this.modal.open();
    }

    closeModal() {
        this.modal.close();
    }

    isModalOpen() {
        return this.modal.isOpen();
    }

    clear() {
        this.productForm.setValue(this.productService.createProductTemplate());
        this.product = null;
        this.actionName = ACTION_ADD;
    }

    goToProducts() {
        this.router.navigate(['/products']);
    }
}
