import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoleCategoryPageComponent } from './pole-category-page.component';

const routes: Routes = [
    { path: '', component: PoleCategoryPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PoleCategoryPageRoutingModule { }
