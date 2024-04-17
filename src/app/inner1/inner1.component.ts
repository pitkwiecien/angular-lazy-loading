import { Component } from '@angular/core';
import {NameService} from "../name.service";

@Component({
  selector: 'app-inner1',
  templateUrl: './inner1.component.html',
  styleUrl: './inner1.component.css'
})
export class Inner1Component {
  name: string = '';

  constructor(private nameService: NameService) { }

  saveName() {
    this.nameService.setName(this.name);
    this.name = ''; // Clear input field after submission
  }
}
