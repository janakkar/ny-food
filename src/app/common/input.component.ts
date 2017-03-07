import {Component, OnInit, Input, forwardRef} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: '[kyf-input]',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
    amount: number;

    @Input()
    private controlLabel: string;

    @Input()
    private measure: string;

    @Input()
    private controlName: string;

    private propagateChange = (_: any) => {};

    onChange(newValue) {
        this.amount = newValue;
        this.propagateChange(this.amount);
    }
    ngOnInit() {}

    writeValue(obj: any): void {
        this.amount = obj;
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {}

    setDisabledState(isDisabled: boolean): void {}
}
