import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { formatDate } from '@angular/common';
import { FormControl } from '@angular/forms';
import { DataService } from '../../data.service';

export const PICK_FORMATS = {
  parse: {dateInput: {month: 'short', year: 'numeric', day: 'numeric'}},
  display: {
      dateInput: 'input',
      monthYearLabel: {year: 'numeric', month: 'short'},
      dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
      monthYearA11yLabel: {year: 'numeric', month: 'long'}
  }
};

class PickDateAdapter extends NativeDateAdapter {
      
  parse(value: any): Date | null {
    if ((typeof value === 'string') && (value.indexOf('-') > -1)) {
      const str = value.split('-');
      const year = Number(str[2]);
      const month = Number(str[1]) - 1;
      const date = Number(str[0]);
      return new Date(year, month, date);
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }

  format(date: Date, displayFormat: Object): string {
      if (displayFormat === 'input') {
          return formatDate(date,'dd-MM-yyyy',this.locale);;
      } else {
          return date.toDateString();
      }
  }
}

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: PickDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
  ]
})
export class DatePickerComponent implements OnInit {

  @Input() date;
  @Output() dateNotify = new EventEmitter<Date>();
  @Output() dateChange:EventEmitter<MatDatepickerInputEvent<any>>;

  datePicker;

  valueChange() {
    this.dateNotify.emit(this.date);
  }

  dateChanged(event: any) {
    this.dateNotify.emit(event.value);
  }

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.datePicker = new FormControl(this.date);
  }

}