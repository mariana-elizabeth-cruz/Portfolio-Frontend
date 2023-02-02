import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//Importamos nuestros comonenetes
import { LoginComponent } from '../componentes/login/login.component';
import { HomeComponent } from '../componentes/home/home.component';
import { NewSkillComponent } from '../componentes/hys/new-skill.component';
import { EditSkillComponent } from '../componentes/hys/edit-skill.component';
import { NewEducacionComponent } from '../componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from '../componentes/educacion/edit-educacion.component';
import { NewExperienciaComponent } from '../componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from '../componentes/experiencia/edit-experiencia.component';



//falta terminar rutas
const routes: Routes = [
  { path: '', component: HomeComponent }, //la ruta dirige a la pagina principal
  { path: 'login', component: LoginComponent },
  { path: 'nuevaskill', component: NewSkillComponent },
  { path: 'edithys/:id', component: EditSkillComponent},
  { path: 'nuevaedu', component: NewEducacionComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  { path: 'nuevaexp' ,  component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent}

];


@NgModule({
  //declarations: [],
  //Cargamos nuestras rutas
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
//export class AppRouting.Module.TsModule { }
