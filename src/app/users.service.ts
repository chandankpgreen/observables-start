import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersActivated = new Subject();
  constructor() { }
}
