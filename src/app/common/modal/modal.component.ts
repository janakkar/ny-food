import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: '[kyf-modal]',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    @Input()
    private blocking: boolean;

    isModalOpen = false;

    constructor() {
    }

    ngOnInit() {
    }

    close() {
        this.isModalOpen = false;
    }

    open() {
        this.isModalOpen = true;
    }

    isOpen() {
        return this.isModalOpen;
    }
}
