import { Injectable, Inject } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { ZPrinter } from './../models/printer.model';

@Injectable()
export class PrinterService {

  private zprint: ZPrinter;
  private _printerData = new BehaviorSubject(this.zprint);
  printerData = this._printerData.asObservable();

  changePrinterData(NewPrinterData: ZPrinter) {
    this._printerData.next(NewPrinterData);
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}






