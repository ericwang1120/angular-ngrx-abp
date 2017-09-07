import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenantPageComponent } from './tenant-page.component';

const routes: Routes = [
    { path: '', component: TenantPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TenantPageRoutingModule { }
