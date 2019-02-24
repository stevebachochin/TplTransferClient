import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ZPrinter {
  write_text: string = '1234';

  constructor() { }
}
