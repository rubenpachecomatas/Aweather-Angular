import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialFormsModule } from './material-forms/material-forms.module';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { DropdownDirective } from './dropdown.directive';
import { DropdowntoggleDirective } from './dropdowntoggle.directive';
import { CelsiusPipe } from './pipes/celsius.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [WeatherIconComponent, DropdownDirective, DropdowntoggleDirective, CelsiusPipe],
  imports: [
    CommonModule,
    MaterialFormsModule
  ],
  exports: [
    MaterialFormsModule,
    WeatherIconComponent,
    DropdownDirective,
    DropdowntoggleDirective,
    CelsiusPipe,
    HttpClientModule
  ]
})
export class SharedModule { }
