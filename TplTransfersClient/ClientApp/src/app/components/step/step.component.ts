import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
//import { FormLanguageService, FormLanguage } from '../../services/languageService';
import { AppComponent } from '../../app.component';
import { NgZone } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { Globals } from '../../services/globalService';
import { DepopBatchService, BatchForm } from '../../services/depopBatchService';
import { GraftService, GraftForm } from '../../services/graftService';
import { ZPrinter } from '../../models/printer.model';
import { NgForm } from '@angular/forms';
import * as BrowserPrnt from '../../../assets/js/BrowserPrint-2.0.0.75.min.js';
import { Observable } from 'rxjs';
declare var BrowserPrnt: any;


@Component({
  selector: 'step',
  templateUrl: './step.component.html',
  styleUrls: ['../css/view.component.css'],
  //changeDetection: ChangeDetectionStrategy.Default providers: [UploadFileService]
})
export class StepComponent implements OnInit {
  thisForm: NgForm;
  graftList: GraftForm[];
  resourceLoaded: boolean;
  msg: string = "";
  donorId: string = "";
  stageForm: BatchForm;

  constructor(
    private zone: NgZone,
    // private langDataService: FormLanguageService,
    private depopBatchService: DepopBatchService,
    private graftService: GraftService,
    private route: ActivatedRoute,
    private appComponent: AppComponent,
    private router: Router,
    private sanitizer: DomSanitizer,
    private globals: Globals
  ) {

  }


  // WHEN THE PAGE INITIALLY LOADS... 
  ngOnInit() {
    this.donorId = localStorage.getItem("donorId");
    this.resourceLoaded = true;
    this.route.params.subscribe(
      params => {
        let id = params['id'];
        this.getStepRecord(id);

      }
    );

  }


  /**GET CURRENT FORM */
  getStepRecord(id: string) {
    this.depopBatchService.getStep(id)
      .subscribe((data: BatchForm) => {
        this.stageForm = data;
        this.getGraftRecords(data.SID_UNID);

      },
        error => {
          this.msg = error;
          this.resourceLoaded = false;
        },
        () => {
          console.log("No errors");
        }
      )
  }

  getGraftRecords(unids) {
    //console.log('------------> ' + unids);
    this.graftList = new Array();
    var unidArr: string[] = unids.split(",");
    for (let unid of unidArr) {
      this.graftService.getGraftRecords(unid).subscribe(
        (data: GraftForm) => {
          this.graftList.push(
            {
              "tsid": data.tsid,
              "SID": data.SID,
              "PartNo": data.PartNo,
              "UNID": data.UNID
            }
          );
        },
        error => {
          this.resourceLoaded = false;
        },
        () => {
          console.log("No errors");
        }
      )
      
    }
    

  }




  getFormMsg(msgString: string) {
    this.msg = msgString;
  }

}
