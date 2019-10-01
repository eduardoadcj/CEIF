import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListCategoriaPageModule } from './equipamento/list-categoria/list-categoria.module';
import { ListCategoriaPage } from './equipamento/list-categoria/list-categoria.page';
import { RecuperarSenhaComponent } from './auth/recuperar-senha/recuperar-senha.component';
import { SplashComponent } from './splash/splash.component';
import { AddcategoriaComponent } from './equipamento/addcategoria/addcategoria.component';
import { AddequipamentoComponent } from './equipamento/addequipamento/addequipamento.component';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent},
  { path: 'login', component:LoginComponent},
  { path: 'recuperarSenha', component: RecuperarSenhaComponent},
  { path: 'addcategoria', component: AddcategoriaComponent},
  { path: 'addEquipamento', component: AddequipamentoComponent},
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'list-categoria', loadChildren: './equipamento/list-categoria/list-categoria.module#ListCategoriaPageModule' },
  { path: 'categoria', component: ListCategoriaPage},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
