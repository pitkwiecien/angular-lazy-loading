import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  private userName: string = 'stranger';

  setName(name: string) {
    this.userName = name;
  }

  getName() {
    return this.userName;
  }
}
