import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: '',
      loadChildren: './note-app/note-app.module#NoteAppModule',
  },
//   {
//     path: '**',
//     //component: PagenotfoundComponent,
//     data: { title: '404 Error' }
//  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
