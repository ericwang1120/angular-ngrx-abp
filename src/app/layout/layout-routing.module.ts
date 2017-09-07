import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'tenants', loadChildren: './tenant-page/tenant-page.module#TenantPageModule' },
            { path: 'users', loadChildren: './user-page/user-page.module#UserPageModule' },            
            { path: 'roles', loadChildren: './role-page/role-page.module#RolePageModule' },            
            { path: 'about', loadChildren: './blank-page/blank-page.module#BlankPageModule' },                        
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
