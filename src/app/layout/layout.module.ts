import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class LayoutModule { }
