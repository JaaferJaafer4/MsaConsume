import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendars',
  templateUrl: './calendars.component.html',
  styleUrls: ['./calendars.component.css']
})
export class CalendarsComponent implements OnInit {
  list_events! : Event[];
  event : Event = new Event();

  constructor(private _service : CalendarService) { }

  ngOnInit(): void {
      this._service.getCalendars().subscribe(
        data => this.list_events = data
      )
  }


  add()
  {
    this._service.addCalendar(this.event).subscribe(
      data => {this.list_events.push(data);
        this.event = new Event();
      }
    )
  }


  delete(id : number)
  {
    this._service.delete(id).subscribe(
      data => this.list_events = this.list_events.filter(item => item.eventId != id)
    )
  }

}
