import {Injectable} from "@angular/core";
import {BadIngredient, GoodIngredient} from "./ingredient";

class IngredientMetadata {
    metric: string;
    label: string;
    name: string;

    constructor(metric: string, label: string, name: string) {
        this.metric = metric;
        this.label = label;
        this.name = name;
    }
}

export type IngredientMetadataDictionary = {[id: string]: IngredientMetadata};

const metadata: IngredientMetadataDictionary = {};

const reg = new RegExp('\\d+');

const checkNumber = function (s: string) {
    return s.match(reg);
};

const initMetadata = function (): void {
    const createMetadata = (k: string) => {
        const label = k.substr(0, 3);
        metadata[k] = new IngredientMetadata('mg', label, label.toLowerCase());
    };
    Object.keys(BadIngredient).filter(n => !checkNumber(n)).forEach(createMetadata);
    Object.keys(GoodIngredient).filter(n => !checkNumber(n)).forEach(createMetadata);

    metadata[BadIngredient[BadIngredient.Calories]].metric = 'kJ';
};

@Injectable()
export class IngredientService {
    constructor() {
        initMetadata();
    }

    getMetadata() {
        return metadata;
    }

    getBadIngredients() {
        return Object.keys(BadIngredient).filter(n => !checkNumber(n));
    }

    getBadIngredientKeys() {
        return Object.keys(BadIngredient).filter(n => checkNumber(n));
    }

    getGoodIngredientKeys() {
        return Object.keys(GoodIngredient).filter(n => checkNumber(n));
    }

    getGoodIngredients() {
        return Object.keys(GoodIngredient).filter(n => !checkNumber(n));
    }
}