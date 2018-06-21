import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TimeSlot} from '../shared/time-slot.model';
import {AgendaEntry} from '../shared/agenda.model';
import {Room} from '../shared/room.model';

@Component({
  selector: 'cf-agenda-table',
  templateUrl: './agenda-table.component.html',
  styleUrls: ['./agenda-table.component.scss']
})
export class AgendaTableComponent implements OnInit, OnChanges {
  @Input()
  slots: TimeSlot[];
  @Input()
  agenda: AgendaEntry[][] = [];
  _rooms: Room[] = [];
  selectedRooms = [];

  constructor() {
  }

  ngOnInit() {
  }

  @Input('rooms')
  set rooms(value: Room[]) {
    console.log(value)
    if (value) {
      this._rooms = value;
      this.selectedRooms = value;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
