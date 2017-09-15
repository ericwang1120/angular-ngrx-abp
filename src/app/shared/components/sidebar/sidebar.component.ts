import { Component } from '@angular/core';
import { MenuItem } from '../../../layout/menu-item/menu-item';

// ngrx
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../core/ngrx/index';
import { Observable } from 'rxjs';
import { Permission } from '../../../core/modules/user-info/models';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    grantedPermissionList$: Observable<Permission[]>;
    userInfoLoading$: Observable<boolean>;


    menuItems: MenuItem[] = [
        new MenuItem('HomePage', '', 'home', '/home'),
        new MenuItem('Tenants', 'Pages.Tenants', 'business', '/tenants'),
        new MenuItem('Users', 'Pages.Users', 'people', '/users'),
        new MenuItem('Roles', 'Pages.Roles', 'local_offer', '/roles'),
        new MenuItem('Pole Categories', '', 'info', '/pole-categories'),
        new MenuItem('Poles', '', 'info', '/poles'),
        new MenuItem('Lines', '', 'info', '/lines'),        
        new MenuItem('About', '', 'info', '/about'),
        
        new MenuItem('MultiLevelMenu', '', 'menu', '', [
            new MenuItem('ASP.NET Boilerplate', '', '', '', [
                new MenuItem('Home', '', '', 'https://aspnetboilerplate.com/?ref=abptmpl'),
                new MenuItem(
                    'Templates', '', '', 'https://aspnetboilerplate.com/Templates?ref=abptmpl'),
                new MenuItem(
                    'Samples', '', '', 'https://aspnetboilerplate.com/Samples?ref=abptmpl'),
                new MenuItem(
                    'Documents', '', '',
                    'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl')
            ]),
            new MenuItem('ASP.NET Zero', '', '', '', [
                new MenuItem('Home', '', '', 'https://aspnetzero.com?ref=abptmpl'),
                new MenuItem(
                    'Description', '', '', 'https://aspnetzero.com/?ref=abptmpl#description'),
                new MenuItem('Features', '', '', 'https://aspnetzero.com/?ref=abptmpl#features'),
                new MenuItem('Pricing', '', '', 'https://aspnetzero.com/?ref=abptmpl#pricing'),
                new MenuItem('Faq', '', '', 'https://aspnetzero.com/Faq?ref=abptmpl'),
                new MenuItem('Documents', '', '', 'https://aspnetzero.com/Documents?ref=abptmpl')
            ])
        ])
    ];

    isActive = false;
    showMenu = '';

    constructor(private store: Store<fromRoot.AppState>) {
        this.grantedPermissionList$ = store.select(fromRoot.getGrantedPermissionList);
        this.userInfoLoading$ = store.select(fromRoot.getUserInfoLoading);
    }

    // filter the menu items to display
    getMenuItemToDisplay(grantedPermissions: Permission[]): MenuItem[] {
        // get array of granted permission name
        let grantedPermissionNames = grantedPermissions.map(permissions => {
            if (permissions.isGranted === true)
                return permissions.PermissionName;
        });

        return this.menuItems.filter(menuItem =>
            menuItem.permissionName === '' ||
            grantedPermissionNames.indexOf(menuItem.permissionName) !== -1);
    }


    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
