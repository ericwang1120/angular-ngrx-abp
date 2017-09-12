import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { UserEditModalComponent } from '../user-edit-modal/user-edit-modal.component';
import { UserDto } from '../../../core/modules/user/models/user';
import { UserLoginInfoDto } from '../../../core/modules/user-info/models/current-login-information';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-user-table',
    templateUrl: './user-table.component.html',
    styleUrls: ['./user-table.component.scss'],
    animations: []
})
export class UserTableComponent implements OnInit {
    @Input('userList') userList: UserDto[];
    @Input('userLoginInfo') userLoginInfo: UserLoginInfoDto;
    @Output() open = new EventEmitter();
    @Output() delete = new EventEmitter();
    @ViewChild('content') deleteModal;

    selectedUser: UserDto;

    constructor(private modalService: NgbModal) {
    }
    ngOnInit() { }

    openDeleteModal(user) {
        this.selectedUser = user;
        this.modalService.open(this.deleteModal);
    }

    onDelete() {
        this.delete.emit(this.selectedUser);
    }
}
