import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal'
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PopoverModule } from 'ngx-bootstrap/popover';

const modules: any[] = [
  CommonModule,
  AlertModule.forRoot(),
  BsDatepickerModule.forRoot(),
  BsDropdownModule.forRoot(),
  ModalModule.forRoot(),
  PopoverModule.forRoot()
];
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class NgxBootstrapModule { }