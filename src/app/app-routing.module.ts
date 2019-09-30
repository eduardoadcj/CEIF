import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListCategoriaPageModule } from './equipamento/list-categoria/list-categoria.module';
import { ListCategoriaPage } from './equipamento/list-categoria/list-categoria.page';
import { RecuperarSenhaComponent } from './auth/recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent},
  { path: 'recuperarSenha', component: RecuperarSenhaComponent},
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'list-categoria', loadChildren: './equipamento/list-categoria/list-categoria.module#ListCategoriaPageModule' },
  { path: 'equipamento', component: ListCategoriaPage},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
