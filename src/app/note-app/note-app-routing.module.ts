import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteDataComponent } from './note-data/note-data.component';

const routes: Routes = [
  {
    path: '', component: NoteDataComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteAppRoutingModule { }
