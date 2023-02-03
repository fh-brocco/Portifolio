import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { ContatoComponent } from './contato/contato.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [

{path: '', redirectTo: 'inicio', pathMatch: 'full',},

{path: ' contato', component: ContatoComponent},
{path: 'curriculo', component: CurriculoComponent},
{path: 'inicio', component: InicioComponent},
{path: 'portifolio', component: PortifolioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
