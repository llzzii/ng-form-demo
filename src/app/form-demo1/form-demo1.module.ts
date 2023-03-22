import { NgModule } from '@angular/core';
import { FormDemo1Component } from './form-demo1.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule } from '../share.module';

@NgModule({
  declarations: [
    FormDemo1Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    [
      RouterModule.forChild([
        { path: '', component: FormDemo1Component },
      ])
    ],
  ]
})
export class FormDemo1Module { }
