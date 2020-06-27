import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store';
import { NgRedux } from '@angular-redux/store';
@Component({
  selector: 'app-note-data',
  templateUrl: './note-data.component.html',
  styleUrls: ['./note-data.component.sass']
})
export class NoteDataComponent implements OnInit {
  noteVal = 'New Note';
  date = new Date();
  totalArray = [];
  searchTerm;
  tempSomeArray;
  someoTembj;
  constructor(private ngRedux: NgRedux<IAppState>) {
  }
  ngOnInit() {
  }
  createTask() {
    if (this.noteVal !== 'New Note' && this.noteVal) {
      this.someoTembj = {
        notee: this.noteVal,
        someData: this.date
      };
      this.ngRedux.dispatch({ type: 'ADD_NOTE', subject: this.someoTembj });
      console.log(this.ngRedux.getState());
      this.totalArray.push(this.ngRedux.getState());
      this.tempSomeArray = this.totalArray;
      console.log(this.totalArray);
      this.noteVal = 'New Note';
    } else {
      window.alert('Please add Note');
    }
  }

  editFun(data) {
    this.someoTembj = {
      notee: data,
      someData: data.datenew
    };
    console.log(this.noteVal);
    if (this.noteVal !== data) {
      if (this.noteVal !== 'New Note') {
        this.createTask();
      }
    }
    this.noteVal = data;
    this.totalArray = this.totalArray.filter((item) => item.notevalue !== data);
  }
  searchValues(e): void {
    if (e) {
      this.searchTerm = e;
      this.totalArray = this.totalArray.filter((tag) => {
        return tag.notevalue.toLowerCase().indexOf(e.toLowerCase()) >= 0;
      });
    } else {
      this.totalArray = this.tempSomeArray;
    }
  }

  deleteTask() {
    this.ngRedux.dispatch({ type: 'REMOVE_NOTE', totalArray: this.tempSomeArray, subject: this.someoTembj });
    console.log(this.ngRedux.getState());
    console.log({ ...[this.ngRedux.getState()] });
    this.totalArray = [];
    let some;
    some = this.ngRedux.getState();
    some.forEach(element => {
      this.totalArray.push(element);
    });
    this.noteVal = 'New Note';
  }
}
