import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivresComponent } from './livres/livres.component';


const routes: Routes = [
  {path: "livres", component : LivresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
