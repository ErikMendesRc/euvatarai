import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeletransporteComponent } from './teletransporte/teletransporte.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Rota padrão para a HomeComponent
    { path: 'teletransporte', component: TeletransporteComponent },
    // Outras rotas, se houver...
  ];
