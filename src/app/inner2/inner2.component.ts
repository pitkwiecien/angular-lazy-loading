import { Component } from '@angular/core';
import {NameService} from "../name.service";

@Component({
  selector: 'app-inner2',
  templateUrl: './inner2.component.html',
  styleUrl: './inner2.component.css'
})
export class Inner2Component {
  name: string = '';

  constructor(private nameService: NameService) { }

  ngOnInit() {
    this.name = this.nameService.getName();
  }
}
