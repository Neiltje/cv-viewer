import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cv-heading',
  templateUrl: './cv-heading.component.html',
  styleUrls: ['./cv-heading.component.scss']
})
export class CvHeadingComponent implements OnInit {

  @Input() name;
  @Input() title;
  @Input() text;
  @Input() image;

  @Output() textNotify = new EventEmitter<string>();

  constructor(
    public dataService: DataService
  ) { }

  changeMessage() {
    this.textNotify.emit(this.text);
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.onload = (event:any) => {
      var base64String = event.target.result;
      base64String = base64String.substr(base64String.indexOf(",") + 1);
      this.image = base64String;
      this.dataService.setImage(this.image);
    }
    reader.readAsDataURL(file);
  }

  ngOnInit() {
    this.dataService.getImageNotify().subscribe(image => {
      this.image = image;
    });
  }

}
