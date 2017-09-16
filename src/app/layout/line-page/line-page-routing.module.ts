import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinePageComponent } from './line-page.component';

const routes: Routes = [
    { path: '', component: LinePageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LinePageRoutingModule { }
