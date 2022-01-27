import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutosComponent } from './pages/produtos/produtos.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/produtos',
    pathMatch: 'full'
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'quemsomos',
    component: QuemSomosComponent
  },
  {
    path: 'comofunciona',
    component: TutorialComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
