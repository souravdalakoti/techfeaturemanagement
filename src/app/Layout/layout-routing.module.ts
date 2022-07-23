import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Modules/shared/auth/auth.guard';

import { AuthComponent } from './auth/auth.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
//     {path:'',component:LayoutComponent},
//     {path:'',
// loadChildren:()=>import('../Modules/Features/feature.module').then(module=>module.FeatureModule)
// }

{
  path: '', component: LayoutComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('../Modules/Features/feature.module').then(module => module.FeatureModule),canActivate:[AuthGuard]
    }] 
},
{
  path: 'Auth', component: AuthComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('../Modules/Auth/auth.module').then(module => module.AuthModule)
    }] 
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
