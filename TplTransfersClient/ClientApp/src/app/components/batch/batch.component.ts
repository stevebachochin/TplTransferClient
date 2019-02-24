import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
//import { FormLanguageService, FormLanguage } from '../../services/languageService';
import { AppComponent } from '../../app.component';
import { NgZone } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { PrinterService } from '../../services/printerService';
import { DepopBatchService, BatchForm } from '../../services/depopBatchService';
import { ZPrinter } from '../../models/printer.model';
import { NgForm } from '@angular/forms';
import * as BrowserPrnt from '../../../assets/js/BrowserPrint-2.0.0.75.min.js';
import { Observable } from 'rxjs';
import { Globals } from '../../services/globalService';
declare var BrowserPrnt: any;


@Component({
  selector: 'home',
  templateUrl: './batch.component.html',
  styleUrls: ['../css/view.component.css'],
})
export class BatchComponent implements OnInit {
 
  thisForm: NgForm;
  resourceLoaded: boolean;
  msg: string = "";
  prt: string = "";
  printerData = new ZPrinter();
  selected_device;
  devices = [];
  donorID = "";
  allTransfers: Observable<BatchForm[]>;
  displayedColumns = ['TransferStep', 'TransferDate'];
  printerText: string = "";

  constructor(
    private zone: NgZone,
   // private langDataService: FormLanguageService,
    private printerService: PrinterService,
    private depopBatchService: DepopBatchService,
    private route: ActivatedRoute,
    private appComponent: AppComponent,
    private router: Router,
    private sanitizer: DomSanitizer,
    private globals: Globals
  ) {

  }


  // WHEN THE PAGE INITIALLY LOADS... 
  ngOnInit() {
    this.resourceLoaded = true;
    this.route.queryParams.subscribe(params => {
      this.donorID = params['donorid'];
      this.globals.donorId = params['donorid'];
      localStorage.setItem('donorId', params['donorid']);
      if (this.donorID === undefined) {
        this.msg = "Error! Donor URL parameter is not specified.";
        this.resourceLoaded = false;
      }
      else {
        //console.log("Donor ID --->" + this.donorID); // Print the parameter to the console.
        this.appComponent.setTitle(`Donor ${this.donorID}`);
        this.prt = `^XA^ID*.FNT^XZ
      ^XA^MSN^XZ
      ^XA^JVN^XZ
      ^XA^MCY^XZ
      ^XA^LH000,000^FWN^LRN^FS
      ^^FO20,30^A0N,40,40^FDDONOR #: ${this.donorID}^FS
      ^FO20,90^A0N, 40,40^FDBATCH #: 12334^FS
      ^FO20,150^A0N, 40,40^FDQUANTITY: 2^FS
      ^PQ1^MCN^XZ`;
      }
      });
    //load DONOR TRANFER DOCUMENTS
    this.depopBatchService.getTransferRecords(this.donorID).subscribe(
      (data: any) => {
        this.allTransfers = data;
        this.resourceLoaded = true;
      })
 
  }

getFormMsg(msgString: string) {
  this.msg = msgString;
}



}
