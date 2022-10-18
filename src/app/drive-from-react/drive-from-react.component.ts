import {HttpClient} from '@angular/common/http';
import {Component, EventEmitter, Input, OnDestroy, AfterViewInit, Output, OnInit} from '@angular/core';
import {data} from '../../assets/build/asset-manifest'

@Component({
  selector: 'app-drive-from-react',
  templateUrl: './drive-from-react.component.html',
  styleUrls: ['./drive-from-react.component.scss']
})
// export class DriveFromReactComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class DriveFromReactComponent implements AfterViewInit, OnDestroy {

  @Input() isPreview = false;
  cssElement: any;
  jsElement: any;

  @Input() showPreviewButton = true;

  @Input()
  data: any = {};

  appData = data;

  @Output() onData = new EventEmitter<any>();

  constructor(private http: HttpClient) {
  }

  handleFormCreation(data: any, component: this) {
    console.log('formdata', data);
    component.data = data;
    this.onData.emit(data);
  }


  // handleFormSubmit(formData: any) {
  //   console.log('formData', formData);
  // }

  ngAfterViewInit(): void {
    console.log('appData', this.appData);
    this.cssElement = document.createElement('link');
    this.cssElement.rel = 'stylesheet';
    this.cssElement.type = "text/css";
    this.cssElement.href = `../assets/build${this.appData.files['main.css']}`;
    // console.log(this.cssElement);

    this.jsElement = document.createElement('script');
    this.jsElement.id = 'fb-js';
    // this.jsElement.type = "text/javascript"

    this.jsElement.crossOrigin = '';
    // this.jsElement.src = `../assets/build${this.appData.files['runtime-main.js']}`;
    this.jsElement.src = `../assets/build${this.appData.files['main.js']}`;

    console.log(this.jsElement);

    this.jsElement.onload = (event: any) => {
      console.log(event);
      document.head.appendChild(this.cssElement);

      this.handleReactView();
    }
    document.head.appendChild(this.jsElement);


    this.cssElement.onload = () => this.handleReactView();

    // document.head.appendChild(this.cssElement);
  }

  // handleFormCreation(data: any, component: any) {
  //   console.log(data,component);
  //   this.onData.emit(data);
  //   this.data = data;
  //   console.log(data);
  //   (window as { [key: string]: any })['renderPreviewForm'](
  //     'counter-container',
  //     { isPreview: true, data: this.data, handleFormCreation: this.handleFormCreation}
  //   );
  // }
  handlePreview() {
    this.isPreview = !this.isPreview;
    // this.handleReactView();

  }

  handleReactView() {
    (window as { [key: string]: any })['renderDrive'](
      'drive-container',
      {

      }
    );
  }

  ngOnDestroy() {
    this.cssElement.remove();
    this.jsElement.remove();
  }

  ngOnInit(): void {
  }

}
