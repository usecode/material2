import { Component, Optional } from '@angular/core';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MdSnackBar]
})

export class AppComponent {
  isDarkTheme: boolean;
  lastDialogResult: string;

  messages: Object = {};
  folders: Object = {};
  notes: Object = {};

  constructor(private dialog: MdDialog, private snackbar: MdSnackBar) {

  }

  ngOnInit() {
    this.isDarkTheme = false;

    this.messages = [
      {from: 'Paul', subject: 'Subject', message: 'Lorem Ipsum dolor'},
      {from: 'Mike', subject: 'Subject', message: 'Lorem Ipsum dolor'},
      {from: 'David', subject: 'Subject', message: 'Lorem Ipsum dolor'}
    ];

    this.folders = [
      {name: 'Paul', updated: '2016-10-15 17:44'},
      {name: 'Mike', updated: '2016-10-15 17:44'},
      {name: 'David', updated: '2016-10-15 17:44'}
    ];

    this.notes = [
      {name: 'Paul', updated: '2016-10-15 17:44'},
      {name: 'Mike', updated: '2016-10-15 17:44'},
      {name: 'David', updated: '2016-10-15 17:44'}
    ];
  }

  printValue($event) {
    console.log($event);
  }

  showSnackbar() {
    this.snackbar.open('YUM SNACKS', 'CHEW');
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }
}

@Component({
  template: `
    <p>This is a dialog</p>
    <p>
      <label>
        This is a text box inside of a dialog.
        <input #dialogInput>
      </label>
    </p>
    <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>
  `,
})
export class DialogContent {
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}
