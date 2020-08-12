import { Component, OnInit, ChangeDetectorRef, AfterViewInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ListData } from '../model';

@Component({
  selector: 'app-ntt-dropdown',
  templateUrl: './ntt-dropdown.component.html',
  styleUrls: ['./ntt-dropdown.component.css']
})
export class NttDropdownComponent implements OnInit, AfterViewInit, OnDestroy {
  searchText = '';
  @Input() listData: ListData[];
  @Input() displayAddBtn: boolean = false;
  @Input() maxDisplayItem: number = 5;
  @Input() selectedItem: ListData;
  @Output() valueChange: EventEmitter<ListData> = new EventEmitter();

  listDataTemp: ListData[];
  totalLength: number;
  moreVal: number;
  displayMore = false;
  displaySearch = false;

  inputSub: Subject<string> = new Subject<string>();

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.listDataTemp = this.listData;
    this.totalLength = (this.listDataTemp) ? this.listDataTemp.length : 0;

    if (this.maxDisplayItem > 0 && this.maxDisplayItem <= this.totalLength) {
      this.listData = this.listData.slice(0, this.maxDisplayItem);
      this.moreVal = this.totalLength - this.maxDisplayItem;
      this.displayMore = true;
    }
  }

  ngAfterViewInit() {
    this.inputSub.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((val) => {
      this.searchText = val;
      this.filterList();
    });
  }

  inputChanged(text: string) {
    this.inputSub.next(text);
  }

  filterList() {
    if (this.searchText) {
      this.displayMore = false;
      this.listData = this.listDataTemp.filter(row => row.value.toLowerCase().startsWith(this.searchText.toLowerCase()));
    } else {
      this.listData = this.listDataTemp;
      if (this.maxDisplayItem > 0 && this.maxDisplayItem <= this.totalLength) {
        this.listData = this.listData.slice(0, this.maxDisplayItem);
        this.moreVal = this.totalLength - this.maxDisplayItem;
        this.displayMore = true;
      }
      this.changeDetector.detectChanges();
    }
  }

  selectItem(item: ListData) {
    this.selectedItem = item;
    this.displaySearch = false;
    this.setData();
    this.valueChange.emit(this.selectedItem);
  }

  loadMore() {
    this.listData = this.listDataTemp;
    this.displayMore = false;
  }

  addCountry() {
    this.selectedItem = { key: '', value: this.searchText };
    this.displaySearch = false;
    this.setData();
    this.valueChange.emit(this.selectedItem);
  }

  showSearchBox() {
    this.displaySearch = true;
  }

  setData() {
    this.searchText = '';
    this.totalLength = (this.listDataTemp) ? this.listDataTemp.length : 0;
    this.listData = this.listDataTemp;
    if (this.maxDisplayItem > 0 && this.maxDisplayItem <= this.totalLength) {
      this.listData = this.listData.slice(0, this.maxDisplayItem);
      this.moreVal = this.totalLength - this.maxDisplayItem;
      this.displayMore = true;
    }
  }

  ngOnDestroy() {
    this.inputSub.unsubscribe();
  }
}
