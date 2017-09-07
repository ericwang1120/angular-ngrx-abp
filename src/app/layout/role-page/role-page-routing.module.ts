import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolePageComponent } from './role-page.component';

const routes: Routes = [
    { path: '', component: RolePageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RolePageRoutingModule { }
