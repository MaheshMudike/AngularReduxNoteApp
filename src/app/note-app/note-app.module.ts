import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NoteAppRoutingModule } from './note-app-routing.module';
import { NoteDataComponent } from './note-data/note-data.component';
import { HighlightMatchCasePipe } from './highlight-match-pipe';


@NgModule({
  declarations: [NoteDataComponent, HighlightMatchCasePipe],
  imports: [
    CommonModule,
    FormsModule,
    NoteAppRoutingModule,
  ],
  exports : [
    HighlightMatchCasePipe
  ]
})
export class NoteAppModule  {
}
