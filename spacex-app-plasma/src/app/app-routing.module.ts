import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesComponent } from './launches/launches.component';
import { MissionsComponent } from './missions/missions.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShipsComponent } from './ships/ships.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home',  component: HomepageComponent},
  { path: 'launches', component: LaunchesComponent },
  { path: 'missions', component: MissionsComponent },
  { path: 'ships', component: ShipsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
