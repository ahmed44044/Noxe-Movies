import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NetWorksComponent } from './net-works/net-works.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { SinglemoviesComponent } from './singlemovies/singlemovies.component';
import { TvshowComponent } from './tvshow/tvshow.component';

const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"about",canActivate:[AuthGuard],component:AboutComponent},
  {path:"tv",canActivate:[AuthGuard],component:TvshowComponent},
  {path:"movies",canActivate:[AuthGuard],component:MoviesComponent},
  {path:"people",canActivate:[AuthGuard],component:PeopleComponent},
  {path:"netWork",canActivate:[AuthGuard],component:NetWorksComponent},
  {path:"moviedetails/:id",canActivate:[AuthGuard],component:SinglemoviesComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"settings",loadChildren:()=> import('./settings/settings.module').then( (x)=>x.SettingsModule)},
  {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
