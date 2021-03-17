import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesComponent } from './launches/launches.component';
import { MissionsComponent } from './missions/missions.component';

const routes: Routes = [
  { path: 'launches-component', component: LaunchesComponent },
  { path: 'missions-component', component: MissionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
