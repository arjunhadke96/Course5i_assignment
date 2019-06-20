import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { QueOneComponent } from './que-one/que-one.component';
import { QueTwoComponent } from './que-two/que-two.component';
import { QueThreeComponent } from './que-three/que-three.component';
import { QueFourComponent } from './que-four/que-four.component';

const routes: Routes = [
  { path: 'queone', component: QueOneComponent },
  { path: 'quetwo', component: QueTwoComponent },
  { path: 'quethree', component: QueThreeComponent },
  { path: 'quefour', component: QueFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
