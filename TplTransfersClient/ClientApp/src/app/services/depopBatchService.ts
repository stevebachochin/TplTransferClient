import { Injectable, Inject } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { ZPrinter } from './../models/printer.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfig } from "./app.config";

@Injectable()
export class DepopBatchService {

  protected ApiUrl: string = AppConfig.settings.ConnectionStrings.apiServer;


  constructor(
    private http: HttpClient
  ) {

  }

  //GET list records by donor id
  public getTransferRecords(donorID: string) {
    //console.log('Get batch records : ' + donorID);
    return this.http.get(`${this.ApiUrl}api/depopbatch/filter/${donorID}`);

  };


  //GET specific record from the list
  public getStep(id: string) {
    console.log('Get Form : ' + id);
    return this.http.get(`${this.ApiUrl}api/depopbatch/${id}`);

  };




}
  export class BatchForm {
    public did: number = 0;
    public DonorID: string = "";
    public TransferStep: string = "";
    public TransferDate: Date | undefined;
    public SID_UNID: string = "";
}




