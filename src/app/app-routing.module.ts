import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form1',
    loadChildren: () =>
      import('./form-demo1/form-demo1.module').then((m) => m.FormDemo1Module)
  },
  {
    path: 'form2',
    loadChildren: () =>
      import('./form-demo2/form-demo2.module').then((m) => m.FormDemo2Module)
  },
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
