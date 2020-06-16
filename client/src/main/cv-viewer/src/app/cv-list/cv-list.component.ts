import { Component, OnInit } from '@angular/core';
import { CvService } from '../api/index'
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss']
})
export class CvListComponent implements OnInit {

  cvList;
  nameFilter;
  summaryFilter;

  constructor(
    private cvService: CvService,
    private route: ActivatedRoute,
    public dataService: DataService
  ) {
  }

  onKeyName(event: any) {
    this.nameFilter = event.target.value;
  }

  onKeySummary(event: any) {
    this.summaryFilter = event.target.value;
  }

  filter(item: any, args: string[]) {
    return item == null || args[1] == null || item[args[0]] != null && item[args[0]].toUpperCase( ).includes(args[1].toUpperCase( ));
  }

  ngOnInit() {
    this.cvList = this.cvService.getAllCVSummaries();
    this.route.paramMap.subscribe(params => {
        this.dataService.unsetCv();
    });
  }

}
