import { Injectable, Inject } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { ZPrinter } from './../models/printer.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfig } from "./app.config";

@Injectable()
export class GraftService {

  protected ApiUrl: string = AppConfig.settings.ConnectionStrings.apiServer;


  constructor(
    private http: HttpClient
  ) {

  }


  //Get sid/prod# records by UUID
  public getGraftRecords(unid: string) {
    //console.log('Get grafts : ' + unid);
    return this.http.get(`${this.ApiUrl}api/transfersid/filter/${unid}`);

  };


}


export class GraftForm {
  public tsid: number = 0;
  public SID: string = "";
  public PartNo: string = "";
  public UNID: string = "";
}



