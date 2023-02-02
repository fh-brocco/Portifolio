import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { ContatoComponent } from './contato/contato.component';
import { PortifolioComponent } from './portifolio/portifolio.component';

const routes: Routes = [

/*{path: '', redirectTo: '', pathMatch: 'full',}*/

{path: ' contato', component: ContatoComponent},
{path: 'curriculo', component: CurriculoComponent},
{path: 'portifolio', component: PortifolioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
