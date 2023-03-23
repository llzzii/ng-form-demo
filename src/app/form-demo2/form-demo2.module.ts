import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDemo2Component } from './form-demo2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share.module';



@NgModule({
  declarations: [
    FormDemo2Component
  ],
  imports: [
    CommonModule,
    ShareModule,
    [
      RouterModule.forChild([
        { path: '', component: FormDemo2Component },
      ])
    ],
  ]
})
export class FormDemo2Module { }
