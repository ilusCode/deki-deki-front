import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgramsComponent } from './pages/programs/programs.component';

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "programs",
    component: ProgramsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
