import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ConfirmationDialogComponent} from './confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  constructor(public dialog: MatDialog) {
  }

  show(message: string): Promise<any> {
    return this.dialog
      .open(ConfirmationDialogComponent, {
        data: {message: message}
      })
      .afterClosed().toPromise();
  }
}
