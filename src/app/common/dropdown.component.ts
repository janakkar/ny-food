import {Component, Input, Output, EventEmitter, OnInit, forwardRef} from "@angular/core";

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
@Component({
    selector: 'kyf-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownComponent),
            multi: true
        }
    ]
})
export class DropdownComponent implements OnInit, ControlValueAccessor {

    showList = false;

    @Input()
    private listItems: any;
    @Input()
    private idPropertyName: string;
    @Input()
    private listPropertyName: string;

    private selectedItem: any;

    private propagateChange = (_: any) => {
    };

    openList() {
        this.showList = true;
    }

    closeList() {
        this.showList = false;
    }

    @Output()
    private onSelected: EventEmitter<any> = new EventEmitter();

    selectItem(item) {
        this.selectedItem = item;
        this.onSelected.emit(this.selectedItem);
        this.propagateChange(this.selectedItem);
    }

    ngOnInit(): void {

    }

    getSelectedItem() {
        if (this.selectedItem) {
            return this.idPropertyName ? this.selectedItem[this.idPropertyName] : this.selectedItem;
        } else {
            return '';
        }
    }


    writeValue(obj: any): void {
        if (obj !== undefined) {
            this.selectedItem = obj;
        }
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
    }

    setDisabledState(isDisabled: boolean): void {
    }
}
