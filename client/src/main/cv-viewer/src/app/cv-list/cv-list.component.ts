import { Component, OnInit } from '@angular/core';
import { CvService } from '../api/index'
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { AuthenticationService } from '../authentication.service';
import { CvSummary } from '../api/index';

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
    public authenticationService: AuthenticationService,
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

  canDelete(cv: CvSummary) {
    return this.authenticationService.authenticated
      && (this.authenticationService.userName == cv.owner || this.authenticationService.isAdmin()); 
  }

  deleteCv(cv: CvSummary) {
    if(window.confirm('Are sure you want to delete CV for ' + cv.name + '?')){
      this.dataService.deleteCv(cv.name);
      const index = this.cvList.indexOf(cv, 0);
      if (index > -1) {
        this.cvList.splice(index, 1);
      }
    }
  }

  ngOnInit() {
    this.cvService.getAllCVSummaries().subscribe((response) => {
      this.cvList = response;
    });
    this.route.paramMap.subscribe(params => {
        this.dataService.unsetCv();
    });
  }

}
