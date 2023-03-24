import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    [
      RouterModule.forChild([
        { path: '', component: HomeComponent },
      ])
    ],
  ]
})
export class HomeModule { }
