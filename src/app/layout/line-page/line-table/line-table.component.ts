import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { LineDto } from '../../../core/modules/line/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PoleDto } from '../../../core/modules/pole/models/pole';

@Component({
    selector: 'app-line-table',
    templateUrl: './line-table.component.html',
    styleUrls: ['./line-table.component.scss'],
    animations: []
})
export class LineTableComponent implements OnInit {
    @Input('lineList') lineList: LineDto[];
    @Input('poleList') poleList: PoleDto[];
    @Output() open = new EventEmitter();
    @Output() delete = new EventEmitter();
    @ViewChild('content') deleteModal;

    selectedLine: LineDto;

    constructor(private modalService: NgbModal) {
    }
    ngOnInit() { }

    openDeleteModal(line) {
        this.selectedLine = line;
        this.modalService.open(this.deleteModal);
    }

    onDelete() {
        this.delete.emit(this.selectedLine);
    }
}
