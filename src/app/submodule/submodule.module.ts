import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {Inner1Component} from "../inner1/inner1.component";
import {Inner2Component} from "../inner2/inner2.component";
import {SubmoduleComponent} from "./submodule.component";

const routes : Routes = [
  {path: "inner1", component: Inner1Component},
  {path: "inner2", component: Inner2Component}
]

@NgModule({
  declarations: [
    SubmoduleComponent,
    Inner1Component,
    Inner2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SubmoduleComponent,
    RouterModule
  ]
})
export class SubmoduleModule { }
