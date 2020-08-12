import { Component } from '@angular/core';
import { ListData } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nttdata-codetest';
  listData = [
    { key: '91', value: 'India' },
    { key: '65', value: 'Singapore' },
    { key: '01', value: 'Us' },
    { key: '02', value: 'Canada' },
    { key: '94', value: 'Shrilanka' },
    { key: '93', value: 'Bangladesh' },
    { key: '90', value: 'China' },
    { key: '955', value: 'Austrelia' },
    { key: '92', value: 'Pakistan' }
  ];

  selectedValue(val: ListData) {
    alert('selected Country: ' + val.value);
  }
}
