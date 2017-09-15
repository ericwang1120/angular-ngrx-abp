import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { PoleCategoryDto } from '../../../core/modules/pole-category/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-pole-category-table',
    templateUrl: './pole-category-table.component.html',
    styleUrls: ['./pole-category-table.component.scss'],
    animations: []
})
export class PoleCategoryTableComponent implements OnInit {
    @Input('poleCategoryList') poleCategoryList: PoleCategoryDto[];
    @Output() open = new EventEmitter();
    @Output() delete = new EventEmitter();
    @ViewChild('content') deleteModal;

    selectedPoleCategory: PoleCategoryDto;

    constructor(private modalService: NgbModal) {
    }
    ngOnInit() { }

    openDeleteModal(poleCategory) {
        this.selectedPoleCategory = poleCategory;
        this.modalService.open(this.deleteModal);
    }

    onDelete() {
        this.delete.emit(this.selectedPoleCategory);
    }
}
