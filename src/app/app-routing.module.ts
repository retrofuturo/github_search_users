import { NgModule } from '@angular/core';
// модули для роутинга
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent }
]; // массив (карта) маршрутов

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  // для того, чтобы этот модуль попал в наше приложение
})
export class AppRoutingModule { }
