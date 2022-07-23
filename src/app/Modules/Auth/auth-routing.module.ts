import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth/auth.guard';

const routes: Routes = [

{
path: '',
children:
    [
     { path: 'Login',  loadChildren: () => import('./login/login.module').then(module => module.LoginModule)},
     { path: 'Register',  loadChildren: () => import('./registration/register.module').then(module => module.RegisterModule)},
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
