import { Component } from '@angular/core';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DialogBox';
  constructor(private matDialog:MatDialog){}
  openDialog(){
    this.matDialog.open(DialogboxComponent,{
      width:'350px',
    })
  }
}
