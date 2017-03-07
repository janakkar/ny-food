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

const initMetadata = function (): void {
    const createMetadata = (k: string) => {
        const label = k.substr(0, 3);
        metadata[k] = new IngredientMetadata('g', label, label.toLowerCase());
    };
    Object.keys(BadIngredient).forEach(createMetadata);
    Object.keys(GoodIngredient).forEach(createMetadata);

    metadata[BadIngredient[BadIngredient.Calories]].metric = 'kJ';
    metadata[BadIngredient[BadIngredient.Salt]].metric = 'mg';
    metadata[BadIngredient[BadIngredient.Fats]].label = 'Fat';
    metadata[BadIngredient[BadIngredient.Sugar]].label = 'Sug';
    metadata[BadIngredient[BadIngredient.Salt]].label = 'Salt';
};

@Injectable()
export class IngredientService {
    constructor() {
        initMetadata();
    }

    getMetadata() {
        return metadata;
    }

    getIngredientMaxValue(key: string) {
        if (key == BadIngredient.Salt) {
            return 1000;
        } else if (key == BadIngredient.Calories) {
            return 10000;
        } else {
            return 100;
        }
    }

}
