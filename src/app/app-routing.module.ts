import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherCardComponent } from './weather/weather-card/weather-card.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home/login'
  },
  {
    path: '**',
    redirectTo: 'home/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
