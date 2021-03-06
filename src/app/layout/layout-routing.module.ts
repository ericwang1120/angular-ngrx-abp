import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'home', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'tenants', loadChildren: './tenant-page/tenant-page.module#TenantPageModule' },
            {
                path: 'users',
                loadChildren: './user-page/user-page.module#UserPageModule'
            },
            {
                path: 'roles',
                loadChildren: './role-page/role-page.module#RolePageModule'
            },
            {
                path: 'about',
                loadChildren: './blank-page/blank-page.module#BlankPageModule'
            },
            {
                path: 'pole-categories',
                loadChildren: './pole-category-page/pole-category-page.module#PoleCategoryPageModule'
            },
            {
                path: 'poles',
                loadChildren: './pole-page/pole-page.module#PolePageModule'
            },
            {
                path: 'lines',
                loadChildren: './line-page/line-page.module#LinePageModule'
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
