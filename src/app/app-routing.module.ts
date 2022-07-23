import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Modules/shared/auth/auth.guard';

const routes: Routes = [
{path:'',
loadChildren:()=>import('./Layout/layout.module').then(module=>module.LayoutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
