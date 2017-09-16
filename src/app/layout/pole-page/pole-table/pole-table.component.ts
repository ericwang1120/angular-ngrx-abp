import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { PoleDto } from '../../../core/modules/pole/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-pole-table',
    templateUrl: './pole-table.component.html',
    styleUrls: ['./pole-table.component.scss'],
    animations: []
})
export class PoleTableComponent implements OnInit {
    @Input('poleList') poleList: PoleDto[];
    @Output() open = new EventEmitter();
    @Output() delete = new EventEmitter();
    @ViewChild('content') deleteModal;

    selectedPole: PoleDto;

    constructor(private modalService: NgbModal) {
    }
    ngOnInit() { }

    openDeleteModal(pole) {
        this.selectedPole = pole;
        this.modalService.open(this.deleteModal);
    }

    onDelete() {
        this.delete.emit(this.selectedPole);
    }
}
