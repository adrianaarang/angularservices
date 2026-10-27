import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/comics-component/comics-component';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';
import { Plantillafuncionsimplecomponent } from './components/plantillafuncionsimplecomponent/plantillafuncionsimplecomponent';

const routes: Routes = [
  {path: "", component: ComicsComponent},
  {path: "personas", component: PersonasApiComponent},
  {path: "coches", component:CochesApiComponent},
 {path: "plantillas", component: Plantillafuncionsimplecomponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
