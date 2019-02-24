import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatchComponent } from "./components/batch/batch.component";
import { StepComponent } from "./components/step/step.component";

const routes: Routes = [
  {
    path: '',
    component: BatchComponent
  },
  {
    path: 'batch',
    component: BatchComponent
  },
  {
    path: 'step/:id',
    component: StepComponent
  },
  {
    path: '**',
    component: BatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
