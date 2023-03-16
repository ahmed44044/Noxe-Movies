import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivecyComponent } from './privecy/privecy.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"",component:ProfileComponent},
  {path:"privacy",component:PrivecyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
