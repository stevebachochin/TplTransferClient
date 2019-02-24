import { Injectable, Inject } from "@angular/core";

@Injectable()
export class GlobalService {
  constructor() { }


  //Get sid/prod# records by UUID
  public getGlobals() {
    //console.log('Get batch records : ' + donorID);
  };


}


export class Globals {
  public donorId: string = "";
}



