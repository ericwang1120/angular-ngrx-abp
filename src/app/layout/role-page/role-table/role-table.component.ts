import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { RoleEditModalComponent } from '../role-edit-modal/role-edit-modal.component';
import { RoleDto } from '../../../core/modules/role/models/role';

@Component({
    selector: 'app-role-table',
    templateUrl: './role-table.component.html',
    styleUrls: ['./role-table.component.scss'],
    animations: []
})
export class RoleTableComponent implements OnInit {
    @Input('roleList') roleList: RoleDto[];
    @Output() open = new EventEmitter();
    @Output() delete = new EventEmitter();

    constructor() {
    }
    ngOnInit() { }
}
